export const setterMap = {
  visible(val: boolean, instance: AMap.Satellite) {
    if (instance) {
      if (val) {
        instance.show();
      } else {
        instance.hide();
      }
    }
  },
};

export const converterMap = {};

export const configurableProps = [
  /** 动态属性 */
  'zooms',
  'opacity',
  'visible',
  'zIndex',
];

export const allProps = configurableProps.concat([
  'autoRefresh',
  'interval',
  'tileSize',
])
