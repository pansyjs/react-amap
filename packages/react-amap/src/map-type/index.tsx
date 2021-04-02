import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../utils';
import { MapTypeProps } from './types';
import { InternalMapType } from './map-type';

export const Reactive = withPropsReactive<AMap.MapType, MapTypeProps>(InternalMapType);

export const MapType: React.FC<MapTypeProps> = (props) => {
  const { map } = useMap();

  return (
    <Reactive map={map} {...props} />
  )
};

export * from './types';
export * from './config';
