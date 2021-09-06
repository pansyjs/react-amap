export const setterMap = {
  data(list: AMap.MarkerCluster.DataOptions[], cluster: AMap.MarkerCluster) {
    if (cluster) {
      cluster.setData(list);
    }
  },
  styles(styles: AMap.MarkerCluster.Style[], cluster: AMap.MarkerCluster) {
    if (cluster) {
      cluster.setStyles(styles);
    }
  },
};

export const converterMap = {};

export const configurableProps = [
  /** 动态属性 */
  'styles',

  /* 扩展属性 */
  'data',
];

export const allProps = configurableProps.concat([
  'gridSize',
  'maxZoom',
  'averageCenter',
  'clusterByZoomChange',
  'renderClusterMarker',
  'renderMarker',
])
