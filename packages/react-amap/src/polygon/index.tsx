import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../utils';
import { PolygonProps } from './types';
import { InternalPolygon } from './polygon';

export const PolygonReactive = withPropsReactive<AMap.Polygon, PolygonProps>(InternalPolygon);

export const Polygon: React.FC<PolygonProps> = (props) => {
  const { map } = useMap();

  return (
    <PolygonReactive {...props} map={map}  />
  )
};

export * from './polygon';
export * from './config';
export * from './types';
