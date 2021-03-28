
import { AbstractComponentProps } from '../AbstractComponent';

export type StyleTypes =
  'strokeColor' |
  'strokeOpacity' |
  'strokeWeight' |
  'fillColor' |
  'fillOpacity' |
  'strokeStyle' |
  'strokeDasharray';

export type CircleEventMap = PansyMap.GetEventFunObject<AMap.Circle.EventMap<AMap.Circle>>

export interface CircleProps extends
  Omit<AMap.Circle.Options, StyleTypes>,
  PansyMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  style?: CircleStyle;
  visible?: boolean;
  events?: CircleEventMap;
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
