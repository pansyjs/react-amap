declare namespace Loca {
  namespace LineLayer {
    interface Options extends Layer.Options {}

    interface Style {
      /**
       * 线的颜色
       */
      color?: string;

      /**
       * 线的宽度
       */
      lineWidth?: string;

      /**
       * 图标大小，海拔高度，优先级低于数据中的高度信息。单位：米
       */
      altitude?: number;
    }
  }

  class LineLayer extends Layer {
    constructor(opts: LineLayer.Options);

    /**
     * 更新图层样式，如果有的字段被缺省，那么它的值将会被重置为默认值。
     * @param style
     */
    setStyle(style: LineLayer.Style): void;
  }
}
