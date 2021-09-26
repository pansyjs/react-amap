/// <reference types="@pansy/amap-types" />

declare namespace AMap {
  /** 位置坐标 */
  type ExpandPosition = [number, number] |
    { lng: number; lat: number; } |
    { longitude: number; latitude: number; } |
    AMap.LngLat;

  /** 偏移量 */
  type ExpandOffset = AMap.Pixel |
    [number, number] |
    { x: number, y: number };

  type ExpandSize = AMap.Size |
    { width: number, height: number };
}
