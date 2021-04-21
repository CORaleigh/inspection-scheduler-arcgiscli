/* eslint-disable @typescript-eslint/no-explicit-any */
// Widgets
import Locate from '@arcgis/core/widgets/Locate';
import { featureLayer, featureTable } from './data/app';
import InspectionSchedule from './widgets/InspectionSchedule';
import * as promiseUtils from '@arcgis/core/core/promiseUtils';
function getInspectors(): Promise<string[]> {
	return promiseUtils.create((resolve) => {
		featureLayer
			.queryFeatures({
				returnDistinctValues: true,
				outFields: ['PrimaryInspector'],
				returnGeometry: false,
				orderByFields: ['PrimaryInspector'],
				where: `PrimaryInspector is not null`,
			})
			.then((featureSet) => {
				resolve(
					featureSet.features.map((feature) => {
						return feature.getAttribute('PrimaryInspector');
					}),
				);
			});
	});
}

export function initWidgets(view: __esri.MapView, name: string): __esri.MapView {
	document.querySelector('calcite-radio-group')?.addEventListener('calciteRadioGroupChange', (e) => {
		if (window.innerWidth <= 545) {
			if ((e as any).detail === 'map') {
				document.querySelector('#viewDiv')?.classList.remove('esri-hidden');
				document.querySelector('#table')?.classList.add('esri-hidden');
			} else {
				document.querySelector('#viewDiv')?.classList.add('esri-hidden');
				document.querySelector('#table')?.classList.remove('esri-hidden');
			}
		}
	});

	const locate = new Locate({ view: view });
	view.ui.add(locate, 'top-left');

	getInspectors().then((inspectors) => {
		new InspectionSchedule({
			view: view,
			container: 'table',
			inspectors: inspectors,
			inspections: [],
			layer: featureLayer,
			table: featureTable,
			inspector: name,
		});
	});

	return view;
}
