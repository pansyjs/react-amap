import { APILoaderProps } from '../api-loader';

export type MapEventMap = ReactAMap.GetEventFunObject<AMap.Map.EventMap> & {
  created?: (map: AMap.Map) => void;
}

export interface MapOptions extends Omit<AMap.Map.Options, 'defaultCursor'> {
  cursor?: string;
}

export type MapStatus = Partial<AMap.Map.Status>;

export type StatusPropKey = ReactAMap.$Keys<MapStatus>;

export type PropKey = ReactAMap.$Keys<MapOptions>;

export interface BaseMapProps extends Omit<MapOptions, 'center'> {
  /** 地图Loading组件 */
  loading?: React.ReactNode;
  /** 地图状态 */
  status?: MapStatus;
  /** 地图中心点坐标值 */
  center?: AMap.ExpandPosition;
  /** 加载高德地图JS使用的协议 */
  protocol?: string;
  /** 加载高德API的前半部分 */
  hostAndPath?: string;
  /** 事件绑定 */
  events?: MapEventMap;
  /** 内部使用 */
  onMapCreate?: (map: AMap.Map) => void;
}

export interface MapProps extends Omit<APILoaderProps, 'key'>, BaseMapProps {
  mapKey?: string;
}
