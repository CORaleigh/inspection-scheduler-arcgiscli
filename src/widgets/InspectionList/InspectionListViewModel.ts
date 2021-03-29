/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
import { whenDefinedOnce, pausable, once } from '@arcgis/core/core/watchUtils';
import Graphic from '@arcgis/core/Graphic';
import Widget from '@arcgis/core/widgets/Widget';
@subclass('app.widgets.InspectionList.InspectionListViewModel')
export default class InspectionListViewModel extends Widget {
	@property() view!: __esri.MapView | __esri.SceneView;
	@property() inspections!: __esri.Graphic[];
	@property() inspectors!: __esri.Graphic[];
	@property() name!: string;
	@property() layer!: __esri.FeatureLayer;
	@property() table!: __esri.FeatureLayer;
	@property() inspectionUpdate!: __esri.PausableWatchHandle;
	layerView!: __esri.FeatureLayerView;
	highlights!: any;
	constructor(params?: any) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
		this.inspectionUpdate = pausable(this, 'inspections', this.inspectionsUpdated.bind(this));
	}
	comboboxCreated = () => {
		once(this, 'inspectors', this.inspectorsLoaded.bind(this));
	};
	inspectorsLoaded = (inspectors: __esri.Graphic[]) => {
		this.inspectors = [...this.inspectors, ...inspectors];
		const combobox = document.querySelector('calcite-combobox');
		combobox?.addEventListener('calciteComboboxItemChange', (e: any) => {
			this.layer.definitionExpression = `PrimaryInspector = '${e.detail.getAttribute(
				'value',
			)}' and  IsCompleted = 'False'`;
			this.table.definitionExpression = `PrimaryInspector = '${e.detail.getAttribute(
				'value',
			)}' and  IsCompleted = 'False'`;
			this.emit('inspector-changed', null);
		});

		combobox?.shadowRoot?.querySelector('.list-container')?.setAttribute('style', 'height: 80vh');
	};

	updateOrder = (
		newOrder: number,
		oldOrder: number,
		objectId: number,
		inspection: __esri.Graphic,
	): number | undefined => {
		if (inspection.getAttribute('OBJECTID') === objectId) {
			return newOrder;
		} else if (newOrder > oldOrder) {
			if (
				inspection.getAttribute('InspectionOrder') <= newOrder &&
				inspection.getAttribute('InspectionOrder') > oldOrder
			) {
				return inspection.getAttribute('InspectionOrder') - 1;
			}
		} else {
			if (
				inspection.getAttribute('InspectionOrder') >= newOrder &&
				inspection.getAttribute('InspectionOrder') < oldOrder
			) {
				return inspection.getAttribute('InspectionOrder') + 1;
			}
		}
	};

	inputChanged = (e: any): void => {
		e.srcElement.parentElement.setAttribute('selected', '');

		const match = this.inspections.find((inspection) => {
			return inspection.getAttribute('OBJECTID') === parseInt(e.currentTarget.parentElement.value);
		});

		const newOrder = parseInt(e.detail.value);
		const oldOrder = match?.getAttribute('InspectionOrder');
		const objectId = parseInt(e.currentTarget.parentElement.value);

		this.inspections.forEach((inspection) => {
			const newValue = this.updateOrder(newOrder, oldOrder, objectId, inspection);
			if (newValue) {
				inspection.setAttribute('InspectionOrder', newValue);

				document
					.querySelector(
						`calcite-value-list-item[value="${inspection.getAttribute('OBJECTID')}"] calcite-input`,
					)
					?.setAttribute('value', newValue.toString());
			}
		});
		const items = document.querySelectorAll('calcite-value-list-item');
		items.forEach((item, i) => {
			if (parseInt(item.getAttribute('value') as string) === objectId) {
				items[i].parentNode?.insertBefore(items[i], items[newOrder > oldOrder ? newOrder : newOrder - 1]);
			}
		});
		e.srcElement.parentElement.parentElement.scrollTo({
			top: e.srcElement.parentElement.offsetTop,
			behavior: 'smooth',
		});

		this.layer.refresh();
	};

	saveCreated = (elm: Element) => {
		elm.addEventListener('click', () => {
			const inspections: Graphic[] = [];
			const locations: Graphic[] = [];

			document.querySelectorAll('calcite-value-list-item').forEach((element) => {
				const oids = (element as HTMLElement).dataset.oids?.split(',');
				const oid = (element as HTMLElement).getAttribute('value');
				const order: string = document
					.querySelector(`calcite-value-list-item[value="${oid}"] calcite-input`)
					?.getAttribute('value') as string;
				locations.push(
					new Graphic({
						attributes: { OBJECTID: parseInt(oid as string), InspectionOrder: parseInt(order as string) },
					}),
				);

				if (order !== 'undefined') {
					oids?.forEach((objectid) => {
						inspections.push(
							new Graphic({
								attributes: { OBJECTID: parseInt(objectid), InspectionOrder: parseInt(order) },
							}),
						);
					});
				}
			});
			this.table.applyEdits({ updateFeatures: inspections }).then((result) => {
				console.log(result);
			});
			this.layer.applyEdits({ updateFeatures: locations }).then((result) => {
				console.log(result);
			});
			// this.layer.applyEdits({ updateFeatures: this.inspections }).then(() => {
			// 	setTimeout(() => {
			// 		this.layer.refresh();
			// 	}, 2000);
			// });
		});
	};

	inspectionsUpdated(inspections: __esri.Graphic[]): void {
		const list = document.querySelector('calcite-value-list');
		document.querySelectorAll('calcite-value-list-item').forEach((element) => {
			list?.removeChild(element);
		});
		inspections = inspections.sort((a, b) => {
			return a.getAttribute('InspectionOrder') - b.getAttribute('InspectionOrder');
		});
		inspections.forEach((inspection, i) => {
			this.inspectionUpdate.pause();
			if (inspection.getAttribute('InspectionOrder') === 0 || !inspection.getAttribute('InspectionOrder')) {
				inspection.setAttribute('InspectionOrder', i + 1);
			}

			const item = document.createElement('calcite-value-list-item');
			item.setAttribute(
				'label',
				`${inspection.getAttribute('Address')} (${inspection.getAttribute('count')} ${
					inspection.getAttribute('count') > 1 ? 'inspections' : 'inspection'
				})`,
			);
			item.setAttribute('description', `${inspection.getAttribute('description')}`);
			item.setAttribute('value', inspection.getAttribute('OBJECTID'));
			item.dataset.oids = inspection.getAttribute('objectIds');
			item.addEventListener('click', () => {
				item.setAttribute('selected', '');
			});
			const input = document.createElement('calcite-input');
			input.setAttribute('label', inspection.attributes.Address);
			input.setAttribute('min', '1');
			input.setAttribute('max', (inspections.length + 1).toString());
			input.setAttribute('value', inspection.getAttribute('InspectionOrder'));
			input.setAttribute('step', '1');
			input.setAttribute('type', 'number');
			input.setAttribute('number-button-type', 'horizontal');

			input.setAttribute('slot', 'actions-end');
			input.setAttribute('alignment', 'start');

			item.append(input);
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
			observer.observe(item.shadowRoot as Node, { childList: true });
			list?.append(item);

			input.addEventListener('calciteInputBlur', this.inputChanged);
		});
		this.layer.applyEdits({ updateFeatures: inspections }).then(() => {
			this.inspectionUpdate.resume();
			this.layer.refresh();
		});
	}
	calciteListChanged = (objectId: number) => {
		if (objectId) {
			this.layer
				.queryFeatures({
					objectIds: [objectId],
					outFields: ['*'],
					returnGeometry: true,
				})
				.then((featureSet) => {
					//	this.view.goTo({ target: featureSet.features, zoom: 15 });
					this.highlights?.remove();
					this.highlights = this.layerView.highlight(featureSet.features);
					this.view.popup.open({ features: featureSet.features, location: featureSet.features[0].geometry });
				});
			document
				.querySelector('calcite-value-list')
				?.querySelectorAll('calcite-value-list-item')
				.forEach((item) => {
					item?.setAttribute('style', 'background-color: transparent');
				});
			document
				.querySelector('calcite-value-list')
				?.querySelector(`[value="${objectId}"]`)
				?.setAttribute('style', 'background-color: var(--calcite-ui-brand)');
		}
	};
	listCreated = (elm: Element): void => {
		elm.addEventListener('calciteListChange', () => {
			const selected = elm.querySelector('calcite-value-list-item[selected]');
			if (selected) {
				this.calciteListChanged(parseInt(selected?.getAttribute('value') as string));
			}
		});

		elm.addEventListener('calciteListOrderChange', (e) => {
			(e as any).detail.forEach((d: any, i: number) => {
				const inspection = this.inspections.find((inspection) => {
					return inspection.getAttribute('OBJECTID') === parseInt(d);
				});
				inspection?.setAttribute('InspectionOrder', i + 1);

				document
					.querySelector(`calcite-value-list-item[value="${d}"] calcite-input`)
					?.setAttribute('value', (i + 1).toString());
			});

			this.layer.refresh();
		});
	};
	init(view: __esri.MapView | __esri.SceneView): void {
		console.log(view.scale);
		view.whenLayerView(this.layer).then((layerview) => {
			this.layerView = layerview;
		});
		view.popup.watch('selectedFeature', (selectedFeature: __esri.Graphic) => {
			if (selectedFeature) {
				const oid = selectedFeature.getAttribute('OBJECTID');
				document.querySelector(`calcite-value-list-item[selected]`)?.removeAttribute('selected');
				const item = document.querySelector(`calcite-value-list-item[value="${oid}"`);
				item?.setAttribute('selected', '');
			}
		});
		view.on('pointer-move', (event) => {
			this.view.hitTest(event).then((response) => {
				const graphic = response.results.filter((result) => {
					return result.graphic.layer === this.layer;
				})[0]?.graphic as __esri.Graphic;
				const oid = graphic?.getAttribute('OBJECTID');
				document.querySelector(`calcite-value-list-item[selected]`)?.removeAttribute('selected');
				const item = document.querySelector(`calcite-value-list-item[value="${oid}"`);
				item?.setAttribute('selected', '');
			});
		});
	}
}
