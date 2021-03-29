/// <reference path="./layer.d.ts" />
/// <reference path="../common/index.d.ts" />

declare namespace AMap {
  namespace TileLayer {
    interface EventMap {
      /**
       * 图块切片加载完成事件
       */
      complete: Event<'complete'>;
    }

    interface Options extends Layer.Options {
      /**
       * 切片大小
       * @example
       *   25: 表示切片大小为256*256
       *   128: 表示切片大小为128*128
       *   6: 表示切片大小为64*64
       * @default 256
       */
      tileSize?: number;
      /**
       * 切片取图地址(自1.3版本起，该属性与getTileUrl属性合并)
       */
      tileUrl?: string;
      /**
       * 取图错误时的代替地址
       */
      errorUrl?: string;
      /**
       * 获取图块取图地址
       */
      getTileUrl?: string | ((x: number, y: number, level: number) => string);
      /**
       * 图层叠加的顺序值，0表示最底层
       * @default 1
       */
      zIndex?: number;
      /**
       * 图层的透明度，取值范围[0,1]，1代表完全不透明，0代表完全透明
       */
      opacity?: number;
      /**
       * 支持的缩放级别范围
       * 在PC上，取值范围为[3-18]；在移动设备上，取值范围为[3-19]
       * @default [3, 18]
       */
      zooms?: [number, number];
      /**
       * 是否在高清屏下进行清晰度适配
       * @default true
       */
      detectRetina?: boolean;
    }

    /**
     * 卫星图层
     */
    class Satellite extends TileLayer {

    }

    /**
     * 路网图层
     */
    class RoadNet extends TileLayer {

    }

    /**
     * 实时交通图层类
     */
    namespace Traffic {
      interface Options extends TileLayer.Options {
        /**
         * 是否设置可以自动刷新实时路况信息
         * @default false
         */
        autoRefresh?: boolean;
        /**
         * 设置刷新间隔时长，单位秒
         * @default 180
         */
        interval?: number;
      }
    }
    class Traffic extends TileLayer {
      /**
       * 实时交通图层
       * @param options 图层选项
       */
      constructor(options?: Traffic.Options);
    }
  }

  class TileLayer extends Layer {
    /**
     * 切片图层
     * @param options 图层选项
     */
    constructor(options?: TileLayer.Options);
    /**
     * 获取当前图层所有切片号
     */
    getTiles(): string[];
    /**
     * 重新加载此图层
     */
    reload(): void;
    /**
     * 设置图层的取图地址
     * @param url 取图地址
     */
    setTileUrl(url: string | ((x: number, y: number, level: number) => string)): void;
  }
}
