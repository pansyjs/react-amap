export interface Style extends ReactAMap.StrokeStyle, ReactAMap.FillStyle {};
export type StyleKeys = ReactAMap.$Keys<Style>;
export interface EventMap extends ReactAMap.GetEventFunObject<AMap.CircleMarker.EventMap<AMap.CircleMarker>> {
  /** 创建事件 */
  created?: (instance: AMap.CircleMarker) => void;
}

export interface CircleMarkerProps extends Omit<AMap.CircleMarker.Options, StyleKeys | 'center'> {
  style?: Style;
  center?: AMap.ExpandPosition;
  visible?: boolean;
  events?: EventMap;
}
