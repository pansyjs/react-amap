export interface EventMap extends AMap.DistrictSearch.EventMap {
  /** 创建事件 */
  created?: (instance: AMap.DistrictSearch) => void;
}

export interface DistrictSearchProps extends AMap.DistrictSearch.Options {
  /** 绑定事件 */
  events?: EventMap;
}
