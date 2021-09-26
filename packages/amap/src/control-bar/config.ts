export const configurableProps = [
  /** 动态属性 */
  'position',
  'showZoomBar',
  'showControlButton',

  /* 扩展属性 */
  'visible'
]

export const allProps = configurableProps.concat([]);

export const setterMap = {
  visible(val: boolean, instance: AMap.ControlBar) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  }
}

export const converterMap = {}
