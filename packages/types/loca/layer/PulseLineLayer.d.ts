declare namespace Loca {
  namespace PulseLineLayer {
    interface Options extends Layer.Options {}

    interface Style {
      /**
       * 脉冲线的宽度
       */
      lineWidth?: number;

      /**
       * 脉冲头部颜色，每段脉冲的颜色由头部到尾部渐变
       */
      headColor?: string;

      /**
       * 线整体海拔高度
       * @default 0
       */
      altitude?: number

      /**
       * 每段脉冲占整条路径长度的比例，例如interval = 0.25, 则表示每条路径上同时有4段脉冲
       */
      interval?: number;

      /**
       * 表示一条脉冲动画从头走到尾的时间（毫秒）
       */
      duration?: number;
    }
  }

  class PulseLineLayer extends Layer {
    constructor(opts: PulseLineLayer.Options);

    /**
     * 更新图层样式，如果有的字段被缺省，那么它的值将会被重置为默认值。
     * @param style
     */
    setStyle(style: PulseLineLayer.Style): void;
  }
}
