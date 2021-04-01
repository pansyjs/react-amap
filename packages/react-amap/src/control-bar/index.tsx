import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../utils';
import { ControlBarProps } from './types';
import { InternalControlBar } from './control-bar';

export const ControlBarReactive = withPropsReactive<AMap.ControlBar, ControlBarProps>(InternalControlBar);

export const ControlBar: React.FC<ControlBarProps> = (props) => {
  const { map } = useMap();

  return (
    <ControlBarReactive {...props} map={map}  />
  )
};

export * from './config';
export * from './types';
