import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../utils';
import { OverViewProps } from './types';
import { InternalOverView } from './over-view';

export const OverViewReactive = withPropsReactive<AMap.OverView, OverViewProps>(InternalOverView);

export const OverView: React.FC<OverViewProps> = (props) => {
  const { map } = useMap();

  return (
    <OverViewReactive {...props} map={map} />
  )
};

export { OverViewProps } from './types';
