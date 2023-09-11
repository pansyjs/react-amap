export const configurableProps = [
  /** 动态属性 */
  'loca',
  'zIndex',
  'zooms',
  'opacity',
]

export const allProps = configurableProps.concat([
  'visible',
]);

export const setterMap = {
  visible(val: boolean, instance: Loca.PulseLineLayer) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  },
};

export const converterMap = {}
