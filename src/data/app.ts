import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import ArcGISMap from '@arcgis/core/Map';
import PopupTemplate from '@arcgis/core/PopupTemplate';
//import CustomContent from '@arcgis/core/popup/content/CustomContent';

export const featureLayer = new FeatureLayer({
	portalItem: {
		id: 'fb4ba67c7aa24553830eea072bced580',
	},
	layerId: 0,

	popupTemplate: new PopupTemplate({
		title: '#{InspectionOrder} {address}',
		expressionInfos: [
			{
				name: 'inspections',
				title: 'inspections',
				expression: `var inspection = '';
			for (var i in FeatureSetByRelationshipName($feature, 'Inspections', ['*'], false)) {
				if (i.InspectionStatus != 'Canceled') {
					   inspection += Concatenate(i.LinkNumber,' - ',i.InspectionType,' - ', i.InspectionStatus,TextFormatting.NewLine,TextFormatting.NewLine) 
			
				}
			}
			return inspection`,
			},
		],
		content: [
			// new CustomContent({
			// 	outFields: ['*'],
			// 	creator: (e: any) => {
			// 		const inspection = e.graphic;
			// 		const input = document.createElement('calcite-input');
			// 		input.setAttribute('label', inspection.attributes.Address);
			// 		input.setAttribute('min', '1');
			// 		//input.setAttribute('max', (inspections.length + 1).toString());
			// 		input.setAttribute('value', inspection.getAttribute('InspectionOrder'));
			// 		input.setAttribute('step', '1');
			// 		input.setAttribute('type', 'number');
			// 		input.setAttribute('number-button-type', 'horizontal');

			// 		input.setAttribute('slot', 'actions-end');
			// 		input.setAttribute('alignment', 'start');
			// 		return input;
			// 	},
			// }),

			{ type: 'text', text: '{expression/inspections}' },
		],
	}),
});

export const featureTable = new FeatureLayer({
	portalItem: {
		id: 'fb4ba67c7aa24553830eea072bced580',
	},
	layerId: 1,
	refreshInterval: 0.1,
});

export const map = new ArcGISMap({
	basemap: {
		baseLayers: [
			new VectorTileLayer({
				portalItem: {
					// topographic
					id: 'b69e76a446ac479998ff31de839ba323',
				},
			}),
		],
	},
	layers: [featureLayer],
	tables: [featureTable],
});
