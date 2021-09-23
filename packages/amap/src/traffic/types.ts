export interface EventMap {
  /** 创建事件 */
  created?: (instance: AMap.Traffic) => void;
}

export interface TrafficProps extends AMap.Traffic.Options {
  events?: EventMap;
}
