import { hasWindow } from '.';

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
  return hasWindow ? new AMap.Size(size.width, size.height) : null
}
