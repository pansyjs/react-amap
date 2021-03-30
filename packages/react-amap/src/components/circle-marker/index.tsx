import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../../utils';
import { CircleMarkerProps } from './types';
import { InternalCircleMarker } from './circle-marker';

export const CircleMarkerReactive = withPropsReactive<AMap.CircleMarker, CircleMarkerProps>(InternalCircleMarker);

export const CircleMarker: React.FC<CircleMarkerProps> = (props) => {
  const { map } = useMap();

  return (
    <CircleMarkerReactive {...props} map={map}  />
  )
};

export * from './circle-marker';
export * from './config';
export * from './types';
