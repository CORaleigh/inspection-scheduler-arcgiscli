import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import TileLayer from '@arcgis/core/layers/TileLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import ArcGISMap from '@arcgis/core/Map';

export const featureLayer = new FeatureLayer({
	portalItem: {
		id: 'fb4ba67c7aa24553830eea072bced580',
	},
	layerId: 0,
	definitionExpression: `PrimaryInspector = 'Timithy Driver'`,
	refreshInterval: 0.1,
});

export const featureTable = new FeatureLayer({
	portalItem: {
		id: 'fb4ba67c7aa24553830eea072bced580',
	},
	layerId: 1,
	definitionExpression: `PrimaryInspector = 'Timithy Driver' and InspectionStatus != 'Canceled'`,
	refreshInterval: 0.1,
});

export const map = new ArcGISMap({
	basemap: {
		baseLayers: [
			new TileLayer({
				portalItem: {
					// world hillshade
					id: '1b243539f4514b6ba35e7d995890db1d',
				},
			}),
			new VectorTileLayer({
				portalItem: {
					// topographic
					id: '7dc6cea0b1764a1f9af2e679f642f0f5',
				},
			}),
		],
	},
	layers: [featureLayer],
	tables: [featureTable],
});
