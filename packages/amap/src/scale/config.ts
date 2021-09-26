import { toPixel } from '../utils';

export const configurableProps = [
  /* 静态属性 */
  /* 动态属性 */

  /* 扩展属性 */
  'visible',
];

export const allProps = configurableProps.concat([
  'position',
  'offset',
]);

export const setterMap = {
  visible(val: boolean, instance: AMap.Scale) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  },
}

export const converterMap = {
  offset: toPixel
};
