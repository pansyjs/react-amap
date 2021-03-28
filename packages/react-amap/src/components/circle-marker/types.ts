
import { AbstractComponentProps } from '../AbstractComponent';

type StyleTypes =
  'strokeColor' |
  'strokeOpacity' |
  'strokeWeight' |
  'fillColor' |
  'fillOpacity' |
  'strokeStyle' |
  'strokeDasharray';

export interface CircleMarkerProps extends
  Omit<AMap.CircleMarker.Options, StyleTypes>,
  PansyMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  style?: CircleMarkerStyle;
  visible?: boolean;
}

export interface CircleMarkerStyle {
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
  fillColor?: string;
  fillOpacity?: number;
  strokeStyle?: AMap.StrokeStyle;
  strokeDasharray?: number[];
}

export interface CircleMarkerState {
  loaded: boolean
}
