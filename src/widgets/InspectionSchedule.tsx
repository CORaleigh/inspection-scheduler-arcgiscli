/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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
	@aliasOf('viewModel.features')
	features!: esri.Graphic[];
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
		console.log(inspection.attributes.InspectionOrder, newOrder, oldOrder, inspection.attributes.Address);

		if (inspection.attributes.OBJECTID === objectId) {
			return newOrder;
		} else if (newOrder > oldOrder) {
			if (inspection.attributes.InspectionOrder <= newOrder && inspection.attributes.InspectionOrder > oldOrder) {
				return inspection.attributes.InspectionOrder - 1;
			} else {
				return inspection.attributes.InspectionOrder;
			}
		} else if (newOrder < oldOrder) {
			if (inspection.attributes.InspectionOrder >= newOrder && inspection.attributes.InspectionOrder < oldOrder) {
				console.log(inspection.attributes.Address);
				return inspection.attributes.InspectionOrder + 1;
			} else {
			}
		} else {
			return inspection.attributes.InspectionOrder;
		}
	};

	update = (features: Graphic[]) => {
		const updates = features.map((inspection) => {
			return new Graphic({ attributes: inspection.attributes });
		});
		this.viewModel.setObjectID();
		this.layer.applyEdits({ updateFeatures: updates }).then(() => {
			this.viewModel.createLabelLayer();

			const oids = updates.map((feature) => {
				return feature.attributes.OBJECTID;
			});
			this.layer
				.queryRelatedFeatures({
					relationshipId: 0,
					objectIds: oids,
					outFields: ['OBJECTID', 'InspectionOrder'],
					returnGeometry: false,
				})
				.then((result) => {
					const records: Graphic[] = [];
					updates.forEach((update) => {
						result[update.attributes.OBJECTID].features.forEach((record: Graphic) => {
							record.attributes.InspectionOrder = update.attributes.InspectionOrder;
							records.push(record);
						});
					});
					this.table.applyEdits({ updateFeatures: records }).then((result) => {
						console.log(result);
					});
				});
		});
	};
	inputChanged = (e: any): void => {
		this.viewModel.setObjectID();
		const inspection = this.features.find((inspection) => {
			return inspection.attributes.OBJECTID === parseInt(e.currentTarget.parentElement.value);
		});
		const oldOrder = inspection?.attributes.InspectionOrder;
		console.log(oldOrder);
		const newOrder = parseInt(e.detail.value);
		console.log(newOrder);

		this.viewModel.setObjectID();

		const oid = parseInt(e.currentTarget.parentElement.value);
		this.features.forEach((inspection) => {
			const newValue = this.updateOrder(newOrder, oldOrder, oid, inspection);
			if (newValue) {
				inspection.attributes.InspectionOrder = newValue;
				console.log(inspection.attributes.InspectionOrder);

				// document
				// 	.querySelector(`calcite-value-list-item[value="${inspection.attributes.OBJECTID}"] calcite-input`)
				// 	?.setAttribute('value', newValue.toString());
			}
		});

		this.features = [
			...this.features.sort((a, b) => {
				return a.attributes.InspectionOrder - b.attributes.InspectionOrder;
			}),
		];
		//this.features = JSON.parse(JSON.stringify(this.inspections));
		this.update(this.features);
	};
	inputCreated = (elm: Element): void => {
		elm.addEventListener('calciteInputBlur', this.inputChanged);
	};

	listCreated = (elm: Element): void => {
		elm.addEventListener('calciteListChange', (e) => {
			if ((e as any).detail.keys().next().value) {
				const oid = parseInt((e as any).detail.keys().next().value);
				const feature = this.features.find((feature) => {
					return feature.attributes.OBJECTID === oid;
				}) as esri.Graphic;
				const order = feature?.attributes.InspectionOrder;
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
					?.querySelector(`[value="${oid}"]`)
					?.setAttribute('style', 'background-color: var(--calcite-ui-brand)');
			}
		});
		elm.addEventListener('calciteListOrderChange', (e) => {
			this.viewModel.setObjectID();

			(e as any).detail.forEach((d: any, i: number) => {
				const inspection: esri.Graphic = this.features.find((inspection) => {
					return inspection.attributes.OBJECTID === parseInt(d);
				}) as esri.Graphic;
				inspection.attributes.InspectionOrder = i + 1;

				document
					.querySelector(`calcite-value-list-item[value="${d}"] calcite-input`)
					?.setAttribute('value', (i + 1).toString());
			});
			this.update(this.features);
		});
	};
	listItemCreated = (elm: Element) => {
		const observer: MutationObserver = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				const node = (mutation.addedNodes[0] as HTMLElement).nextElementSibling?.shadowRoot;
				if (node) {
					node.innerHTML +=
						'<style>.description{white-space: pre-line;font-family:"Avenir Next","Helvetica Neue",Helvetica,Arial,sans-serif !important;font-size: 0.8rem !important} .title{font-size: 0.9rem !important;}';
				}
			});
			observer.disconnect();
		});
		observer.observe(elm.shadowRoot as Node, { childList: true });
	};
	// saveCreated = (elm: Element) => {};
	panelCreated = (element: Element) => {
		// const observer: MutationObserver = new MutationObserver((mutations) => {
		// 	mutations.forEach((mutation) => {
		// 		debugger;
		// 		(mutation.addedNodes[0] as HTMLElement)
		// 			.querySelector('.content-container')
		// 			?.setAttribute('style', 'height: 100%;width:100%;position:absolute;top:0;right:0;left:0;bottom:0;');
		// 	});
		// 	observer.disconnect();
		// });
		setTimeout(() => {
			element.shadowRoot
				?.querySelector('.content-container')
				?.setAttribute('style', 'height: 100%;position:absolute;');
			//observer.observe(element?.shadowRoot as Node, { childList: true });
		}, 1000);
	};
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
				<calcite-panel
					dir="ltr"
					height-scale="m"
					intl-close="Close"
					theme="light"
					id="inspectionPanel"
					afterCreate={this.panelCreated}
				>
					<calcite-value-list dir="ltr" drag-enabled="" theme="light" afterCreate={this.listCreated}>
						{this.features.map((inspection) => {
							return (
								<calcite-value-list-item
									label={`${inspection.attributes.Address} (${inspection.attributes.count} ${
										inspection.attributes.count > 1 ? 'inspections' : 'inspection'
									})`}
									description={window.innerWidth >= 545 ? `${inspection.attributes.description}` : ''}
									key={inspection.attributes.OBJECTID}
									value={inspection.attributes.OBJECTID}
									afterCreate={this.listItemCreated}
								>
									<calcite-input
										min="1"
										max={this.inspections.length.toString()}
										value={inspection.attributes.InspectionOrder}
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
