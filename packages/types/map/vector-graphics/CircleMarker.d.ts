declare namespace AMap {
  namespace CircleMarker {
    interface EventMap<I = CircleMarker> extends ShapeOverlay.EventMap<I> {}

    interface Options<T = any> {
      map?: Map;

      /** 圆心位置 */
      center?: LngLat;
      /** 圆半径，单位:px 最大值64 */
      radius?: number;
      /**
       * (default 10) 多边形覆盖物的叠加顺序。地图上存在多个多边形覆盖物叠加时，通过该属性使级别较高的多边形覆盖物在上层显示
       */
      zIndex?: number;
      /** (default false) 是否将覆盖物的鼠标或touch等事件冒泡到地图上（自v1.3 新增）*/
      bubble?: boolean;
      /** 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor */
      cursor?: string;
      /** default #00D3FC) 轮廓线颜色，使用16进制颜色代码赋值。默认值为#00D3FC */
      strokeColor?: string;
      /** 轮廓线透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.9 */
      strokeOpacity?: number;
      /** 轮廓线宽度 */
      strokeWeight?: number;
      /** 多边形填充颜色，使用16进制颜色代码赋值，如：#00B2D5 */
      fillColor?: string;
      /** 多边形填充透明度，取值范围 [0,1] ，0表示完全透明，1表示不透明。默认为0.5 */
      fillOpacity?: number;
      /** 设置多边形是否可拖拽移动，默认为false */
      draggable?: boolean;
      /** 用户自定义属性，支持JavaScript API任意数据类型，如Polygon的id等 */
      extData?: T;
    }
  }

  class CircleMarker<ExtraData = any> extends Circle<ExtraData> {
    constructor(opts: CircleMarker.Options);
    /** 设置圆点的半径 */
    setRaius(radius: number): void;
    /** 获取圆点中心 */
    getCenter(): LngLat;
    /** 获取圆点的半径 */
    getRadius(): number;
    /** 修改圆点标记的属性（样式风格，包括轮廓线、填充色等。属性详情参看CircleMarkerOptions列表） */
    setOptions(optsArg: CircleMarker.Options): void;
    /** 判断指定点坐标是否在圆内 */
    contains(point: LocationValue): boolean;
    /** 获取用户自定义属性 */
    getExtData(): any;
    /** 设置用户自定义属性，支持JavaScript API任意数据类型 */
    setExtData(extData: any): void;
    /** 获取圆形的属性 */
    // @ts-ignore
    getOptions(): CircleMarker.Options;
  }
}
