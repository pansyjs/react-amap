import type { Style } from './types';
import { buildPathValue } from './utils';

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
  visible(val: boolean, instance: AMap.Polygon) {
    if (instance) {
      if (val) {
        instance.show();
      } else {
        instance.hide();
      }
    }
  },
  style(val: Style, instance: AMap.Polygon) {
    if (instance) {
      instance.setOptions(val);
    }
  }
}

export const converterMap = {
  path(val: AMap.ExpandPosition[]) {
    return buildPathValue(val);
  }
}
