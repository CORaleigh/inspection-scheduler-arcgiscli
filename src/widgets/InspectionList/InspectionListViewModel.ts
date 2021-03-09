/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Accessor from '@arcgis/core/core/Accessor';

import { property, subclass } from '@arcgis/core/core/accessorSupport/decorators';
import { whenDefinedOnce, pausable } from '@arcgis/core/core/watchUtils';
import Graphic from '@arcgis/core/Graphic';
@subclass('app.widgets.InspectionList.InspectionListViewModel')
export default class InspectionListViewModel extends Accessor {
	@property() view!: __esri.MapView | __esri.SceneView;
	@property() inspections!: __esri.Graphic[];
	@property() inspectors!: __esri.Graphic[];

	@property() layer!: __esri.FeatureLayer;
	@property() table!: __esri.FeatureLayer;
	@property() locate!: __esri.Locate;
	@property() inspectionUpdate!: __esri.PausableWatchHandle;

	constructor(params?: any) {
		super(params);
		whenDefinedOnce(this, 'view', this.init.bind(this));
		this.inspectionUpdate = pausable(this, 'inspections', this.inspectionsUpdated.bind(this));
	}

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
	comboCreated = (elm: Element) => {
		elm.addEventListener('calciteComboboxItemChange', (e: any) => {
			this.layer.definitionExpression = `PrimaryInspector = '${e.detail.getAttribute(
				'value',
			)}' and InspectionStatus != 'Canceled'`;
			this.table.definitionExpression = `PrimaryInspector = '${e.detail.getAttribute(
				'value',
			)}' and InspectionStatus != 'Canceled'`;
			this.locate.locate();
		});
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
		inspections.forEach((inspection) => {
			const item = document.createElement('calcite-value-list-item');
			item.setAttribute('label', inspection.attributes.Address);
			item.setAttribute('description', `${inspection.getAttribute('description')}`);
			item.setAttribute('value', inspection.getAttribute('OBJECTID'));
			item.dataset.oids = inspection.getAttribute('objectIds');
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
					const chip = document.createElement('calcite-chip');
					chip.setAttribute('scale', 's');
					chip.setAttribute('appearance', 'solid');
					chip.setAttribute('color', inspection.getAttribute('IsCompleted') === 'True' ? 'green' : 'red');
					chip.setAttribute('dir', 'ltr');
					chip.setAttribute('calcite-hydrated', '');
					chip.textContent = inspection.getAttribute('count');

					if (node) {
						node.innerHTML +=
							'<style>.description{white-space: pre-line;}calcite-chip{top:40%;position:relative;width:24px;height:24px;margin-left:1em;}</style>';
						const label = node.querySelector('.label');
						if (label) {
							node?.insertBefore(chip, label);
						} else {
							node?.appendChild(chip);
						}
					}
				});
				observer.disconnect();
			});
			observer.observe(item.shadowRoot as Node, { childList: true });
			list?.append(item);
			input.addEventListener('calciteInputBlur', this.inputChanged);
		});
	}
	listCreated = (elm: Element): void => {
		elm.addEventListener('calciteListChange', (e) => {
			this.layer
				.queryFeatures({
					objectIds: [parseInt((e as any).detail.keys().next().value)],
					outFields: ['OBJECTID'],
					returnGeometry: true,
				})
				.then((featureSet) => {
					this.view.goTo({ target: featureSet.features, zoom: 15 });
				});
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
	}
}
