export interface Style extends ReactAMap.StrokeStyle, ReactAMap.FillStyle {}
export type StyleKeys = ReactAMap.$Keys<Style>
export interface EventMap extends ReactAMap.GetEventFunObject<AMap.Ellipse.EventMap<AMap.Ellipse>> {
  /** 创建事件 */
  created?: (instance: AMap.Ellipse) => void;
}

export interface EllipseProps extends
  Omit<AMap.Ellipse.Options, StyleKeys | 'center'>
{
  /** 椭圆的中心 */
  center?: AMap.ExpandPosition;
  /** 椭圆的样式 */
  style?: Style;
  /** 是否显示 */
  visible?: boolean;
   /** 绑定的事件 */
  events?: EventMap;
}
