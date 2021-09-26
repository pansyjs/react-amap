export interface EventMap extends AMap.AutoComplete.EventMap {
  /** 创建事件 */
  created?: (instance: AMap.AutoComplete) => void;
}

export interface AutoCompleteProps extends AMap.AutoComplete.Options {
  /** 绑定事件 */
  events?: EventMap;
}
