import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../utils';
import { ScaleProps } from './types';
import { InternalScale } from './scale';

export const ScaleReactive = withPropsReactive<AMap.ToolBar, ScaleProps>(InternalScale);

export const Scale: React.FC<ScaleProps> = (props) => {
  const { map } = useMap();

  return (
    <ScaleReactive {...props} map={map} />
  )
};

export * from './types';
