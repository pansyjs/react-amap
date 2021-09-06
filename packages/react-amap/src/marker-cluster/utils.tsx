import { render } from 'react-dom';
import { isFun } from '../utils';
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
