export const configurableProps = [
  /** 动态属性 */
  'zIndex',
  'visible',

  /* 扩展属性 */
  'dataSet'
];

export const allProps = configurableProps.concat([
  '3d',
  'radius',
  'gradient',
  'opacity',
  'zooms',
]);

export const setterMap = {
  visible(val: boolean, instance: AMap.HeatMap) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  },
  dataSet(data: AMap.HeatMap.DataSet, instance: AMap.HeatMap) {
    if (instance) {
      instance.setDataSet(data);
    }
  },
};

export const converterMap = {};
