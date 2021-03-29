import { withPropsReactive } from '../../utils';
import { MarkerProps } from './types';
import { InternalMarker } from './marker';

export const Marker = withPropsReactive<AMap.Marker, MarkerProps>(InternalMarker);
export * from './marker';
export * from './config';
export * from './types';
