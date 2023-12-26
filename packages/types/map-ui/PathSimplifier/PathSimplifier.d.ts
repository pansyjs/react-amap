declare namespace AMap {
  namespace AMapUI {
    namespace PathSimplifier {
      interface Options<D = any> {
        /**
         * 地图对象实例
         */
        map?: AMap.Map;

        /**
         * 绘制用图层的叠加顺序值
         */
        zIndex?: number;

        /**
         * 数据源数组，每个元素即为轨迹相关的信息
         */
        data?: D[];

        /**
         * 返回轨迹数据中的路径信息
         */
        getPath?: GetPath<D>;

        /**
         * 返回轨迹数据项的叠加顺序值，即zIndex。zIndex较大的轨迹绘制在上层;
         */
        getZIndex?: (pathData: D, pathIndex: number) => number;

        /**
         * 返回鼠标悬停时显示的Title内容
         */
        getHoverTitle?: GetHoverTitle;

        /**
         * 是否在绘制后自动调整地图视野以适合全部轨迹
         * @default true
         */
        autoSetFitView?: boolean;

        /**
         * 点击轨迹节点或者轨迹节点间的连线时，选中该轨迹
         * @default true
         */
        clickToSelectPath?: boolean;

        /**
         * 置顶选中的轨迹线；置顶的含义是，将该轨迹线的zIndex设置为现存最大值+1。
         * @default true
         */
        onTopWhenSelected?: boolean;

        /**
         * 绘制引擎的构造参数
         */
        renderOptions?: RenderOptions;

        /**
         * 绘制引擎的构造类（Function），默认为内置的Canvas引擎
         */
        renderConstructor?: any;
      }

      type GetPath<D = any> = (pathData: D, pathIndex: number) => (AMap.LngLat|[number,number])[];

      type GetHoverTitle<D = any> = (pathData: D, pathIndex: number, pointIndex: number) => string | null;

      interface RenderOptions {
        /**
         * 是否支持事件（click，mouseover，mouseout）
         * @default true
         */
        eventSupport?: boolean;

        /**
         * 对轨迹线上不可见（参见keyPointTolerance）的节点，是否支持事件
         * @default true
         */
        eventSupportInvisible?: boolean;

        /**
         * 绘制轨迹线的简化参数
         * @default 2
         */
        pathTolerance?: number;

        /**
         * 绘制中间节点的简化参数
         *   1. 小于0, 不绘制任何中间节点；默认设置。
         *   2. 大于等于0，对简化过的绘制轨迹线做二次简化，结果以点的形式绘制（入下图中的蓝色圆点）
         */
        keyPointTolerance?: number;

        /**
         * 如果地图视野内的轨迹节点的总数量小于该阈值，则绘制全部的节点。
         * @default -1
         */
        renderAllPointsIfNumberBelow?: number;

        /**
         * 轨迹线的样式
         */
        pathLineStyle?: PathLineStyle;

        /**
         * 轨迹线在鼠标Hover时的样式
         */
        pathLineHoverStyle?: PathLineHoverStyle;

        /**
         * 轨迹线上方向箭头的默认配置
         */
        dirArrowStyle?: DirArrowStyle;

        /**
         * 轨迹节点的绘制样式
         */
        keyPointStyle?: KeyPointStyle;

        /**
         * 轨迹起点的绘制样式
         */
        startPointStyle?: KeyPointStyle;

        /**
         * 轨迹终点的绘制样式
         */
        endPointStyle?: KeyPointStyle;

        /**
         * 轨迹点在鼠标Hover时的样式
         */
        keyPointHoverStyle?: KeyPointStyle;

        /**
         * 选中状态下的轨迹线上的节点的样式
         */
        keyPointOnSelectedPathLineStyle?: KeyPointStyle;

        /**
         * 轨迹巡航器的样式
         */
        pathNavigatorStyle?: PathNavigator.Style;

        /**
         * 根据轨迹索引和zoom返回样式配置
         */
        getPathStyle?: (pathItem: number, zoom: number) => any;

        /**
         * 鼠标Hover时显示的Title的样式
         */
        hoverTitleStyle?: HoverTitleStyle;
      }

      interface PathLineStyle {
        /** 线颜色 */
        strokeStyle?: string;
        /** 线宽度 */
        lineWidth?: number;
        /** 描边颜色 */
        borderStyle?: string;
        /** 描边宽度 */
        borderWidth?: number;
        /**  */
        dirArrowStyle?: any | boolean;
      }

      interface PathLineHoverStyle extends PathLineStyle {
        /**
         * 轨迹线选中时禁用Hover样式
         * @default true
         */
        disableIfSelected?: boolean;
      }

      interface DirArrowStyle extends PathLineStyle {
        /**
         * 箭头排布的间隔，单位像素
         */
        stepSpace?: number;
        /**
         * 箭头宽度，通常不用设置，直接取所在轨迹线的lineWidth
         */
        width?: number;
      }

      interface KeyPointStyle {
        /**
         * 点的半径
         */
        radius: number;

        /**
         * 填充色
         */
        fillStyle: string;

        /**
         * 描边色
         */
        strokeStyle: string;

        /**
         * 描边宽度
         */
        lineWidth: number;
      }

      interface HoverTitleStyle {
        /**
         * title的位置，left 或者 top
         */
        position?: string;

        /**
         * title所用的dom节点上的classNames，多个用空格分开，可借此调整dom节点的样式
         */
        classNames?: string;

        /**
         * title的dom节点相对于定位点的偏移
         */
        offset: [number, number];
      }
    }

    class PathSimplifier<D = any> {
      constructor(opts: PathSimplifier.Options<D>);

      /**
       * 返回pathIndex对应的轨迹数据项的zIndex值
       * @param pathIndex
       */
      getZIndexOfPath(pathIndex: number): number;

      /**
       * 设置pathIndex对应的轨迹数据项的zIndex值
       * @param pathIndex
       * @param zIndex
       */
      setZIndexOfPath(pathIndex: number, zIndex: number): void;

      /**
       * 是否置顶显示pathIndex对应的轨迹。
       * 具体行为是：
       *  1. isTop为真，设置 zIndex 为 现存最大zIndex+1
       *  2. isTop为假，设置 zIndex 为 构造参数中 getZIndex 的返回值
       * @param pathIndex
       * @param isTop
       */
      toggleTopOfPath(pathIndex: number, isTop: boolean): void;

      /**
       * 返回pathIndex对应的轨迹数据项
       * @param pathIndex
       */
      getPathData(pathIndex: number): D;

      /**
       * 创建一个轨迹巡航器。
       * @param pathIndex 关联的轨迹索引
       * @param options 巡航器的配置选项
       */
      createPathNavigator(pathIndex: number, options: PathNavigator.Options): PathNavigator;

      /**
       * 返回现存的所有轨迹巡航器
       */
      getPathNavigators(): (typeof PathNavigator)[];

      /**
       * 销毁现存的所有轨迹巡航器
       */
      clearPathNavigators(): void;

      /**
       * 返回处于选中状态的轨迹数据项；无选中时，返回null
       */
      getSelectedPathData(): D | null;

      /**
       * 返回处于选中状态的的pathIndex；无选中时，返回-1
       */
      getSelectedPathIndex(): number;

      /**
       * 判断pathIndex对应的轨迹是否处于选中状态
       * @param pathIndex
       */
      isSelectedPathIndex(pathIndex: number): boolean;

      /**
       * 选中（单选）pathIndex对应的轨迹；pathIndex < 0等同于清除选中状态。
       * @param pathIndex
       */
      setSelectedPathIndex(pathIndex: number): void;

      /**
       * 立即重新绘制
       */
      render(): void;

      /**
       * 延时设定的毫秒(默认10)后绘制；该时间段内重复调用只会触发一次。该函数适合短时间内多次触发绘制的场景。
       */
      renderLater(delay?: number): void;

      /**
       * 设定数据源数组，并触发重新绘制。data为空时将清除显示内容。
       * @param data
       */
      setData(data: D[]): void;

      /**
       * 自动调整地图视野，适应pathIndex对应的轨迹线。
       * 如果pathIndex < 0, 则适应全部的轨迹线。
       * @param pathIndex
       */
      setFitView(pathIndex: number): void;

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
      getRender(): any;

      /**
       * 返回内部绘制引擎的参数选项的引用。更改后，调用renderLater()方法重新绘制即可生效。
       */
      getRenderOptions(): any;

      /**
       * 监听 eventName 事件，多个事件用空格分隔
       * @param eventName
       * @param handler
       */
      on(eventName: string, handler: Function): void;

      /**
       * 注销 eventName 事件，多个事件用空格分隔
       * @param eventname
       * @param handler
       */
      off(eventname: string, handler: Function): void;
    }
  }
}
