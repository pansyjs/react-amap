import { toPixel } from '../utils';

export const configurableProps = [
  /** 动态属性 */

  /* 扩展属性 */
  'visible'
]

export const allProps = configurableProps.concat([
  'radius',
  'gradient',
  'opacity',
  'zooms',
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
  direction(val: boolean, instance: AMap.ToolBar) {
    if (instance) {
      if (val) {
        instance.showDirection()
      } else {
        instance.hideDirection()
      }
    }
  },
  ruler(val: boolean, instance: AMap.ToolBar) {
    if (instance) {
      if (val) {
        instance.showRuler()
      } else {
        instance.hideRuler()
      }
    }
  },
  locate(val: boolean, instance: AMap.ToolBar) {
    if (instance) {
      if (val) {
        instance.showLocation()
      } else {
        instance.hideLocation()
      }
    }
  },
}

export const converterMap = {
  offset: toPixel
};
