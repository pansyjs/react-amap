declare namespace AMap {
  namespace Geolocation {
    interface Options {
      /**
       * 悬停位置，默认为"RB"，即右下角
       */
      position?: string;

      /**
       * 缩略图距离悬停位置的像素距离
       */
      offset?: [number, number];

      /**
       * 边框的颜色
       */
      borderColor?: string;

      /**
       * 圆角
       */
      borderRadius?: string;

      /**
       * 尺寸
       */
      buttonSize?: string;

      /**
       * 是否将定位结果转换为高德坐标
       */
      convert?: boolean;

      /**
       * 进行浏览器原生定位的时候是否尝试获取较高精度，可能影响定位效率
       */
      enableHighAccuracy?: boolean;

      /**
       * 定位的超时时间
       */
      timeout?: number;

      /**
       * 浏览器原生定位的缓存时间
       */
      maximumAge?: number;

      /**
       * 是否显示定位按钮
       * @default true
       */
      showButton?: boolean;

      /**
       * 是否显示定位精度圆
       * @default true
       */
      showCircle?: boolean;

      /**
       * 是否显示定位点
       * @default true
       */
      showMarker?: boolean;

      /**
       * 定位点的样式
       */
      markerOptions?: AMap.Marker.Options;

      /**
       * 定位圆的样式
       */
      circleOptions?: AMap.Circle.Options;

      /**
       * 定位成功后是否自动移动到响应位置
       */
      panToLocation?: boolean;

      /**
       * 定位成功后是否自动调整级别
       */
      zoomToAccuracy?: boolean;

      /**
       * 优先使用H5定位，默认移动端为true，PC端为false
       */
      GeoLocationFirst?: boolean;

      /**
       * 否禁用IP精确定位，默认为0，0:都用 1:手机上不用 2:PC上不用 3:都不用
       */
      noIpLocate?: number;

      /**
       * 是否禁用浏览器原生定位，默认为0，0:都用 1:手机上不用 2:PC上不用 3:都不用
       */
      noGeoLocation?: number;

      /**
       * 是否与高德定位SDK能力结合，需要同时使用安卓版高德定位sdk，否则无效
       */
      useNative?: boolean;

      /**
       * 定位失败之后是否返回基本城市定位信息
       */
      getCityWhenFail?: boolean;

      /**
       * 是否需要将定位结果进行逆地理编码操作
       */
      needAddress?: boolean;

      /**
       * 是否需要详细的逆地理编码信息
       */
      extensions?: 'base' | 'all';
    }

    type Status = 'complete' | 'error';

    interface Result {
      /**
       * 定位到的经纬度位置
       */
      position: AMap.LngLat;

      /**
       * 定位精度
       */
      accuracy: number;

      /**
       * 定位的类型
       */
      location_type: 'ip' | 'h5' | 'sdk' | 'ipcity';

      /**
       *  定位过程的信息，用于排查定位失败原因
       */
      message: string;

      /**
       * 是否已经转换为高德坐标
       */
      isConverted: number;

      /**
       *
       */
      info: string;

      /**
       * 结构化地址信息
       */
      addressComponent: any;

      /**
       * 规范地址
       */
      formattedAddress: string;

      /**
       * 定位点附近的POI信息
       */
      pois: any;

      /**
       * 定位点附近的道路信息
       */
      roads: any;

      /**
       * 定位点附近的交叉口信息
       */
      crosses: any;
    }

    type CallBack = (status: Status, result: Result) => void;
  }

  class Geolocation extends AMap.EventEmitter {
    constructor(opts: Geolocation.Options);

    /**
     * 获取 用户的精确位置，有失败几率
     * @param callback
     */
    getCurrentPosition(callback: Geolocation.CallBack): void

    /**
     * 根据用户 IP 获取 用户所在城市信息
     * @param callback
     */
    getCityInfo(callback: Geolocation.CallBack): void;
  }
}
