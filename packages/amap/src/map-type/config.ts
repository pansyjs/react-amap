export const configurableProps = [
  /** 动态属性 */
  'defaultType',
  'showTraffic',
  'showRoad',

  /* 扩展属性 */
]

export const allProps = configurableProps.concat([]);

export const setterMap = {
  visible(val: boolean, instance: AMap.MapType) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  }
}

export const converterMap = {};

