
import { AbstractComponentProps } from '../AbstractComponent';

type StyleTypes =
  'strokeColor' |
  'strokeOpacity' |
  'strokeWeight' |
  'strokeStyle' |
  'strokeDasharray' |
  'fillColor' |
  'fillOpacity';

export type Bounds = AMap.Bounds | [PansyMap.Position, PansyMap.Position];

export interface RectangleProps extends
  Omit<AMap.Rectangle.Options, StyleTypes | 'bounds'>,
  PansyMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  style?: RectangleStyle;
  visible?: boolean;
  bounds?: Bounds;
}

export interface RectangleStyle {
  /**
   * 描边线条颜色
   */
  strokeColor?: string;
  /**
  * 描边线条透明度
  */
  strokeOpacity?: number;
  /**
  * 描边宽度
  */
  strokeWeight?: number;
  /**
  * 描边样式
  */
  strokeStyle?: AMap.StrokeStyle;
  /**
  * 虚线间隔
  */
  strokeDasharray?: number[];
  /**
   * 多边形填充颜色
   */
  fillColor?: string;
  /**
  * 边形填充透明度
  */
  fillOpacity?: number;
}

export interface RectangleState {
  loaded: boolean
}
