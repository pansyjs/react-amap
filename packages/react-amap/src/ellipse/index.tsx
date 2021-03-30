import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../utils';
import { EllipseProps } from './types';
import { InternalEllipse } from './ellipse';

export const EllipseReactive = withPropsReactive<AMap.Ellipse, EllipseProps>(InternalEllipse);

export const Ellipse: React.FC<EllipseProps> = (props) => {
  const { map } = useMap();

  return (
    <EllipseReactive {...props} map={map}  />
  )
};

export * from './ellipse';
export * from './config';
export * from './types';
