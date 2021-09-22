export interface EventMap {
  /** 创建事件 */
  created?: (instance: AMap.Satellite) => void;
}

export interface SatelliteProps extends AMap.Satellite.Options {
  events?: EventMap;
}
