export const configurableProps = [
  /** 动态属性 */

  /* 扩展属性 */
  'visible',
  'dataSet'
];

export const allProps = configurableProps.concat([
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
