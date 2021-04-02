import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../utils';
import { MouseToolProps } from './types';
import { InternalMouseTool } from './mouse-tool';

export const MouseToolReactive = withPropsReactive<AMap.ToolBar, MouseToolProps>(InternalMouseTool);

export const MouseTool: React.FC<MouseToolProps> = (props) => {
  const { map } = useMap();

  return (
    <MouseToolReactive {...props} map={map} />
  )
};

export * from './types';
