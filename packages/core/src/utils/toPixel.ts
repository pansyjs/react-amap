import { hasWindow, getAMap } from './base';

/**
 * 将普通数据转换为 AMap.Pixel 类
 * @param offset
 * @returns
 */
export const toPixel = (offset: AMap.ExpandOffset): AMap.Pixel | null => {
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

  const AMap = getAMap();

  if (hasWindow && AMap) {
    return new AMap.Pixel(x, y);
  }

  return null;
}
