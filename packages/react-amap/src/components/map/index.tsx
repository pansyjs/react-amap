import { withPropsReactive } from '../../utils';
import { MapProps } from './types';
import { InternalMap } from './map';

export const Map = withPropsReactive<AMap.Map, MapProps>(InternalMap);
export * from './map';
export * from './config';
