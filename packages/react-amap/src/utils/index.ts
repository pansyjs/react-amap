/// <reference path="../types/index.d.ts" />

export const hasWindow = (typeof window !== 'undefined');

export const noop = function () {};

/**
 * 将字符串的首字母大写
 * @param str
 * @returns
 */
export const toCapitalString = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1, str.length);
};

/**
 * 是否是方法
 * @param arg
 * @returns
 */
export const isFun = (arg) => {
  return !!arg && (typeof arg === 'function');
};

export { toLnglat } from './toLnglat';
export { toSize } from './toSize';
export { toBounds } from './toBounds';
export { toPixel } from './toPixel';
export { APILoader } from './APILoader';
