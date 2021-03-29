import { withPropsReactive } from '../../utils';
import { EllipseProps } from './types';
import { InternalEllipse } from './ellipse';

export const Ellipse = withPropsReactive<AMap.Ellipse, EllipseProps>(InternalEllipse);
export * from './ellipse';
export * from './config';
