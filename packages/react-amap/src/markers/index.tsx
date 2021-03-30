import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../utils';
import { MarkersProps } from './types';
import { InternalMarkers } from './markers';

export const MarkersReactive = withPropsReactive<any, MarkersProps>(InternalMarkers);

export const Markers: React.FC<MarkersProps> = (props) => {
  const { map } = useMap();

  return (
    <MarkersReactive {...props} map={map}  />
  )
};

export * from './markers';
export * from './config';
export * from './types';
