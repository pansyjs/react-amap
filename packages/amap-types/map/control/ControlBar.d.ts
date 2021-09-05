declare namespace AMap {
  namespace ControlBar {
    interface EventMap extends Control.EventMap {}

    interface Options extends Control.Options {
      /**
       * 是否显示倾斜、旋转按钮
       */
      showControlButton?: boolean;
    }
  }

  class ControlBar extends Control {
    /**
     * 组合了旋转、倾斜、复位、缩放在内的地图控件
     * @param options 选项
     */
    constructor(options?: ControlBar.Options);
  }
}
