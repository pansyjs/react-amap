import type { Style } from './types';
import { toLnglat } from '../utils';

export const configurableProps = [
  /** 动态属性 */
  'center',
  'radius',
  'draggable',
  'extData',

  /* 扩展属性 */
  'visible',
  'style'
];

export const allProps = configurableProps.concat([
  'zIndex',
  'bubble'
]);

export const setterMap = {
  visible(val: boolean, instance: AMap.Circle) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  },
  style(val: Style, instance: AMap.Circle) {
    if (instance) {
      instance.setOptions(val);
    }
  }
}

export const converterMap = {
  center: toLnglat
}
