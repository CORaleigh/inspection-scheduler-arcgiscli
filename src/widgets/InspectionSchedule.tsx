/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import InspectionScheduleViewModel from './InspectionSchedule/InspectionScheduleViewModel';
import Graphic from '@arcgis/core/Graphic';

export interface InspectionScheduleProperties extends esri.WidgetProperties {
	view?: esri.MapView | esri.SceneView;
	inspections?: esri.Graphic[];
	inspectors?: string[];

	layer?: esri.FeatureLayer;
	table?: esri.FeatureLayer;
	inspector?: string;
}

const CSS = {
	base: '@arcgis/core-widget inspectionschedule-base',
};

@subclass('app.widgets.InspectionSchedule')
export default class InspectionSchedule extends Widget {
	@aliasOf('viewModel.view')
	view!: esri.MapView | esri.SceneView;
	@renderable()
	@aliasOf('viewModel.inspections')
	inspections!: esri.Graphic[];
	@renderable()
	@aliasOf('viewModel.inspectors')
	inspectors!: string[];
	@renderable()
	@aliasOf('viewModel.inspector')
	inspector!: string;
	@aliasOf('viewModel.layer')
	layer!: esri.FeatureLayer;
	@aliasOf('viewModel.table')
	table!: esri.FeatureLayer;

	@property({
		type: InspectionScheduleViewModel,
	})
	@renderable()
	viewModel: InspectionScheduleViewModel = new InspectionScheduleViewModel();

	constructor(properties?: InspectionScheduleProperties) {
		super(properties);
	}

	comboboxCreated = (elm: Element): void => {
		elm.addEventListener('calciteComboboxItemChange', (e: any) => {
			this.inspector = e.detail.getAttribute('value');
		});
	};
	updateOrder = (
		newOrder: number,
		oldOrder: number,
		objectId: number,
		inspection: __esri.Graphic,
	): number | undefined => {
		if (inspection.getAttribute('OBJECTID') === objectId) {
			return newOrder;
		} else if (newOrder > oldOrder) {
			if (
				inspection.getAttribute('InspectionOrder') <= newOrder &&
				inspection.getAttribute('InspectionOrder') > oldOrder
			) {
				return inspection.getAttribute('InspectionOrder') - 1;
			}
		} else {
			if (
				inspection.getAttribute('InspectionOrder') >= newOrder &&
				inspection.getAttribute('InspectionOrder') < oldOrder
			) {
				return inspection.getAttribute('InspectionOrder') + 1;
			}
		}
	};
	inputChanged = (e) => {
		this.viewModel.setObjectID();
		const inspection = this.inspections.find((inspection) => {
			return inspection.getAttribute('OBJECTID') === parseInt(e.currentTarget.parentElement.value);
		});
		const newOrder = parseInt(e.detail.value);
		console.log(newOrder);
		const oldOrder = inspection?.getAttribute('InspectionOrder');
		console.log(oldOrder);

		const oid = parseInt(e.currentTarget.parentElement.value);
		this.inspections.forEach((inspection) => {
			const newValue = this.updateOrder(newOrder, oldOrder, oid, inspection);
			if (newValue) {
				inspection.setAttribute('InspectionOrder', newValue);

				document
					.querySelector(
						`calcite-value-list-item[value="${inspection.getAttribute('OBJECTID')}"] calcite-input`,
					)
					?.setAttribute('value', newValue.toString());
			}
		});

		this.inspections = [
			...this.inspections.sort((a, b) => {
				return a.getAttribute('InspectionOrder') - b.getAttribute('InspectionOrder');
			}),
		];

		const updates = this.inspections.map((inspection) => {
			return new Graphic({ attributes: inspection.attributes });
		});
		this.viewModel.setObjectID();
		this.layer.applyEdits({ updateFeatures: updates }).then(() => {
			this.viewModel.createLabelLayer();
		});
	};
	inputCreated = (elm: Element) => {
		elm.addEventListener('calciteInputBlur', this.inputChanged);
	};

	listCreated = (elm: Element) => {
		elm.addEventListener('calciteListChange', (e) => {
			if ((e as any).detail.keys().next().value) {
				const order = parseInt((e as any).detail.keys().next().value);
				this.viewModel.labelLayer
					.queryFeatures({ where: `InspectionOrder = ${order}`, outFields: ['*'], returnGeometry: true })
					.then((featureSet) => {
						this.view.popup.open({
							features: featureSet.features,
							location: featureSet.features[0].geometry,
						});
					});
				document
					.querySelector('calcite-value-list')
					?.querySelectorAll('calcite-value-list-item')
					.forEach((item) => {
						item?.setAttribute('style', 'background-color: transparent');
					});
				document
					.querySelector('calcite-value-list')
					?.querySelector(`[value="${order}"]`)
					?.setAttribute('style', 'background-color: var(--calcite-ui-brand)');
			}
		});
		elm.addEventListener('calciteListOrderChange', (e) => {
			this.viewModel.setObjectID();

			(e as any).detail.forEach((d: any, i: number) => {
				const inspection = this.inspections.find((inspection) => {
					return inspection.getAttribute('OBJECTID') === parseInt(d);
				});
				inspection?.setAttribute('InspectionOrder', i + 1);

				document
					.querySelector(`calcite-value-list-item[value="${d}"] calcite-input`)
					?.setAttribute('value', (i + 1).toString());
			});
			const updates = this.inspections.map((inspection) => {
				return new Graphic({ attributes: inspection.attributes });
			});
			this.viewModel.setObjectID();

			this.layer.applyEdits({ updateFeatures: updates }).then(() => {
				this.viewModel.createLabelLayer();
			});
		});
	};
	// saveCreated = (elm: Element) => {};

	render(): tsx.JSX.Element {
		return (
			<div class={CSS.base}>
				<calcite-combobox
					label="demo combobox"
					placeholder="placeholder"
					selection-mode="single"
					scale="m"
					max-items="0"
					dir="ltr"
					calcite-hydrated=""
					afterCreate={this.comboboxCreated}
				>
					{this.inspectors.map((inspector) => {
						return (
							<calcite-combobox-item
								value={inspector}
								text-label={inspector}
								key={inspector}
								placeholder="Select inspector"
								selected={inspector === this.inspector}
							></calcite-combobox-item>
						);
					})}
				</calcite-combobox>
				{this.inspections.length ? (
					''
				) : (
					<div class="message">
						<calcite-icon icon="checkCircleF" class="completed-icon"></calcite-icon>{' '}
						<div class="inner">All inspections have been completed</div>
					</div>
				)}
				<calcite-panel dir="ltr" height-scale="m" intl-close="Close" theme="light" id="inspectionPanel">
					<calcite-value-list dir="ltr" drag-enabled="" theme="light" afterCreate={this.listCreated}>
						{this.inspections.map((inspection) => {
							console.log(inspection.getObjectId());
							return (
								<calcite-value-list-item
									label={`${inspection.getAttribute('Address')} (${inspection.getAttribute(
										'count',
									)} ${inspection.getAttribute('count') > 1 ? 'inspections' : 'inspection'})`}
									description={`${inspection.getAttribute('description')}`}
									key={inspection.getAttribute('OBJECTID')}
									value={inspection.getAttribute('InspectionOrder')}
								>
									<calcite-input
										min="1"
										max={this.inspections.length.toString()}
										value={inspection.getAttribute('InspectionOrder')}
										step="1"
										type="number"
										slot="actions-end"
										alignment="start"
										afterCreate={this.inputCreated}
									></calcite-input>
								</calcite-value-list-item>
							);
						})}
					</calcite-value-list>
					{/* <calcite-button
						afterCreate={this.saveCreated}
						slot="footer"
						appearance="solid"
						color="blue"
						scale="m"
						href=""
						dir="ltr"
						alignment="center"
						width="full"
						calcite-hydrated=""
					>
						Save
					</calcite-button> */}
				</calcite-panel>
			</div>
		);
	}
}
