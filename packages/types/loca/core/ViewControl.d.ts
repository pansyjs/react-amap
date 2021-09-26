declare namespace Loca {
  namespace ViewControl {
    interface AnimateConfig {
      /**
       *
       */
      value: number | number[];

      /**
       * 控制器
       */
      control: (number[])[];

      /**
       * 动画时间控制点
       */
      timing?: number[];

      /**
       * 过渡时间,单位毫秒
       */
      duration?: number;
    }
  }

  class ViewControl {
    constructor();

    /**
     * 添加自定义的镜头动画，如果传入了多个镜头动画配置，那么动画会按次序依次执行
     * @param finised 所有动画结束的回调函数
     */
    addAnimates(
      configs: ViewControl.AnimateConfig[],
      finised: () => void,
    ): void;

    /**
     * 获取当前所有的动画配置列表
     */
    getAnimates(): ViewControl.AnimateConfig[];

    /**
     * 清除所有动画
     */
    clearAnimates(): void;
  }
}
