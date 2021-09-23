declare namespace Loca {
  namespace PointLayer {
    interface Options extends Layer.Options {
      /**
       * 图层里面元素的叠加效果
       *  normal：正常透明度叠加
       *  lighter：叠加后可能更加明亮
       */
      blend: 'normal' | 'lighter';
    }

    interface Style {
      /**
       * 半径（默认单位: px）。支持动画过渡效果。
       * @default 20
       */
      radius?: number;

      /**
       * 填充色，支持回调设置不同的颜色（Hex颜色）
       */
      color?: string;

      /**
       * 点的单位，会影响半径和边宽度。可选值：px：像素，meter：地理单位米
       */
      unit?: Loca.Unit;

      /**
       * 边框宽度（默认单位:px）
       */
      borderWidth?: number;

      /**
       * 边框填充色，支持回调设置不同的颜色
       */
      borderColor?: string;

      /**
       * 模糊半径，从哪个位置开始向边缘模糊。负数代表不进行模糊。
       * @default -1
       */
      blurWidth?: number;
    }
  }

  class PointLayer extends Layer {
    constructor(opts: PointLayer.Options);

    /**
     * 更新图层样式，如果有的字段被缺省，那么它的值将会被重置为默认值。
     * @param style
     */
    setStyle(style: PointLayer.Style): void;
  }
}
