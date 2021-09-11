declare namespace AMap {
  /**
   * 抽象的覆盖物类
   */
  namespace Control {

    type PositionObj = {
      top?: string;
      left?: string;
      right?: string;
      bottom?: string;
    }

    type PositionStr = 'LT' | 'RT' | 'LB' | 'RB';

    interface EventMap {
      /** 显示时触发此事件 */
      show: Event<'show'>;
      /** 隐藏时触发此事件 */
      hide: Event<'hide'>;
    }

    interface Options {
      /**
       * 控件停靠位置
       * { top: 5; left: 5; right: 5; bottom: 5 }
       * 'LT': 左上角, 'RT': 右上角, 'LB': 左下角, 'RB': 右下角
       */
      position?: PositionObj | PositionStr;

      /**
       * 相对于地图容器左上角的偏移量，正数代表向右下偏移。
       * 默认为AMap.Pixel(10,10)
       */
      offset?: [number, number];
    }
  }

  /**
   * 地图控件基类，可扩展做自定义地图控件。
   */
  abstract class Control extends EventEmitter {
    constructor(options?: Control.Options);

    /**
     * 添加控件到地图上
     * @param map
     */
    addTo(map: AMap.Map): void;

    /**
     * 从地图上移除控件
     */
    remove(): void;

    /**
     * 设置控件可见
     */
    show(): void;

    /**
     * 设置控件隐藏
     */
    hide(): void;
  }
}
