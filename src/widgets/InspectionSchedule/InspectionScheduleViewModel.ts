/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import esri = __esri;

import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';

import { watch, whenDefinedOnce } from '@arcgis/core/core/watchUtils';
import Graphic from '@arcgis/core/Graphic';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';

@subclass('app.widgets.InspectionSchedule.InspectionScheduleViewModel')
export default class InspectionScheduleViewModel extends Accessor {
	@property() view!: esri.MapView | esri.SceneView;
	@property() inspections!: esri.Graphic[];
	@property() inspectors!: string[];
	@property() features: esri.Graphic[] = [];
	@property() inspector!: string;

	@property() layer!: esri.FeatureLayer;
	@property() table!: esri.FeatureLayer;
	labelLayer!: esri.FeatureLayer;
	layerView!: esri.FeatureLayerView;
	constructor(params?: any) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
		watch(this, 'inspector', this.inspectorChanged.bind(this));
		watch(this, 'inspections', this.inspectionsChanged.bind(this));
	}

	inspectorChanged = () => {
		this.layer
			.queryFeatures({
				outFields: ['*'],
				returnGeometry: true,
				where: `PrimaryInspector = '${this.inspector}' and IsCompleted = 'False'`,
			})
			.then((featureSet) => {
				const oids = featureSet.features.map((feature) => {
					return feature.getAttribute('OBJECTID');
				});
				featureSet.features.forEach((feature, i) => {
					const order = feature?.getAttribute('InspectionOrder');
					if (order === 0) {
						feature?.setAttribute('InspectionOrder', i + 1);
					}
				});

				this.layer
					.queryRelatedFeatures({
						relationshipId: 0,
						objectIds: oids,
						outFields: ['*'],
						where: `InspectionStatus <> 'Canceled'`,
					})
					.then((result) => {
						oids.forEach((oid) => {
							let description = '';
							let completed = 'True';
							result[oid]?.features.forEach((relatedFeature: Graphic) => {
								description += `${relatedFeature.getAttribute(
									'LinkNumber',
								)} - ${relatedFeature.getAttribute('InspectionType')} - ${relatedFeature.getAttribute(
									'InspectionStatus',
								)}\n`;
								if (relatedFeature.getAttribute('IsCompleted') === 'False') {
									completed = 'False';
								}
							});
							const locationFeature = featureSet.features.find((feature) => {
								return feature.getAttribute('OBJECTID') === oid;
							});
							locationFeature?.setAttribute('count', result[oid]?.features.length);
							locationFeature?.setAttribute('description', description);
							locationFeature?.setAttribute('IsCompleted', completed);
						});

						this.inspections = [
							...featureSet.features.sort((a, b) => {
								return a.getAttribute('InspectionOrder') - b.getAttribute('InspectionOrder');
							}),
						];
						this.features = JSON.parse(JSON.stringify(this.inspections));
						this.createLabelLayer();
					});
			});
	};

	setObjectID = () => {
		if (this.features) {
			this.features.forEach((feat) => {
				const insp = this.inspections.find((ins: esri.Graphic) => {
					return ins.getAttribute('GlobalID') === feat.attributes.GlobalID;
				}) as esri.Graphic;
				insp.setAttribute('OBJECTID', feat.attributes.OBJECTID);
			});
		}
	};

	inspectionsChanged = () => {
		this.setObjectID();
	};
	createLabelLayer = () => {
		const renderer = (this.layer.renderer as __esri.SimpleRenderer).clone();
		if (this.labelLayer) {
			this.view.map.remove(this.labelLayer);
			this.labelLayer.destroy();
		}
		this.labelLayer = new FeatureLayer({
			source: [],
			renderer: renderer,
			geometryType: this.layer.geometryType,
			labelingInfo: this.layer.labelingInfo,
			fields: this.layer.fields,
			objectIdField: this.layer.objectIdField,
			popupTemplate: this.layer.popupTemplate.clone(),
		});
		this.view.map.add(this.labelLayer);
		this.view.whenLayerView(this.labelLayer).then((layerview) => {
			this.layerView = layerview;
		});
		const adds = this.inspections.map((inspection) => {
			return new Graphic({ attributes: inspection.attributes, geometry: inspection.geometry });
		});

		this.labelLayer.applyEdits({ addFeatures: adds }).then((result) => {
			console.log(result);
			this.labelLayer.queryExtent({ where: '1=1' }).then((result) => {
				if (result.extent) {
					this.view.goTo(result.extent.expand(1.5));
				}
			});
		});
	};
	init(view: esri.MapView | esri.SceneView): void {
		view.on('pointer-move', (event) => {
			this.view.hitTest(event).then((response) => {
				const graphic = response.results.filter((result) => {
					return result.graphic.layer === this.labelLayer;
				})[0]?.graphic as __esri.Graphic;
				if (graphic) {
					const oid = graphic?.attributes.OBJECTID;
					document
						.querySelector('calcite-value-list')
						?.querySelectorAll('calcite-value-list-item')
						.forEach((item) => {
							item?.setAttribute('style', 'background-color: transparent');
						});
					document
						.querySelector('calcite-value-list')
						?.querySelector(`[value="${oid}"]`)
						?.parentElement?.setAttribute('style', 'background-color: var(--calcite-ui-brand)');
					const top = document.querySelector('calcite-value-list')?.querySelector(`[value="${oid}"]`)
						?.parentElement?.offsetTop;
					document.querySelector('calcite-panel')?.scrollTo({
						top: top,
						behavior: 'smooth',
					});
				}
			});
		});
		setInterval(() => {
			this.inspectorChanged();
		}, 60000);
	}
}
