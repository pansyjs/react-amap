import { hasWindow, getAMap } from './base';
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

  const AMap = getAMap();

  if (hasWindow && AMap) {
    return new AMap.Bounds(...bounds.map(toLnglat) as [AMap.LngLat, AMap.LngLat])
  }

  return null;
}
