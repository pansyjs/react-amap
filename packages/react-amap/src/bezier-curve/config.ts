import type { Style } from './types';

export const configurableProps = [
  /** 动态属性 */
  'path',
  'extData',
  'draggable',

  /* 扩展属性 */
  'visible',
  'style'
];

export const allProps = configurableProps.concat([
  'zIndex',
  'bubble',
  'showDir'
]);

export const setterMap = {
  visible(val: boolean, instance: AMap.BezierCurve) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  },
  style(val: Style, instance: AMap.BezierCurve) {
    if (instance) {
      instance.setOptions(val)
    }
  }
}

export const converterMap = {}
