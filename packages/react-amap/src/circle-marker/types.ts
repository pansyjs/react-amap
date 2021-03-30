
import { AbstractComponentProps } from '../AbstractComponent';

export interface Style extends ReactAMap.StrokeStyle, ReactAMap.FillStyle {};
export type StyleKeys = ReactAMap.$Keys<Style>;
export interface EventMap extends ReactAMap.GetEventFunObject<AMap.CircleMarker.EventMap<AMap.CircleMarker>> {
  /** 创建事件 */
  created?: (instance: AMap.CircleMarker) => void;
}

export interface CircleMarkerProps extends
  Omit<AMap.CircleMarker.Options, StyleKeys | 'center'>,
  ReactAMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  style?: Style;
  center?: ReactAMap.Position;
  visible?: boolean;
  events?: EventMap;
}

export interface CircleMarkerState {
  loaded: boolean
}
