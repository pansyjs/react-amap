declare namespace AMap {
  namespace Buildings {
    interface StyleOpts {
      /**
       * 是否隐藏围栏之外的楼块
       */
      hideWithoutStyle: boolean;

      /**
       * 围栏信息数组
       */
      areas: Area[];
    }

    interface Area {
      /** 是否隐藏围栏之外的楼块 */
      rejectTexture: boolean;
      /** 是否显示 */
      visible: boolean;
      /** 围栏经纬度列表 */
      path: [number, number][];
      /** 围栏区域内楼块顶面颜色，支持 rgba、rgb、十六进制等 */
      color1: string | string[];
      /** 围栏区域内楼块侧面颜色，支持 rgba、rgb、十六进制等 */
      color2: string | string[];
    }

    interface Options extends TileLayer.Options {
      /**
       * 楼块侧面颜色，支持 rgba、rgb、十六进制等
       */
      wallColor?: string | string[];

      /**
       * 楼块顶面颜色，支持 rgba、rgb、十六进制等
       */
      roofColor?: string | string[];

      /**
       * 楼块的高度系数因子
       * @default 1
       */
      heightFactor?: number;

      /**
       * 楼块的围栏和样式设置
       */
      styleOpts?: StyleOpts;
    }
  }

  /**
   * 卫星图层
   */
  class Buildings extends TileLayer {
    constructor(options?: Buildings.Options);

    /**
     * 销毁图层
     */
    destroy(): void;
  }
}
