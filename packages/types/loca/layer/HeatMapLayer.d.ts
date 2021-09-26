declare namespace Loca {
  namespace HeatMapLayer {
    interface Options extends Layer.Options {}

    interface Style {
      /**
       * 热力的聚合半径，支持每个点的半径单独设置，单位取决于 unit 字段。支持动画过渡效果。
       * @default 20
       */
      radius?: number;

      /**
       * 每个热力点的值，会影响最终的聚合结果，值越高代表越热。
       * @default 10
       */
      value?: number;

      /**
       * 热力的颜色梯度，值是对象映射的形式。
       */
      gradient?: Record<number, string>;

      /**
       * 热力最高点的高度值，单位取决于 unit 字段。支持动画过渡效果。
       * @default 100
       */
      height?: number;

      /**
       * 热力的最低点到最高点的变化曲线。
       */
      heightBezier?: number[];

      /**
       * 热力值的最大值，默认为数据中的最高值，也可以自定义设置，会控制热力的最热区域的显示效果。
       */
      max?: number;

      /**
       * 热力值的最小值，默认为数据中的最小值，也可以自定义设置，会控制热力的最冷区域的显示效果。
       */
       min?: number;

      /**
       * 热力的单位
       */
      unit?: Loca.Unit;
    }
  }

  class HeatMapLayer extends Layer {
    constructor(opts: IconLayer.Options);

    /**
     * 更新图层样式，如果有的字段被缺省，那么它的值将会被重置为默认值。
     * @param style
     */
    setStyle(style: IconLayer.Style): void;
  }
}
