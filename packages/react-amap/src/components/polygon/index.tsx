import { withPropsReactive } from '../../utils';
import { PolygonProps } from './types';
import { InternalPolygon } from './polygon';

export const Polygon = withPropsReactive<AMap.Polygon, PolygonProps>(InternalPolygon);
export * from './polygon';
export * from './config';
export * from './types';
