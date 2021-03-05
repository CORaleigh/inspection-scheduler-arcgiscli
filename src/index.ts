/* eslint-disable @typescript-eslint/no-explicit-any */
// Map data
import { map } from './data/app';

// MapView
import MapView from '@arcgis/core/views/MapView';

// widget utils
import { initWidgets } from './widgets';

/**
 * Initialize application
 */
const view = new MapView({
	container: 'viewDiv',
	map,
	extent: {
		xmin: -78.995,
		ymin: 36.077,
		xmax: -78.253,
		ymax: 35.519,
		spatialReference: {
			wkid: 4326,
		},
	},
});

view.when(initWidgets);
