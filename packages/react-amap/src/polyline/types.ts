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

interface PolylineOptions extends Omit<AMap.Polyline.Options, 'path'> {
  path?: ReactAMap.Position[]
}

export interface PolylineProps extends
  PolylineOptions,
  ReactAMap.BaseChildrenComponentProps
{
  style?: Style;
  visible?: boolean;
}

export type PolylineType = React.ForwardRefRenderFunction<AMap.Polyline, PolylineProps>;
