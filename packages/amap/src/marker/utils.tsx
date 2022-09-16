import { toLnglat, toPixel } from '../utils';
import { allProps } from './config';

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
