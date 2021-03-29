import { withPropsReactive } from '../../utils';
import { PolylineProps } from './types';
import { InternalPolyline } from './polyline';

export const Polyline = withPropsReactive<AMap.Polyline, PolylineProps>(InternalPolyline);
export * from './polyline';
export * from './config';
