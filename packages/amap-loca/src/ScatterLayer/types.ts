export interface EventMap {
  /** 创建事件 */
  created?: (instance: Loca.ScatterLayer) => void;
}

export interface ScatterLayerProps extends Omit<Loca.ScatterLayer.Options, 'renderOptions'> {
  /** 绑定事件 */
  events?: EventMap;
}
