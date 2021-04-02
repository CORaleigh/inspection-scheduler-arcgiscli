import esri = __esri;
import Accessor from '@arcgis/core/core/Accessor';
export default class InspectionScheduleViewModel extends Accessor {
    view: esri.MapView | esri.SceneView;
    inspections: esri.Graphic[];
    inspectors: string[];
    feats: esri.Graphic[];
    inspector: string;
    layer: esri.FeatureLayer;
    table: esri.FeatureLayer;
    labelLayer: esri.FeatureLayer;
    layerView: esri.FeatureLayerView;
    constructor(params?: any);
    inspectorChanged: (inspector: string) => void;
    setObjectID: () => void;
    inspectionsChanged: () => void;
    createLabelLayer: () => void;
    init(view: esri.MapView | esri.SceneView): void;
}
