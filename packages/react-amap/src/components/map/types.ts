import { AbstractComponentProps } from '../AbstractComponent';

export type MapEventMap = ReactAMap.GetEventFunObject<AMap.Map.EventMap> & {
  created?: (map: AMap.Map) => void;
}

export interface MapProps extends AbstractComponentProps, Omit<AMap.Map.Options, 'center'> {
  /** 样式类 */
  className?: string;
  /** 样式 */
  style?: React.CSSProperties;
  /** 地图Loading组件 */
  loading?: React.ReactNode;
  /** 高德地图开发者账号的Key */
  mapKey?: string;
  /** 高德地图的版本 */
  version?: string;
  /** 地图中心点坐标值 */
  center?: ReactAMap.Position;
  /** 加载高德地图JS使用的协议 */
  protocol?: string;
  /** 加载高德API的前半部分 */
  hostAndPath?: string;
  /** 是否使用AMapUI */
  useAMapUI?: false | (() => void);
  /** 事件绑定 */
  events?: MapEventMap;
}

export interface MapState {
  /** 地图是否加载完毕 */
  mapLoaded: boolean;
}
