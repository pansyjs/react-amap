declare namespace AMap {
  namespace BezierCurve {
    interface EventMap<I = BezierCurve> extends Polyline.EventMap<I> { }

    type Options<ExtraData = any> = Merge<Polyline.Options<ExtraData>, {
      /**
       * 贝瑟尔曲线的路径
       * 描述为一个二维数组规则如下：
       *   第一个元素是起点，
       *   之后的元素同时描述控制点和途经点，之后每个元素可以有0个到2个控制点
       *   控制点在前，途经点在最后
       * @example
       * [
       *   [lng,lat],//起点0
       *   [lng,lat,lng,lat],//控制点、途经点1
       *   [lng,lat,lng,lat,lng,lat],//控制点、控制点、途经点2
       *   [lng,lat,lng,lat]//控制点、途经点3
       * ]
       * @example
       * [
       *   [ [lng,lat] ],//起点0
       *   [ [lng,lat] , [lng,lat] ],//控制点、途经点1
       *   [ [lng,lat] , [lng,lat] , [lng,lat]],//控制点、控制点、途经点2
       *   [ [lng,lat] , [lng,lat] ]//控制点、途经点3
       * ]
       */
      path?: Array<Array<number | string | Array<string | number>>>;
    }>;

    interface GetOptionsResult<ExtraData = any> extends Polyline.GetOptionsResult<ExtraData> {
      /**
       * 贝瑟尔曲线的路径
       */
      path: Array<LngLat & { controlPoints: LngLat[] }>;
    }
  }

  class BezierCurve<ExtraData = any> extends Polyline<ExtraData> {
    /**
     * 贝瑟尔曲线
     * @param options 覆盖物选项
     */
    constructor(options: BezierCurve.Options<ExtraData>);
    /**
     * 获取覆盖物选项
     */
    getOptions(): Partial<BezierCurve.GetOptionsResult<ExtraData>>;
    // internal
    getInterpolateLngLats(): LngLat[];
    getSerializedPath(): number[][];
  }
}
