declare namespace AMap {
  namespace RangingTool {

    interface EventMap<T extends ShapeOverlay = any> {
      /**
       * 每添加一个量测点时触发此事件
       */
      addnode?: (event: { type: string, obj: T }) => void;

      /**
       * 每删除一个量测点时触发此事件
       */
      removenode?: (event: { type: string, obj: T }) => void;

      /**
       * 距离量测结束后触发此事件
       */
      end?: (event: { type: string, obj: T }) => void;
    }

    interface Options {
      /**
       * 设置量测起始点标记属性对象，包括点标记样式、大小等，参考 MarkerOptions
       */
      startMarkerOptions?: Marker.Options;

      /**
       * 设置量测中间点标记属性对象，包括点标记样式、大小等，参考 MarkerOptions
       */
      midMarkerOptions?: Marker.Options;

      /**
       * 设置量测结束点标记属性对象，包括点标记样式、大小等，参考 MarkerOptions
       */
      endMarkerOptions?: Marker.Options;

      /**
       * 设置距离量测线的属性对象，包括线样式、颜色等，参考 PolylineOptions
       */
      lineOptions?: Polyline.Options;

      /**
       * 设置距离量测过程中临时量测线的属性对象，包括线样式、颜色，参考 PolylineOptions
       */
      tmpLineOptions?: Polyline.Options;

      /**
       * 设置量测起始点标签的文字内容，默认为“起点”
       */
      startLabelText?: string;

      /**
       * 设置量测中间点处标签的文字内容，默认为当前量测结果值
       */
      midLabelText?: string;

      /**
       * 设置量测结束点处标签的文字内容，默认为当前量测结果值
       */
      endLabelText?: string;

      /**
       * 设置量测起始点标签的偏移量。
       * @default
       *   Pixel(-6, 6)
       */
      startLabelOffset?: Pixel;

      /**
       * 设置量测中间点标签的偏移量。
       * @default
       *   Pixel(-6, 6)
       */
      midLabelOffset?: Pixel;

      /**
       * 设置量测结束点标签的偏移量
       * @default
       *   Pixel(-6, 6)
       */
      endLabelOffset?: Pixel;
    }
  }

  class RangingTool extends AMap.EventEmitter {
    constructor(map: AMap.Map, opts?: RangingTool.Options);

    /**
     * 启动测距工具
     */
    turnOn(): void;

    /**
     * 关闭测距工具
     * @param removeOverlays 否删除测距过程产生的覆盖物
     */
    turnOff(removeOverlays?: boolean): void;
  }
}
