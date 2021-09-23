import { toLnglat } from '../utils';
import type { Style } from './types';

export const configurableProps = [
  /** 动态属性 */
  'center',
  'radius',
  'draggable',
  'extData',

  /* 扩展属性 */
  'visible',
  'style'
]

export const allProps = configurableProps.concat([
  'zIndex',
  'bubble'
]);

export const setterMap = {
  visible(val: boolean, instance: AMap.Ellipse) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  },
  style(style: Style, instance: AMap.Ellipse) {
    if (instance) {
      instance.setOptions(style);
    }
  }
};

export const converterMap = {
  center: toLnglat
}
