import { withPropsReactive } from '../../utils';
import { InfoWindowProps } from './types';
import { InternalInfoWindow } from './info-window';

export const InfoWindow = withPropsReactive<AMap.InfoWindow, InfoWindowProps>(InternalInfoWindow)
export * from './info-window';
export * from './config';
