import { withPropsReactive } from '../../utils';
import { BezierCurveProps } from './types';
import { InternalBezierCurve } from './bezier-curve';

export const BezierCurve = withPropsReactive<AMap.BezierCurve, BezierCurveProps>(InternalBezierCurve);
export * from './bezier-curve';
export * from './config';
export * from './types';
