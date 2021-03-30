/* eslint-disable @typescript-eslint/no-explicit-any */
// Map data
import { map } from './data/app';

// MapView
import MapView from '@arcgis/core/views/MapView';

// widget utils
import { initWidgets } from './widgets';
import * as msal from '@azure/msal-browser';
/**
 * Initialize application
 */
const msalConfig = {
	auth: {
		clientId: '33200cc1-7d88-47e2-801d-6e14e5e3aa34',
	},
};
const msalInstance = new msal.PublicClientApplication(msalConfig);
// msalInstance.handleRedirectCallback((error, response) => {
// 	// handle redirect response or error
// });
const loginRequest = {
	scopes: ['user.read'], // optional Array<string>
};

function handleResponse() {
	debugger;
	const accounts = msalInstance.getAllAccounts();
	let name = '';
	if (accounts === null) {
		// no accounts detected
	} else if (accounts.length > 1) {
		// Add choose account code here
	} else if (accounts.length === 1) {
		name = accounts[0].name?.split(',').reverse().join(' ').trimStart() as string;
	}
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
	//view.when((view: MapView) => {
	initWidgets(view, name);
	//});
}

window.addEventListener('load', () => {
	msalInstance.handleRedirectPromise().then(handleResponse);
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
