import Graphic from '@arcgis/core/Graphic';
import Widget from '@arcgis/core/widgets/Widget';
export default class InspectionListViewModel extends Widget {
    view: __esri.MapView | __esri.SceneView;
    inspections: __esri.Graphic[];
    inspectors: __esri.Graphic[];
    name: string;
    layer: __esri.FeatureLayer;
    table: __esri.FeatureLayer;
    inspectionUpdate: __esri.PausableWatchHandle;
    layerView: __esri.FeatureLayerView;
    highlights: any;
    constructor(params?: any);
    comboboxCreated: () => void;
    inspectorsLoaded: (inspectors: __esri.Graphic[]) => void;
    updateOrder: (newOrder: number, oldOrder: number, objectId: number, inspection: __esri.Graphic) => number | undefined;
    inputChanged: (e: any) => void;
    saveCreated: (elm: Element) => void;
    inspectionsUpdated(inspections: __esri.Graphic[]): void;
    calciteListChanged: (objectId: number) => void;
    listCreated: (elm: Element) => void;
    init(view: __esri.MapView | __esri.SceneView): void;
}
