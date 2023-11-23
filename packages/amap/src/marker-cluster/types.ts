export interface EventMap<D = any> extends Partial<AMap.MarkerCluster.EventMap<D>> {
  /** 创建事件 */
  created?: (instance: AMap.MarkerCluster) => void;
}

export type RenderMarkerFun = (data: AMap.MarkerCluster.DataOptions) => React.ReactNode | string;

export type RenderClusterMarkerFun = (data: { count: number; list: AMap.MarkerCluster.DataOptions[] }) => React.ReactNode | string;

export interface MarkerClusterProps<D = any> extends
  AMap.MarkerCluster.Options
{
  /**
   * 聚合点数据
   */
  data?: AMap.MarkerCluster.DataOptions[];
  /** 标记点的偏移量 */
  offset?: [number, number];
  /** 标记点的偏移量 */
  clusterOffset?: [number, number];
  /**
   * 点击聚合点时，是否散开。
   * @default true
   */
  zoomOnClick?: boolean;

  /**
   * 可以绑定的事件
   * */
  events?: EventMap<D>;

  /**
   * 非聚合点渲染扩展
   */
  render?: React.ReactNode | string | RenderMarkerFun;

  /**
   * 聚合点渲染扩展
   */
  renderCluster?: React.ReactNode | string | RenderMarkerFun;
}
