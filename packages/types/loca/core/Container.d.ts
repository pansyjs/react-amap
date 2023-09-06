declare namespace Loca {
  namespace Container {
    interface Light {
      /**
       * 环境光强度
       */
      intensity?: number;
      /**
       * 环境光颜色
       */
      color?: string;
      /**
       * 光射向的目标位置
       */
      target?: number[];
      /**
       * 坐标位置
       */
      position?: number[];
      /**
       * 距离表示从光源到光照强度为 0 的位置，0 就是光不会消失。
       */
      distance: number;
    }

    interface Options {
      map: AMap.Map;
    }
  }

  /**
   * Loca 的核心控制类，可以控制光照、视角变换、图层渲染等。
   */
  class Container {
    constructor(opts: Container.Options);

    /**
     * 环境光
     */
    static ambLight: Container.Light;

    /**
     * 平行光
     */
    static dirLight: Container.Light;

    /**
     * 点光
     */
    static pointLight: Container.Light;

    animate: {
      /**
       * 开启动画
       */
      start(): void;

      /**
       * 暂停动画
       */
      pause(): void;

      /**
       * 停止动画
       */
      stop(): void;
    }

    /**
     * 主动触发地图渲染
     */
    requestRender(): void;

    /**
     * 将一个图层添加到地图上
     * @param layer
     */
    add(layer: any): void;

    /**
     * 将一个图层从地图上移除
     * @param layer
     */
    remove(layer: any): void;

    /**
     * 获取控件的 dom 容器
     */
    getControlContainer(): HTMLElement;

    /**
     * 销毁 Loca 实例
     * 如果希望同时销毁 map，那么需要先销毁 Loca 实例，然后销毁 Map 实例。
     */
    destroy(): void;
  }
}
