import Accessor from '@arcgis/core/core/Accessor';
import Graphic from '@arcgis/core/Graphic';
export default class InspectionListViewModel extends Accessor {
    view: __esri.MapView | __esri.SceneView;
    inspections: __esri.Graphic[];
    inspectors: __esri.Graphic[];
    layer: __esri.FeatureLayer;
    table: __esri.FeatureLayer;
    locate: __esri.Locate;
    inspectionUpdate: __esri.PausableWatchHandle;
    constructor(params?: any);
    updateOrder: (newOrder: number, oldOrder: number, objectId: number, inspection: __esri.Graphic) => number | undefined;
    inputChanged: (e: any) => void;
    comboCreated: (elm: Element) => void;
    saveCreated: (elm: Element) => void;
    inspectionsUpdated(inspections: __esri.Graphic[]): void;
    listCreated: (elm: Element) => void;
    init(view: __esri.MapView | __esri.SceneView): void;
}
