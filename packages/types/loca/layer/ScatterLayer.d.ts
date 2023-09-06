declare namespace Loca {
  namespace ScatterLayer {
    interface Options extends Layer.Options {}

    interface Style {
      /**
       * 图标长宽，单位取决于 unit 字段。
       */
      size?: number[];

      /**
       * 图标的旋转角度，以正北方向为起点，沿顺时针方向旋转。
       */
      rotation?: number;

      /**
       * 没有纹理的情况下，圆片的填充颜色。
       */
      color?: string;

      /**
       * 图标的海拔高度。单位：米。
       */
      altitude?: number;

      /**
       * 描边宽度，单位和 size 保持一致。
       */
      borderWidth?: number;

      /**
       * 没有纹理的情况下，圆片的描边颜色。
       */
      borderColor?: string;

      /**
       * 图标纹理资源，如果需要有动态效果，请使用帧序列图片资源：url，并且为了效果更好，我们建议使用宽高: 4096x128 像素的图片。⚠: 帧序列图片是头尾相连可以循环的图片。
       */
      texture?: any;

      /**
       * size 和 borderWidth 的单位，可以是 'px' 和 'meter'，meter 是实际地理的米，px 是屏幕像素。
       */
      unit?: Loca.Unit;

      /**
       * 是否有动画，动画开启需要使用序列帧的纹理，否则没有动画效果。
       */
      animate?: boolean;

      /**
       * 一轮动画的时长，单位毫秒(ms)。需要开启 animate 才能使用。
       */
      duration?: number;
    }
  }

  class ScatterLayer extends Layer {
    constructor(opts: ScatterLayer.Options);

    /**
     * 更新图层样式，如果有的字段被缺省，那么它的值将会被重置为默认值。
     * @param style
     */
    setStyle(style: ScatterLayer.Style): void;
  }
}
