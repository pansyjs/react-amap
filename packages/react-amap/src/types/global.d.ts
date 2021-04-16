declare namespace ReactAMap {
  /** 位置坐标 */
  type Position = [number, number] |
    { lng: number; lat: number; } |
    { longitude: number; latitude: number; } |
    AMap.LngLat;

  /** 偏移量 */
  type Offset = AMap.Pixel |
    [number, number] |
    { x: number, y: number };

  type Size = AMap.Size |
    { width: number, height: number };

  /** 获取Key的集合 */
  export type $Keys<T extends object> = keyof T;

  /** 线条的样式 */
  interface StrokeStyle {
    /** 线条颜色 */
    strokeColor?: string;
    /** 线条透明度 */
    strokeOpacity?: number;
    /** 线条宽度 */
    strokeWeight?: number;
    /** 虚线或者视线 */
    strokeStyle?: AMap.StrokeStyle;
    /** 虚线的分段  */
    strokeDasharray?: [number, number];
  }

  /** 填充的样式 */
  interface FillStyle {
    /** 填充的颜色 */
    fillColor?: string;
    /** 填充的透明度 */
    fillOpacity?: number;
  }

  interface OutlineStyle {
    /** 是否描边 */
    isOutline?: boolean;
    /** 描边颜色 */
    outlineColor?: string;
    /** 描边宽度 */
    borderWeight?: number;
  }

  class BaseInstance extends AMap.EventEmitter {
    /**
     * 注销实例
     */
    destroy?(): void;
    /**
     * 显示图层
     */
    show?(): void;
    /**
    * 隐藏图层
    */
    hide?(): void;
    /**
     * 设置图层所属地图
     * @param map map对象
     */
    setMap?(map?: AMap.Map | null): void;
  }

  export type GetEventFunObject<E extends {}> = {
    [Key in keyof E]?: (e: E[Key]) => void;
  }
}
