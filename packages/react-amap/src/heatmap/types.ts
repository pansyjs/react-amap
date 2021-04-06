import { AbstractComponentProps } from '../AbstractComponent';

export interface EventMap extends ReactAMap.GetEventFunObject<AMap.Heatmap.EventMap> {
  /** 创建事件 */
  created?: (instance: AMap.Heatmap) => void;
}

export interface HeatmapProps extends
  ReactAMap.BaseChildrenComponentProps,
  AMap.Heatmap.Options,
  AbstractComponentProps
{
  dataSet?: AMap.Heatmap.DataSet;
  /** 可以绑定的事件 */
  events?: EventMap;
}

export interface HeatmapState {
  loaded: boolean
}
