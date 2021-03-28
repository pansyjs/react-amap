
import { AbstractComponentProps } from '../AbstractComponent';

type EllipseTypes =
  'strokeColor' |
  'strokeOpacity' |
  'strokeWeight' |
  'fillColor' |
  'fillOpacity' |
  'strokeStyle' |
  'strokeDasharray';

export interface EllipseProps extends
  Omit<AMap.Ellipse.Options, EllipseTypes>,
  PansyMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  style?: EllipseStyle;
  visible?: boolean;
}

export interface EllipseStyle {
  strokeColor?: string;
  strokeOpacity?: number;
  strokeWeight?: number;
  fillColor?: string;
  fillOpacity?: number;
  strokeStyle?: AMap.StrokeStyle;
  strokeDasharray?: number[];
}

export interface EllipseState {
  loaded: boolean
}
