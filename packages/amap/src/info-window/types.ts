export interface EventMap extends ReactAMap.GetEventFunObject<AMap.InfoWindow.EventMap<AMap.InfoWindow>> {
  /** 创建事件 */
  created?: (instance: AMap.InfoWindow) => void;
}

export interface InfoWindowProps extends
  Omit<AMap.InfoWindow.Options, 'position' | 'size' | 'offset'>
{
  /** 样式类 */
  className?: string;
  /** 信息窗体的位置 */
  position?: AMap.ExpandPosition;
  /** 信息窗体的大小 */
  size?: AMap.ExpandSize;
  /** 信息窗体的偏移量 */
  offset?: AMap.ExpandOffset;
  /** 是否显示 */
  visible?: boolean;
  /** 绑定的事件 */
  events?: EventMap;
}
