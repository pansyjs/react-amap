
import { AbstractComponentProps } from '../AbstractComponent';

type StyleTypes =
  'strokeColor' |
  'strokeOpacity' |
  'strokeWeight' |
  'fillColor' |
  'fillOpacity' |
  'strokeStyle' |
  'strokeDasharray';

export interface PolygonProps extends
  Omit<AMap.Polygon.Options, StyleTypes | 'path'>,
  PansyMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  style?: PolygonStyle;
  visible?: boolean;
}

export interface PolygonStyle {
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
  fillColor?: string;
  fillOpacity?: number;
  strokeStyle?: AMap.StrokeStyle;
  strokeDasharray?: number[];
}

export interface PolygonState {
  loaded: boolean
}
