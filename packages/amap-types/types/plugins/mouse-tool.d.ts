declare namespace AMap {
  namespace MouseTool {
    interface Options {}

    interface EventMap<T extends ShapeOverlay = any> {
      /**
       * 鼠标工具绘制覆盖物结束时触发此事件，instance对象为绘制出来的覆盖物对象。
       */
      draw: (event: { type: string, obj: T }) => void;
    }
  }

  class MouseTool extends AMap.EventEmitter {
    constructor(map: AMap.Map);
    /**
     * 开启鼠标画点标注模式。鼠标在地图上单击绘制点标注，标注样式参考MarkerOptions设置
     * @param options
     */
    marker(options?: AMap.MouseTool.Options): void;
    /**
     * 开启鼠标画折线模式。
     * 鼠标在地图上点击绘制折线，鼠标左键双击或右键单击结束绘制
     * */
    polyline(options?: AMap.Polyline.Options): void;
    /**
     * 开启鼠标画多边形模式。
     * 鼠标在地图上单击开始绘制多边形，鼠标左键双击或右键单击结束当前多边形的绘制。
     * @param options
     */
    polygon(options?: AMap.Polygon.Options): void;
    /**
     * 开启鼠标画矩形模式。鼠标在地图上拉框即可绘制相应的矩形。
     * @param options
     */
    rectangle(options?: AMap.Rectangle.Options): void;
    /**
     * 开启鼠标画圆模式。鼠标在地图上拖动绘制相应的圆形。
     * @param options
     */
    circle(options?: AMap.Circle.Options): void;
    /**
     * 开启距离量测模式。鼠标在地图上单击绘制量测节点，并计算显示两两节点之间的距离，鼠标左键双击或右键单击结束当前量测操作。
     * @param options
     */
    rule(options?: AMap.Polyline.Options): void;
    /**
     * 开启面积量测模式。鼠标在地图上单击绘制量测区域，鼠标左键双击或右键单击结束当前量测操作，并显示本次量测结果。
     * @param options
     */
    measureArea(options?: AMap.Polygon.Options): void;
    /**
     * 开启鼠标拉框放大模式。鼠标可在地图上拉框放大地图。矩形框样式参考PolygonOptions设置
     * @param options
     */
    rectZoomIn(options?: AMap.Polygon.Options): void;
    /**
     * 开启鼠标拉框缩小模式。
     * 鼠标可在地图上拉框缩小地图。矩形框样式参考PolygonOptions设置
     * @param options
     */
    rectZoomOut(options?: AMap.Polygon.Options): void;
    /**
     * 关闭当前鼠标操作。
     * 参数arg设为true时，鼠标操作关闭的同时清除地图上绘制的所有覆盖物对象；
     * 设为false时，保留所绘制的覆盖物对象。
     * @default false
     */
    close(enage?: boolean): void;
  }
}
