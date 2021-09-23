export const hasWindow = (typeof window !== 'undefined');

/**
 * 将字符串的首字母大写
 * @param str
 * @returns
 */
export const toCapitalString = (str: string): string => {
  return str[0].toUpperCase() + str.slice(1, str.length);
};

/**
 * 获取AMap对象，主要为了兼容乾坤
 * @returns AMap
 */
export const getAMap = (): typeof AMap => {
  // @ts-ignore
  return window.AMap || window.proxy.AMap;
}

export { toLnglat } from './toLnglat';
export { toSize } from './toSize';
export { toBounds } from './toBounds';
export { toPixel } from './toPixel';
