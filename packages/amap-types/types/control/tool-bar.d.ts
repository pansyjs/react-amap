declare namespace AMap {
  namespace ToolBar {
    interface EventMap {
      hide: Event<'hide'>;
      show: Event<'show'>;
    }

    type Position = 'LT' | 'RT' | 'LB' | 'RB';

    type PositionObj = {
      top?: string;
      left?: string;
      right?: string;
      bottom?: string;
    }

    interface Options {
      /**
       * 相对于地图容器左上角的偏移量
       * @default
       * AMap.Pixel(10,10)
       */
      offset?: Pixel;
      /**
       * 控件停靠位置
       * LT:左上角;
       * RT:右上角;
       * LB:左下角;
       * RB:右下角;
       */
      position?: Position | PositionObj;
    }
  }

  class ToolBar extends EventEmitter {
    constructor(options?: ToolBar.Options);

    /**
     * 添加控件到地图上
     */
    addTo(map: Map): void;

    /**
     * 从地图上移除控件
     */
    remove(): void;

    /**
     * 设置控件隐藏
     */
    hide(): void;

    /**
     * 设置控件可见
     */
    show(): void;
  }
}
