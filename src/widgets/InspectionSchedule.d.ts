import esri = __esri;
import { tsx } from '@arcgis/core/widgets/support/widget';
import Widget from '@arcgis/core/widgets/Widget';
import InspectionScheduleViewModel from './InspectionSchedule/InspectionScheduleViewModel';
import Graphic from '@arcgis/core/Graphic';
export interface InspectionScheduleProperties extends esri.WidgetProperties {
    view?: esri.MapView | esri.SceneView;
    inspections?: esri.Graphic[];
    inspectors?: string[];
    layer?: esri.FeatureLayer;
    table?: esri.FeatureLayer;
    inspector?: string;
}
export default class InspectionSchedule extends Widget {
    view: esri.MapView | esri.SceneView;
    inspections: esri.Graphic[];
    features: esri.Graphic[];
    inspectors: string[];
    inspector: string;
    layer: esri.FeatureLayer;
    table: esri.FeatureLayer;
    viewModel: InspectionScheduleViewModel;
    constructor(properties?: InspectionScheduleProperties);
    comboboxCreated: (elm: Element) => void;
    updateOrder: (newOrder: number, oldOrder: number, objectId: number, inspection: __esri.Graphic) => number | undefined;
    update: (features: Graphic[]) => void;
    inputChanged: (e: any) => void;
    inputCreated: (elm: Element) => void;
    listCreated: (elm: Element) => void;
    listItemCreated: (elm: Element) => void;
    panelCreated: (element: Element) => void;
    render(): tsx.JSX.Element;
}
