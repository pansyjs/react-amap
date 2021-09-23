import { formatClusterMarkerData } from './utils';

export const setterMap = {
  data: (list: AMap.MarkerCluster.DataOptions[], cluster: AMap.MarkerCluster) => {
    cluster.setData(formatClusterMarkerData(list))
  }
};

export const converterMap = {};

export const configurableProps = [
  /** 动态属性 */
  'styles',
  'gridSize',
  'maxZoom',
  'averageCenter',

  /* 扩展属性 */
  'data',
];

export const allProps = configurableProps.concat([
  'clusterByZoomChange',
  'renderClusterMarker',
  'renderMarker',
])
