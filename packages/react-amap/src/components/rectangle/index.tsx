import { withPropsReactive } from '../../utils';
import { RectangleProps } from './types';
import { InternalRectangle } from './rectangle';

export const Rectangle = withPropsReactive<AMap.Rectangle, RectangleProps>(InternalRectangle);
export * from './rectangle';
export * from './config';
export * from './types';
