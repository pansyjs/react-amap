export const configurableProps = [
  /** 动态属性 */
  'tileLayer',
  'isOpen',
  'visible',

  /* 扩展属性 */
]

export const allProps = configurableProps.concat([]);

export const setterMap = {
  visible(val: boolean, instance: AMap.OverView) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  },
  isOpen(val: boolean, instance: AMap.OverView) {
    if (instance) {
      if (val) {
        instance.open()
      } else {
        instance.close()
      }
    }
  },
}

export const converterMap = {};
