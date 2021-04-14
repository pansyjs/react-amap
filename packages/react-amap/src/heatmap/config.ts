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
  visible(val: boolean, instance: AMap.Heatmap) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  },
  dataSet(data: AMap.Heatmap.DataSet, instance: AMap.Heatmap) {
    if (instance) {
      instance.setDataSet(data);
    }
  },
};

export const converterMap = {};
