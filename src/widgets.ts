/* eslint-disable @typescript-eslint/no-explicit-any */
// Widgets
import Locate from '@arcgis/core/widgets/Locate';
import RouteTask from '@arcgis/core/tasks/RouteTask';
import RouteParameters from '@arcgis/core/tasks/support/RouteParameters';
import Graphic from '@arcgis/core/Graphic';
import FeatureSet from '@arcgis/core/tasks/support/FeatureSet';
import * as webMercatorUtils from '@arcgis/core/geometry/support/webMercatorUtils';
import Point from '@arcgis/core/geometry/Point';
import { featureLayer, featureTable } from './data/app';
import InspectionList from './widgets/InspectionList';
import MapView from '@arcgis/core/views/MapView';
function createInspectionList(view: MapView, locate: Locate, inspectionList: InspectionList) {
	featureLayer.queryExtent({ where: featureLayer.definitionExpression }).then((response) => {
		view.goTo(response.extent);
	});
	featureLayer
		.queryFeatures({
			where: featureLayer.definitionExpression,
			outFields: ['*'],
			// orderByFields: ['InspectionOrder ASC'],
		})
		.then((featureSet) => {
			const objectIds: number[] = [];
			featureSet.features.forEach((feature) => {
				objectIds.push(feature.getObjectId());
			});
			featureLayer
				.queryRelatedFeatures({ relationshipId: 0, objectIds: objectIds, outFields: ['*'] })
				.then((result) => {
					objectIds.forEach((objectId) => {
						let description = '';
						const reloids: number[] = [];
						let completed = 'True';
						result[objectId].features.forEach((relatedFeature: Graphic) => {
							if (relatedFeature.getAttribute('InspectionStatus') != 'Canceled') {
								description += `${relatedFeature.getAttribute(
									'LinkNumber',
								)} - ${relatedFeature.getAttribute('InspectionType')} - ${relatedFeature.getAttribute(
									'InspectionStatus',
								)}\n`;
								reloids.push(relatedFeature.getAttribute('OBJECTID'));
								if (relatedFeature.getAttribute('IsCompleted') === 'False') {
									completed = 'False';
								}
							}
						});
						const locationFeature = featureSet.features.find((feature) => {
							return feature.getObjectId() === objectId;
						});

						locationFeature?.setAttribute('description', description);
						locationFeature?.setAttribute('objectIds', reloids.toString());
						locationFeature?.setAttribute('count', reloids.length);
						locationFeature?.setAttribute('IsCompleted', completed);
					});
					inspectionList.inspections = featureSet.features;
				});
		});
}

function getInspectors(inspectionList: InspectionList): void {
	featureLayer
		.queryFeatures({
			returnDistinctValues: true,
			outFields: ['PrimaryInspector'],
			returnGeometry: false,
			orderByFields: ['PrimaryInspector'],
			where: `PrimaryInspector is not null`,
		})
		.then((featureSet) => {
			inspectionList.inspectors = featureSet.features;
		});
}

export function initWidgets(view: __esri.MapView): __esri.MapView {
	document.querySelector('calcite-radio-group')?.addEventListener('calciteRadioGroupChange', (e) => {
		if ((e as any).detail === 'map') {
			document.querySelector('#viewDiv')?.classList.remove('esri-hidden');
			document.querySelector('#table')?.classList.add('esri-hidden');
		} else {
			document.querySelector('#viewDiv')?.classList.add('esri-hidden');
			document.querySelector('#table')?.classList.remove('esri-hidden');
		}
	});

	const locate = new Locate({ view: view });
	view.ui.add(locate, 'top-left');
	locate.on('locate-error', (reason: any) => {
		console.log(reason);
		createInspectionList(view, locate, inspectionList);
	});
	const inspectionList: InspectionList = new InspectionList({
		view: view,
		container: 'table',
		inspectors: [],
		inspections: [],
		layer: featureLayer,
		table: featureTable,
		locate: locate,
	});
	getInspectors(inspectionList);
	locate.on('locate', (evt: any) => {
		const coords = webMercatorUtils.lngLatToXY(evt.position.coords.longitude, evt.position.coords.latitude);

		const loc: Graphic = new Graphic({
			geometry: new Point({ x: coords[0], y: coords[1], spatialReference: { wkid: 102100 } }),
			attributes: { name: 'Current Location' },
		});
		const stops: FeatureSet = new FeatureSet({ features: [loc] });
		featureLayer
			.queryFeatureCount({ where: `${featureLayer.definitionExpression} and InspectionOrder is not  null` })
			.then((count) => {
				if (count === 0) {
					featureLayer.queryFeatures().then((featureSet) => {
						if (featureSet.features.length > 0) {
							featureSet.features.forEach((feature) => {
								stops.features.push(
									new Graphic({
										geometry: feature.geometry,
										attributes: { name: feature.getAttribute('Address') },
									}),
								);
							});
							const route = new RouteTask({
								url:
									'https://mapstest.raleighnc.gov/arcgis/rest/services/Street_Network/NAServer/Route',
							});
							route
								.solve(
									new RouteParameters({
										returnRoutes: true,
										returnStops: true,
										findBestSequence: true,
										stops: stops,
										preserveFirstStop: true,
									}),
								)
								.then((result) => {
									const stops = (result as any).routeResults[0].stops;
									if (stops[0].getAttribute('Name') === 'Current Location') {
										stops.shift();
									}

									stops.forEach((stop: any, i: number) => {
										featureSet.features[i].setAttribute(
											'InspectionOrder',
											stop.getAttribute('Sequence') - 1,
										);
										console.log(stop.getAttribute('Name'), stop.getAttribute('Sequence'));
									});
									const locations: Graphic[] = [];
									featureSet.features.forEach((feature) => {
										locations.push(
											new Graphic({
												attributes: {
													OBJECTID: feature.getAttribute('OBJECTID'),
													InspectionOrder: feature.getAttribute('InspectionOrder'),
												},
											}),
										);
									});
									featureLayer.applyEdits({ updateFeatures: locations }).then(() => {
										const oids: number[] = [];
										featureSet.features.forEach((feature) => {
											oids.push(feature.getAttribute('OBJECTID'));
										});
										featureLayer
											.queryRelatedFeatures({
												relationshipId: 0,
												objectIds: oids,
												outFields: ['OBJECTID', 'InspectionOrder'],
											})
											.then((result) => {
												const inspections: Graphic[] = [];
												oids.forEach((oid) => {
													const inspection = featureSet.features.find((feature: Graphic) => {
														return feature.getAttribute('OBJECTID') === oid;
													});
													const order = inspection?.getAttribute('InspectionOrder');
													if (result[oid]) {
														result[oid].features.forEach((feature: Graphic) => {
															feature.setAttribute('InspectionOrder', order);
															inspections.push(feature);
														});
													}
												});
												featureTable
													.applyEdits({ updateFeatures: inspections })
													.then((result) => {
														console.log(result);
														createInspectionList(view, locate, inspectionList);
													});
											});
									});
								});
						}
					});
				} else {
					createInspectionList(view, locate, inspectionList);
				}
			});
	});
	locate.locate();
	return view;
}
