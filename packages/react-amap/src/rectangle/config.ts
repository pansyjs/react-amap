import type { Bounds, Style } from './types';
import { buildBounds } from './utils';

export const configurableProps = [
  /** 动态属性 */
  'bounds',
  'draggable',
  'extData',

  /* 扩展属性 */
  'visible',
  'style'
]

export const allProps = configurableProps.concat([
  'zIndex',
  'bubble',
  'cursor'
]);

export const setterMap = {
  visible(val: boolean, instance: AMap.Rectangle) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  },
  style(val: Style, instance: AMap.Rectangle) {
    if (instance) {
      instance.setOptions(val)
    }

  }
}

export const converterMap = {
  bounds(val: Bounds) {
    return buildBounds(val);
  }
}
