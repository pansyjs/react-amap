import { render } from 'react-dom';
import { isFun, toLnglat } from '../utils';
import { MarkerClusterProps } from './types';

export const renderMarkerComponent = (
  component: MarkerClusterProps['render'],
  renderMarkerData: AMap.MarkerCluster.RenderMarkerData,
) => {
  const { marker, data } = renderMarkerData;
  let child: string | React.ReactNode = component;

  if (isFun(component)) {
    // @ts-ignore
    child = component(data[0]);
  }

  if (child) {
    render(<div>{child}</div>, marker.getContentDom());
  }
};

export const renderClusterMarkerComponent = (
  component: MarkerClusterProps['renderCluster'],
  renderMarkerData: AMap.MarkerCluster.RenderClusterMarkerData,
) => {
  const { marker, clusterData, count } = renderMarkerData;

  let child: string | React.ReactNode;

  if (isFun(component)) {
    // @ts-ignore
    child = component({
      count,
      list: clusterData,
    });
  } else {
    child = component;
  }

  if (child) {
    render(<div>{child}</div>, marker.getContentDom());
  }
}

export const formatClusterMarkerData = (
  list: AMap.MarkerCluster.DataOptions[] = []
) => {
  return list
    .map(item => {
      const lnglatObj = toLnglat(item.lnglat || item.position);

      if (!lnglatObj) return undefined;

      return {
        ...item,
        lnglat: [
          lnglatObj.getLng(),
          lnglatObj.getLat(),
        ] as [number, number],
      }
    })
    .filter(item => item)
}
