/// <reference path="../types/index.d.ts" />

export const hasWindow = (typeof window !== 'undefined');

/**
 * 将经纬度转换为AMap.LngLat对象
 * @param position
 * @returns AMap.LngLat
 */
export const toLnglat = (position: ReactAMap.Position): AMap.LngLat | null => {
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

  return hasWindow ? new window.AMap.LngLat(lng, lat) : null;
}

/**
 * 将普通数据转换为 AMap.Pixel 类
 * @param offset
 * @returns
 */
export const toPixel = (offset: ReactAMap.Offset): AMap.Pixel | null => {
  if (!offset) return null;

  // 高德原生 AMap.Pixel 类
  if ('getX' in offset && 'getY' in offset) {
    return offset
  }

  let x = 0
  let y = 0
  if (Array.isArray(offset)) {
    x = offset[0]
    y = offset[1]
  } else if ('x' in offset && 'y' in offset) {
    x = offset.x;
    y = offset.y;
  }
  return hasWindow ? new window.AMap.Pixel(x, y) : null
}

/**
 * 将普通数据转换为 AMap.Size 类
 * @param size
 * @returns
 */
export const toSize = (size: ReactAMap.Size): AMap.Size | null => {
  if (!size) return null;

  if ('getWidth' in size) {
    return size;
  }
  return hasWindow ? new window.AMap.Size(size.width, size.height) : null
}

/**
 * 将字符串的首字母大写
 * @param str
 * @returns
 */
export const toCapitalString = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1, str.length);
};

export const isFun = (arg) => {
  return !!arg && (typeof arg === 'function');
};

export { APILoader } from './APILoader';
export { withPropsReactive } from './withPropsReactive';
