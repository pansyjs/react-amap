declare namespace ReactAMap {
  /** 获取Key的集合 */
  type $Keys<T extends object> = keyof T;

  export type GetEventFunObject<E extends {}> = {
    [Key in keyof E]?: (e: E[Key]) => void;
  }

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

  /** 描边的样式 */
  interface OutlineStyle {
    /** 是否描边 */
    isOutline?: boolean;
    /** 描边颜色 */
    outlineColor?: string;
    /** 描边宽度 */
    borderWeight?: number;
  }
}
