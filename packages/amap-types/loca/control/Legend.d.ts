declare namespace Loca {
  namespace Legend {
    interface Options {
      /**
       * 默认会添加到地图上
       */
      loca?: typeof Loca;
    }

    interface Title {
      /**
       * 标题名
       */
      label?: string;

      /**
       * 标题文字大小
       */
      fontSize?: string;

      /**
       * 标题文字颜色
       */
      fontColor?: string;

      /**
       * 标题文字粗细
       */
      fontWeight?: string;

      /**
       * 标题内填充
       */
      padding?: string;

      /**
       * 标题外边距
       */
      margin?: string;
    }

    interface Style {
      /**
       * 图例的背景颜色
       */
      backgroundColor?: string;

      /**
       * 图例的文字大小
       */
      fontSize?: string;

      /**
       * 图例的文字颜色
       */
      fontColor?: string;

      /**
       * 图例的背板边角圆弧半径
       */
      borderRadius?: string;

      /**
       * 图例的相对定位
       */
      position?: string;

      /**
       * 图例的顶部定位
       */
      top?: string;

      /**
       * 图例的底部定位
       */
      bottom?: string;

      /**
       * 图例的左边定位
       */
      left?: string;

      /**
       * 图例的右边定位
       */
      right?: string;

      /**
       * 图例的内填充
       */
      padding?: string;

      /**
       * 图例的值和颜色信息
       */
      dataMap?: DataMap[];
    }

    interface DataMap {
      /** 图例文本 */
      label: string;
      /** 图例颜色 */
      color: string;
    }
  }

  class Legend extends Layer {
    constructor(opts: Legend.Options);

    /**
     * 设置图例样式
     * @param style
     */
    setStyle(style: {
      style: Legend.Style,
      title: Legend.Title,
    }): void;

    /**
     * 将图例添加到地图上
     * @param loca
     */
    addTo(loca: typeof Loca): void;

    /**
     * 将图例从地图上移除
     */
    remove(): void;
  }
}
