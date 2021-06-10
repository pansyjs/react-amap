export interface EventMap {
  /** 创建事件 */
  created?: (instance: AMap.Geocoder) => void;
}

export interface GeocoderProps extends AMap.Geocoder.Options {
  /** 可以绑定的事件 */
  events?: EventMap;
}
