import { withPropsReactive} from '../../utils';
import { CircleProps} from './types';
import { InternalCircle } from './circle';

export const Circle = withPropsReactive<AMap.Circle, CircleProps>(InternalCircle);
export * from './circle';
export * from './config';
export * from './types';
