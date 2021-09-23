/// <reference path="../types/index.d.ts" />

export const noop = function () {};
/**
 * 是否是方法
 * @param arg
 * @returns
 */
export const isFun = (arg) => {
  return !!arg && (typeof arg === 'function');
};

export {
  hasWindow,
  toLnglat,
  toSize,
  toBounds,
  toPixel,
  getAMap,
  toCapitalString,
  usePropsReactive,
} from '@pansy/react-amap-core';
