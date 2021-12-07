import { hasWindow, getAMap } from './base';

/**
 * 将经纬度转换为AMap.LngLat对象
 * @param position
 * @returns AMap.LngLat
 */
export const toLnglat = (position: AMap.ExpandPosition): AMap.LngLat | null => {
  if (!position) return null;

  // 高德原生 AMap.LngLat 类
  if ('getLng' in position && 'getLat' in position) {
    return position;
  }
  let lng = 0;
  let lat = 0;
  if (Array.isArray(position)) {
    lng = position[0]
    lat = position[1]
  } else if ('lng' in position && 'lat' in position) {
    lng = position.lng
    lat = position.lat
  } else if ('longitude' in position && 'latitude' in position) {
    lng = position.longitude
    lat = position.latitude
  }

  const AMap = getAMap();

  if (hasWindow && AMap) {
    return new AMap.LngLat(lng, lat);
  }

  return null;
}
