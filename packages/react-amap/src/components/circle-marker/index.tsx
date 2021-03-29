import { withPropsReactive } from '../../utils';
import { CircleMarkerProps } from './types';
import { InternalCircleMarker } from './circle-marker';

export const CircleMarker = withPropsReactive<AMap.CircleMarker, CircleMarkerProps>(InternalCircleMarker);
export * from './circle-marker';
export * from './config';
