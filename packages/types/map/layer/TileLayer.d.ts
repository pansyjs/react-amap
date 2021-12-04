/// <reference path="./Layer.d.ts" />

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
       * 切片取图地址
       */
      tileUrl?: string;

      /**
       * 支持的缩放级别范围
       * @default
       *  [2, 30]
       */
      zooms?: [number, number];

      /**
       * 数据支持的缩放级别范围
       * @default
       *  [2, 30]
       */
      dataZooms?: [number, number];

      /**
       * 图层的透明度，取值范围[0,1]
       * @default 1
       */
      opacity?: number;

      /**
       * 是否显示
       * @default true
       */
      visible?: boolean;

      /**
       * 图层叠加的顺序值
       * @default 4
       */
      zIndex?: number;

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
       * 取图错误时的代替地址
       */
      errorUrl?: string;

      /**
       * 获取图块取图地址
       */
      getTileUrl?: string | ((x: number, y: number, level: number) => string);

      /**
       * 是否在高清屏下进行清晰度适配
       * @default true
       */
      detectRetina?: boolean;
    }
  }

  class TileLayer extends Layer {
    /**
     * 切片图层
     * @param options 图层选项
     */
    constructor(options?: TileLayer.Options);

    /**
     * 设置图层的取图地址
     * @param url 取图地址
     */
    setTileUrl(url: string | ((x: number, y: number, level: number) => string)): void;

    /**
     * 重新加载图层资源，重新渲染
     */
    reload(): void;

    /**
     * 获取图层参数信息
     */
    getOptions(): object;

    /**
     * 卫星图层
     */
    static Satellite: typeof AMap.Satellite;

    /**
     * 实时交通图层
     */
    static Traffic: typeof AMap.Traffic;
  }
}
