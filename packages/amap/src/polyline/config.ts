import { buildPathValue } from './utils';

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
  visible(val: boolean, instance: AMap.Polyline) {
    if (instance) {
      if (val) {
        instance.show();
      } else {
        instance.hide();
      }
    }
  },
  style(val, instance: AMap.Polyline) {
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
