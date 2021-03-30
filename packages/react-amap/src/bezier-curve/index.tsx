import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../utils';
import { BezierCurveProps } from './types';
import { InternalBezierCurve } from './bezier-curve';

export const BezierCurveReactive = withPropsReactive<AMap.BezierCurve, BezierCurveProps>(InternalBezierCurve);

export const BezierCurve: React.FC<BezierCurveProps> = (props) => {
  const { map } = useMap();

  return (
    <BezierCurveReactive {...props} map={map}  />
  )
};

export * from './bezier-curve';
export * from './config';
export * from './types';
