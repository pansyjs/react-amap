export const setterMap = {
  visible(val: boolean, instance: AMap.MassMarks) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  }
};

export const converterMap = {};

export const configurableProps = [
  /** 动态属性 */
  'zIndex',
  'opacity',
  'zooms',
  'style',

  /* 扩展属性 */
  'data',
  'visible',
];

export const allProps = configurableProps.concat([
  'cursor',
]);

