import { AbstractComponentProps } from '../AbstractComponent';

export interface Style extends ReactAMap.StrokeStyle, ReactAMap.FillStyle {}
export type StyleKeys = ReactAMap.$Keys<Style>
export interface EventMap extends ReactAMap.GetEventFunObject<AMap.Polygon.EventMap<AMap.Polygon>> {
  /** 创建事件 */
  created?: (instance: AMap.Polygon) => void;
}

interface PolygonOptions extends Omit<AMap.Polygon.Options, StyleKeys | 'path'> {
  path: ReactAMap.Position[] | ReactAMap.Position[][];
  style?: Style;
}

export interface PolygonProps extends
  Omit<AMap.Polygon.Options, StyleKeys | 'path'>,
  PolygonOptions,
  AbstractComponentProps
{
  visible?: boolean;
}

export interface PolygonState {
  loaded: boolean
}
