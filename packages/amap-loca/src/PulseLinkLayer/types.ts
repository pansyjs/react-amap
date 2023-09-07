export interface EventMap {
  /** 创建事件 */
  created?: (instance: Loca.PulseLinkLayer) => void;
}

export interface PulseLinkLayerProps extends Loca.PulseLinkLayer.Options {
  /** 绑定事件 */
  events?: EventMap;
}
