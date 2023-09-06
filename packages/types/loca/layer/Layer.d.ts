declare namespace Loca {
  namespace Layer {
    interface Options {
      /**
       * 默认会添加到地图上
       */
      loca?: Loca.Container;

      /**
       * 图层显示层级
       */
      zIndex?: number;

      /**
       * 图层是否可见
       */
      visible?: boolean;

      /**
       * 图层缩放等级范围
       */
      zooms?: [number, number];

      /**
       * 图层整体透明度
       */
      opacity?: number;
    }

    interface AnimateConfig {
      /**
       * 动画的属性 key
       */
      key: string;

      /**
       * 动画的过渡值，范围是[0~1]之间，1 代表真实设定的值。
       */
      value: [number, number];

      /**
       * 动画时长，单位毫秒
       */
      duration: number;

      /**
       *  动画过渡函数
       */
      easing: string;

      /**
       * 一个动画 duration 中，从哪个时间开始动画
       */
      startWith?: number;

      /**
       * 是否开启来回摆动
       */
      yoyo?: boolean;

      /**
       * 动画重复次数，如果开启 yoyo 模式，那么 repeat 必须大于 1
       */
      repeat?: number;
    }
  }

  abstract class Layer {
    constructor(opts: Layer.Options);

    /**
     * 将图层添加到地图上，如果使用 setLoca(null)，将会从地图上移除图层。
     * @param loca
     */
    setLoca(loca?: typeof Loca): void;

    /**
     * 设置图层的 opacity 透明度，将会影响整个涂层的透明度信息。
     * @param opacity
     */
    setOpacity(opacity: number): void;

    /**
     * 设置图层的 zIndex 渲染循序，有的兔兔如果主动开启了深度检测：depth: true，那么深度可能将会影响显示顺序。
     * @param zIndex
     */
    setzIndex(zIndex: number): void;

    /**
     * 设置图层的 zooms，图层将在 zooms 范围内渲染。
     * @param zooms
     */
    setZooms(zooms: [number, number]): void;

    /**
     * 设置图层的 visible 为 true，图层可见。
     * @param duration 淡入效果，单位毫秒。
     * @param callback  完全显示之后执行的回调函数
     */
    show(duration?: number, callback?: () => void): void;

    /**
     * 设置图层的 visible 为 false，图层不可见。
     * @param duration 淡出效果，单位毫秒。
     * @param callback  完全隐藏之后执行的回调函数
     */
    hide(duration?: number, callback?: () => void): void;

    /**
     * 从地图上移除图层
     */
    remove(): void;

    /**
     * 销毁图层，此操作会先调用 remove 从地图上移除，然后释放内存资源。
     */
    destroy(): void;

    /**
     * 像素点位置，一般来说是鼠标相对地图容器的像素位置 [x, y]。
     * @param pos
     */
    queryFeature(pos: [number, number]): any | undefined;

    /**
     * 设置图层支持的动画属性。
     */
    addAnimate(config: Layer.AnimateConfig, callback: () => void): void;

    setSource(data: any): void;
  }
}
