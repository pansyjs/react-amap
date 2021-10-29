export interface EventMap extends AMap.MassMarks.EventMap {
  /** 创建事件 */
  created?: (instance: AMap.MassMarks) => void;
}

export interface MassMarksProps extends
  AMap.MassMarks.Options
{
  data?: AMap.MassMarks.MassData[];
  /** 是否显示 */
  visible?: boolean;
  /** 可以绑定的事件 */
  events?: EventMap;
}
