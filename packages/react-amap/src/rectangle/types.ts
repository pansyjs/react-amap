
import { AbstractComponentProps } from '../AbstractComponent';

export interface Style extends ReactAMap.StrokeStyle, ReactAMap.FillStyle {}
export type StyleKeys = ReactAMap.$Keys<Style>
export interface EventMap extends ReactAMap.GetEventFunObject<AMap.Rectangle.EventMap<AMap.Rectangle>> {
  /** 创建事件 */
  created?: (instance: AMap.Rectangle) => void;
}

export type Bounds = AMap.Bounds | [ReactAMap.Position, ReactAMap.Position];

export interface RectangleProps extends
  Omit<AMap.Rectangle.Options, StyleKeys | 'bounds'>,
  ReactAMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  style?: Style;
  visible?: boolean;
  bounds?: Bounds;
}

export interface RectangleState {
  loaded: boolean
}
