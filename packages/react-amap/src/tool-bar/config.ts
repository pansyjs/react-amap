import { toPixel } from '../utils';

export const configurableProps = [
  /** 动态属性 */

  /* 扩展属性 */
  'visible'
];

export const allProps = configurableProps.concat([
  'position',
  'offset',
]);

export const setterMap = {
  visible(val: boolean, instance: AMap.ToolBar) {
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
