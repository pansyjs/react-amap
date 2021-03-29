import { withPropsReactive } from '../../utils';
import { MarkersProps } from './types';
import { InternalMarkers } from './markers';

export const Markers = withPropsReactive<any, MarkersProps>(InternalMarkers);
export * from './markers';
export * from './config';
export * from './types';
