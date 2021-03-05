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
if (window.innerWidth <= 768) {
	document.querySelector('#viewDiv')?.classList.add('esri-hidden');
}
window.addEventListener('resize', () => {
	if (window.innerWidth <= 768) {
		document.querySelector('#viewDiv')?.classList.add('esri-hidden');
		document.querySelector('#table')?.classList.remove('esri-hidden');
	} else {
		document.querySelector('#viewDiv')?.classList.remove('esri-hidden');
		document.querySelector('#table')?.classList.remove('esri-hidden');
	}
});

view.when(initWidgets);
