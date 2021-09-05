declare namespace AMap {
  namespace VectorLayer {
    interface Options extends TileLayer.Options {}
  }

  type VectorOverlay = any;

  /**
   * 卫星图层
   */
  class VectorLayer extends TileLayer {
    constructor(options?: VectorLayer.Options);

    /**
     * 添加矢量覆盖物到集合中，不支持添加重复的覆盖物
     */
    add(vectors: VectorOverlay | VectorOverlay[]): void;

    /**
     * 删除矢量覆盖物
     */
    remove(vectors: VectorOverlay | VectorOverlay[]): void;

    /**
     * 判断传入的矢量覆盖物实例是否在VectorLayer这中
     */
    has(vector: VectorOverlay): boolean;

    /**
     * 清空 VectorLayer
     */
    clear(): void;

    /**
     * 根据经纬度查询矢量覆盖物信息
     * @param geometry
     */
    query(geometry: any): void;

    /**
     * 获取 VectorOverlay 所有覆盖物显示的范围
     */
    getBounds(): Bounds | undefined;
  }
}
