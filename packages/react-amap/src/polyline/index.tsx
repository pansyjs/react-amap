import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../utils';
import { PolylineProps } from './types';
import { InternalPolyline } from './polyline';

export const PolylineReactive = withPropsReactive<AMap.Polyline, PolylineProps>(InternalPolyline);

export const Polyline: React.FC<PolylineProps> = (props) => {
  const { map } = useMap();

  return (
    <PolylineReactive {...props} map={map}  />
  )
};

export * from './config';
export * from './types';
