/// <reference path="./control/index.d.ts" />
/// <reference path="./core/index.d.ts" />
/// <reference path="./group/index.d.ts" />
/// <reference path="./layer/index.d.ts" />
/// <reference path="./overlay/index.d.ts" />
/// <reference path="./utils/index.d.ts" />
/// <reference path="./map/index.d.ts" />
/// <reference path="./others/index.d.ts" />
/// <reference path="./info-window/index.d.ts" />
/// <reference path="./point-mark/index.d.ts" />
/// <reference path="./position/index.d.ts" />
/// <reference path="./search/index.d.ts" />
/// <reference path="./tool/index.d.ts" />
/// <reference path="./service/index.d.ts" />
/// <reference path="./vector-graphics/index.d.ts" />

declare namespace AMap {
  interface AMapConfig {
    /**
     * 所在地区编码
     */
    adcode: string;
    appname: string;
    /**
     * API加载回调函数名称
     */
    callback: string;
    /**
     * 开发者Key
     */
    key: string;
    host: string;
    domain: string;
    markers: string;
    /**
     * 协议
     */
    protocol: string;
    server: string;
    /**
     * 具体版本
     */
    version: string;
    workerUrl: string;
  }

  /**
   * 加载插件
   * @param name
   * @param callback
   */
  function plugin(name: string | string[], callback: () => void): void;

  /**
   *
   */
  function getConfig(): AMapConfig;


  // -------

  type convertFromCallback = (status: string, result: {
    info: string;
    locations: AMap.LngLat[];
  }) => void;

  /**
   * 坐标转换，将其他坐标系 转换为 高德的坐标系
   * @param lnglat 需要转换的坐标或者坐标组
   * @param type 坐标类型
   * @param callback 转换成功后的回调函数
   */
  function convertFrom(lnglat: AMap.LngLat[], type: string, callback: convertFromCallback): void

  /**
   * 高德JS API 版本
   */
  const version: string;
}
