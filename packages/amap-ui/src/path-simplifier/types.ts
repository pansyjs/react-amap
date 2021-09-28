export interface EventMap {
  /** 创建事件 */
  created?: (instance: AMap.AMapUI.PathSimplifier) => void;
}

export interface PathSimplifierProps extends AMap.AMapUI.PathSimplifier.Options {
  /** 绑定事件 */
  events?: EventMap;
}
