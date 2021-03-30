import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive} from '../utils';
import { CircleProps} from './types';
import { InternalCircle } from './circle';

export const CircleReactive = withPropsReactive<AMap.Circle, CircleProps>(InternalCircle);

export const Circle: React.FC<CircleProps> = (props) => {
  const { map } = useMap();

  return (
    <CircleReactive {...props} map={map}  />
  )
};

export * from './circle';
export * from './config';
export * from './types';
