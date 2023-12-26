export interface EventMap {
  init?: (instance: AMap.AMapUI.PathSimplifier) => void;
  /** 创建事件 */
  created?: (instance: AMap.AMapUI.PathSimplifier) => void;
}

export interface PathSimplifierProps extends Omit<AMap.AMapUI.PathSimplifier.Options, 'renderOptions'> {
  renderOptions?: AMap.AMapUI.PathSimplifier.Options['renderOptions'] | ((PathSimplifier: AMap.AMapUI.PathSimplifier) => AMap.AMapUI.PathSimplifier.Options['renderOptions'])
  /** 绑定事件 */
  events?: EventMap;
}
