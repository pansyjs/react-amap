import { AbstractComponentProps } from '../AbstractComponent';

export interface Style extends ReactAMap.StrokeStyle, ReactAMap.OutlineStyle {
  /**
  * 是否绘制成大地线
  */
  geodesic?: boolean;
  /**
   * 折线拐点的绘制样式
   */
  lineJoin?: AMap.StrokeLineJoin;
  /**
   * 折线两端线帽的绘制样式
   */
  lineCap?: AMap.StrokeLineCap;
}
export type StyleKeys = ReactAMap.$Keys<Style>
export interface EventMap extends ReactAMap.GetEventFunObject<AMap.Polyline.EventMap<AMap.Polyline>> {
  /** 创建事件 */
  created?: (instance: AMap.Polyline) => void;
}

export interface PolylineProps extends
  AMap.Polyline.Options,
  ReactAMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  style?: Style;
  visible?: boolean;
}
export interface PolylineState {
  loaded: boolean
}
