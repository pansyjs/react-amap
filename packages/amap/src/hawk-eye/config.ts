export const configurableProps = [
  /** 动态属性 */
  'isOpen',

  /* 扩展属性 */
  'visible',
]

export const allProps = configurableProps.concat([
  'autoMove',
  'showRectangle',
  'showButton',
  'isOpen',
  'mapStyle',
  'layers',
  'width',
  'height',
  'offset',
  'borderStyle',
  'borderColor',
  'borderRadius',
  'borderWidth',
  'buttonSize',
]);

export const setterMap = {
  visible(val: boolean, instance: AMap.HawkEye) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  },
  isOpen(val: boolean, instance: AMap.HawkEye) {
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
