import { aliasOf, property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { renderable, tsx } from '@arcgis/core/widgets/support/widget';

import Widget from '@arcgis/core/widgets/Widget';

import InspectionListViewModel from './InspectionList/InspectionListViewModel';

export interface InspectionListProperties extends __esri.WidgetProperties {
	view?: __esri.MapView | __esri.SceneView;
	inspections?: __esri.Graphic[];
	inspectors?: __esri.Graphic[];

	layer?: __esri.FeatureLayer;
	table?: __esri.FeatureLayer;
	locate?: __esri.Locate;
}

const CSS = {
	base: 'esri-widget inspectionlist-base',
};

@subclass('app.widgets.InspectionList')
export default class InspectionList extends Widget {
	@aliasOf('viewModel.view')
	view!: __esri.MapView | __esri.SceneView;
	@aliasOf('viewModel.inspections')
	inspections!: __esri.Graphic[];
	@aliasOf('viewModel.inspectors')
	inspectors!: __esri.Graphic[];
	@aliasOf('viewModel.layer')
	layer!: __esri.FeatureLayer[];
	@aliasOf('viewModel.table')
	table!: __esri.FeatureLayer[];
	@aliasOf('viewModel.locate')
	locate!: __esri.Locate;
	@aliasOf('viewModel.inspectionUpdate')
	inspectionUpdate!: __esri.PausableWatchHandle;
	@property({
		type: InspectionListViewModel,
	})
	@renderable()
	viewModel: InspectionListViewModel = new InspectionListViewModel();

	constructor(properties?: InspectionListProperties) {
		super(properties);
	}

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
				>
					{this.inspectors.map((inspector) => {
						return (
							<calcite-combobox-item
								value={inspector.getAttribute('PrimaryInspector')}
								text-label={inspector.getAttribute('PrimaryInspector')}
								key={inspector.getAttribute('PrimaryInspector')}
								selected={inspector.getAttribute('PrimaryInspector') === 'Timithy Driver'}
								afterCreate={this.viewModel.comboCreated}
							></calcite-combobox-item>
						);
					})}
				</calcite-combobox>
				<calcite-panel dir="ltr" height-scale="m" intl-close="Close" theme="light">
					<calcite-value-list
						dir="ltr"
						drag-enabled=""
						theme="light"
						afterCreate={this.viewModel.listCreated}
					></calcite-value-list>
					<calcite-button
						afterCreate={this.viewModel.saveCreated}
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
					</calcite-button>
				</calcite-panel>
			</div>
		);
	}
}
