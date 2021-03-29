import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import InspectionListViewModel from './InspectionList/InspectionListViewModel';
export interface InspectionListProperties extends __esri.WidgetProperties {
    view?: __esri.MapView | __esri.SceneView;
    inspections?: __esri.Graphic[];
    inspectors?: __esri.Graphic[];
    layer?: __esri.FeatureLayer;
    table?: __esri.FeatureLayer;
    name?: string;
}
export default class InspectionList extends Widget {
    view: __esri.MapView | __esri.SceneView;
    inspections: __esri.Graphic[];
    inspectors: __esri.Graphic[];
    layer: __esri.FeatureLayer;
    table: __esri.FeatureLayer;
    inspectionUpdate: __esri.PausableWatchHandle;
    name: string;
    viewModel: InspectionListViewModel;
    constructor(properties?: InspectionListProperties);
    render(): tsx.JSX.Element;
}
