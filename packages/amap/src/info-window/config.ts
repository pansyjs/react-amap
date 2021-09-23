import { toSize, toPixel, toLnglat } from '../utils';

export const configurableProps = [
  'content',
  'position',
  'size',
  'offset',

  /* 扩展属性 */
  'visible'
];

export const allProps = configurableProps.concat([
  'isCustom',
  'autoMove',
  'closeWhenClickMap',
  'showShadow'
]);

export const converterMap = {
  size: toSize,
  offset: toPixel,
  position: toLnglat
};
