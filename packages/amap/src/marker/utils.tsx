import { render } from 'react-dom';
import { isFun, toLnglat, toPixel } from '../utils';
import { allProps } from './config';
import { renderMarker } from './types';

export const getPropValue = (key, value) => {
  if (allProps.indexOf(key) === -1) {
    return null;
  }
  if (key === 'position') {
    return toLnglat(value);
  } else if (key === 'offset') {
    return toPixel(value);
  }
  return value;
};

export const renderMarkerComponent = (
  component: renderMarker,
  marker: AMap.Marker
) => {
  let child: string | React.ReactNode = component as any;
  if (isFun(component)) {
    const extData = marker.getExtData();
    child = component(extData);
  }
  if (child) {
    render(<div>{child}</div>, marker.getContent() as Element);
  }
};
