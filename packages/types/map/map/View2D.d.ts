declare namespace AMap {
  namespace View2D {
    interface Options {
      /**
       * 地图中心点坐标值
       */
      center: LngLat;
      /**
       * 地图顺时针旋转角度，取值范围 [0-360]
       * @default 0
       */
      rotation: number;
      /**
       * 地图显示的缩放级别
       */
      zoom: number;
      /**
       * 地图显示的参考坐标系
       * @default EPSG3857
       */
      crs: Crs;
    }
  }

  class View2D extends EventEmitter {
    /**
     * 二维地图显示视口，用于定义二维地图静态显示属性
     * @param options 选项
     */
    constructor(options?: View2D.Options);
  }
}
