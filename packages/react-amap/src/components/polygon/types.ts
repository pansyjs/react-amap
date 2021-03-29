
import { AbstractComponentProps } from '../AbstractComponent';

export interface Style extends ReactAMap.StrokeStyle, ReactAMap.FillStyle {}
export type StyleKeys = ReactAMap.$Keys<Style>
export interface EventMap extends ReactAMap.GetEventFunObject<AMap.Polygon.EventMap<AMap.Polygon>> {
  /** 创建事件 */
  created?: (instance: AMap.Polygon) => void;
}


export interface PolygonProps extends
  Omit<AMap.Polygon.Options, StyleKeys | 'path'>,
  ReactAMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  path: ReactAMap.Position[];
  style?: Style;
  visible?: boolean;
}

export interface PolygonState {
  loaded: boolean
}
