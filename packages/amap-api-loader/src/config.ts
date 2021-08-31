import { Config } from './types';

export enum LoadStatus {
  /** 未加载 */
  notload = 'notload',
  /** 加载中 */
  loading = 'loading',
  /** 已加载 */
  loaded = 'loaded',
  /** 加载失败 */
  failed = 'failed',
}

export const defaultConfig: Config = {
  key: 'f97efc35164149d0c0f299e7a8adb3d2',
  AMap: {
    version: '2.0',
    plugins: [],
  },
  AMapUI: {
    version: '1.1',
    plugins: [],
  },
  Loca: {
    version: '1.3.2',
  },
};
