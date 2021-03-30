import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../../utils';
import { RectangleProps } from './types';
import { InternalRectangle } from './rectangle';

export const RectangleReactive = withPropsReactive<AMap.Rectangle, RectangleProps>(InternalRectangle);

export const Rectangle: React.FC<RectangleProps> = (props) => {
  const { map } = useMap();

  return (
    <RectangleReactive {...props} map={map}  />
  )
};

export * from './rectangle';
export * from './config';
export * from './types';
