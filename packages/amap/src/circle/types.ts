export interface Style extends ReactAMap.StrokeStyle, ReactAMap.FillStyle {}
export type StyleKeys = ReactAMap.$Keys<Style>
export interface EventMap extends ReactAMap.GetEventFunObject<AMap.Circle.EventMap<AMap.Circle>> {
  /** 创建事件 */
  created?: (instance: AMap.Circle) => void;
}

export interface CircleProps extends Omit<AMap.Circle.Options, StyleKeys | 'center'> {
  /** 圆心 */
  center?: AMap.ExpandPosition;
  /** 样式 */
  style?: Style;
  /** 是否显示 */
  visible?: boolean;
  /** 绑定事件 */
  events?: EventMap;
}
