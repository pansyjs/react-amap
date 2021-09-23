import { hasWindow } from '.';
import { toLnglat } from './toLnglat';

export type Bounds = AMap.Bounds | [AMap.ExpandPosition, AMap.ExpandPosition];

/**
 * 将经纬度转换为AMap.Bounds对象
 * @param position
 * @returns AMap.Bounds
 */
export const toBounds = (bounds: Bounds): AMap.Bounds | null => {
  // 高德原生 AMap.LngLat 类
  if ('getSouthWest' in  bounds) {
    return bounds;
  }
  return hasWindow
    ? new window.AMap.Bounds(...bounds.map(toLnglat) as [AMap.LngLat, AMap.LngLat])
    : null;
}
