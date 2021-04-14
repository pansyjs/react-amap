
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
  /** 矩形的样式 */
  style?: Style;
  /** 是否显示 */
  visible?: boolean;
  /** 矩形的范围 */
  bounds?: Bounds;
}

export type RectangleType = React.ForwardRefRenderFunction<AMap.Rectangle, RectangleProps>;
