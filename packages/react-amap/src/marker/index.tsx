import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../utils';
import { MarkerProps } from './types';
import { InternalMarker } from './marker';

export const MarkerReactive = withPropsReactive<AMap.Marker, MarkerProps>(InternalMarker);

export const Marker: React.FC<MarkerProps> = (props) => {
  const { map } = useMap();

  return (
    <MarkerReactive {...props} map={map}  />
  )
};

export * from './config';
export * from './types';
