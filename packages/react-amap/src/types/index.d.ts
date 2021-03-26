/// <reference types="@pansy/amap-types" />

declare namespace PansyMap {
  type Position = [number, number] |
    { lng: number; lat: number; } |
    { longitude: number; latitude: number; } |
    AMap.LngLat;

  type Offset = AMap.Pixel |
    [number, number] |
    { x: number, y: number };

  type Size = AMap.Size |
    { width: number, height: number };

  interface BaseChildrenComponentProps {
    map?: AMap.Map;
  }

  class BaseInstance extends AMap.EventEmitter {
    /**
     * 注销实例
     */
    destroy?(): void;
    /**
     * 显示图层
     */
    show?(): void;
    /**
    * 隐藏图层
    */
    hide?(): void;
    /**
     * 设置图层所属地图
     * @param map map对象
     */
    setMap?(map?: AMap.Map | null): void;
  }
}
