declare namespace Loca {
  namespace IconLayer {
    interface Options extends Layer.Options {}

    interface Style {
      /**
       * 点的单位，会影响半径和边宽度。可选值：px：像素，meter：地理单位米
       */
      unit?: Loca.Unit;

      /**
       * 图标资源,接受三种值（Svg,Image,Url），可通过回调函数对每个点进行设置
       */
      icon?: string;

      /**
       * 图标大小，影响宽高。支持动画过渡效果，动画 key 字段名称为 radius。
       */
      iconSize?: [number, number];

      /**
       * 图标的旋转角度，可以通过回调为每个点设置不同的旋转角（单位:角度）
       * @default 0
       */
      rotation?: number;

      /**
       * 透明度,支持通过回调函数为每个点设置不同的透明度
       * @default 1
       */
      opacity?: number;
    }
  }

  class IconLayer extends Layer {
    constructor(opts: IconLayer.Options);

    /**
     * 更新图层样式，如果有的字段被缺省，那么它的值将会被重置为默认值。
     * @param style
     */
    setStyle(style: IconLayer.Style): void;
  }
}
