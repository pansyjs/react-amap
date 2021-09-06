export const setterMap = {
  data(list: AMap.MarkerCluster.DataOptions[], cluster: AMap.MarkerCluster) {
    if (cluster) {
      cluster.setData(list);
    }
  },
};

export const converterMap = {};
