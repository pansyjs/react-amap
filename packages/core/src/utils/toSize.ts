import { hasWindow, getAMap } from './base';

/**
 * 将普通数据转换为 AMap.Size 类
 * @param size
 * @returns
 */
export const toSize = (size: AMap.ExpandSize): AMap.Size | null => {
  if (!size) return null;

  if ('getWidth' in size) {
    return size;
  }

  const AMap = getAMap();

  if (hasWindow && AMap) {
    return new AMap.Size(size.width, size.height);
  }

  return null
}
