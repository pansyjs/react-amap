declare namespace AMap {
  namespace AMapUI {
    namespace PointSimplifier {
      interface Point<D> {
        data: D,
        index:number
      }

      interface EventMap<D> {
        /**
         * 鼠标点击点的矩形区域时触发
         */
        pointClick?: (event: { type: string; }, point: Point<D>) => void;
        /**
         * 鼠标移入到点的矩形区域时触发
         */
        pointMouseover?: (event: { type: string; }, point: Point<D>) => void;
        /**
         * 鼠标移出到点的矩形区域时触发
         */
        pointMouseout?: (event: { type: string; }, point: Point<D>) => void;
      }

      type GetPosition<D> = (dataItem: D, dataIndex: number) => AMap.LngLat | [number, number];

      type GetHoverTitle<D> = (dataItem: D, dataIndex: number) => string;

      type CompareDataItem<D> = (a: D, b: D, aIndex: number, bIndex: number) => -1 | 0 | 1;

      interface Options<D = any> {
        /**
         * 地图对象实例，用于显示相关的Marker
         */
        map?: AMap.Map;
        /**
         * 绘制用图层的叠加顺序值
         */
        zIndex?: number;
        /**
         * 数据源数组，每个元素即为点相关的信息
         */
        data?: D[];
        /**
         * 返回数据项中的经纬度信息
         */
        getPosition?: GetPosition<D>;
        /**
         * 返回鼠标Hover时显示的Title内容
         */
        getHoverTitle?: GetHoverTitle<D>;
        /**
         * 数据项的优先级比较函数，用于Array.sort(compare)；排序后的数组，靠前的优先绘制。
         */
        compareDataItem?: CompareDataItem<D>;
        /**
         * 是否在绘制后自动调整地图视野以适合全部点
         * @default true
         */
        autoSetFitView?: boolean;
        /**
         * 绘制引擎的构造类
         */
        renderConstructor?: Render.Canvas | Render.Canvas.GroupStyleRender;
        /**
         * 绘制引擎的构造参数
         */
        renderOptions?: Render.Canvas.Options | Render.Canvas.GroupStyleRender.Options;
        /**
         * 四叉树叶子节点中包含的点的最大数量，超过该数量则进行宽高等分，一分为四。
         * @default 100
         */
        maxChildrenOfQuadNode?: number;
        /**
         * 四叉树的最大高度。超过该高度，即使数量超过 maxChildrenOfQuadNode 的限制，也不再分叉。
         * @default 16
         */
        maxDepthOfQuadTree?: number;
        /**
         * 点的范围矩形的最坏宽高比（ 取值小于1，大于 1 时会自动取倒数）
         */
        badBoundsAspectRatio?: number;
      }
    }

    class PointSimplifier<D = any> {
      constructor(opts: PointSimplifier.Options);

      Render: PointSimplifier.Render;

      /**
       * 立即重新绘制
       */
      render(): void;

      /**
       * 延时设定的毫秒(默认10)后绘制；
       */
      renderLater(delay?: number): void;

      /**
       * 设定数据源数组，并触发重新绘制。data为空时将清除显示内容。
       * @param data
       */
      setData(data: D[]): void;

      /**
       * 隐藏
       */
      hide(): void;

      /**
       * 显示
       */
      show(): void;

      /**
       * 返回是否处于隐藏状态
       */
      isHidden(): boolean;

      /**
       * 返回内部使用的绘制引擎的实例
       */
      getRender(): boolean;

      /**
       * 返回内部绘制引擎的参数选项的引用。更改后，调用renderLater()方法重新绘制即可生效。
       */
      getRenderOptions(): any;
    }
  }
}
