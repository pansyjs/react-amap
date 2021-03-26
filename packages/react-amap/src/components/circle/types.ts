
import { AbstractComponentProps } from '../AbstractComponent';

type StyleTypes =
  'strokeColor' |
  'strokeOpacity' |
  'strokeWeight' |
  'fillColor' |
  'fillOpacity' |
  'strokeStyle' |
  'strokeDasharray';

export interface CircleProps extends
  Omit<AMap.Circle.Options, StyleTypes>,
  PansyMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  style?: CircleStyle;
  visible?: boolean;
}

export interface CircleStyle {
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
  fillColor?: string;
  fillOpacity?: number;
  strokeStyle?: AMap.StrokeStyle;
  strokeDasharray?: number[];
}

export interface CircleState {
  loaded: boolean
}
