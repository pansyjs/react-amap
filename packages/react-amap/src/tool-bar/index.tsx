import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../utils';
import { ToolBarProps } from './types';
import { InternalToolBar } from './tool-bar';

export const ToolBarReactive = withPropsReactive<AMap.ToolBar, ToolBarProps>(InternalToolBar);

export const ToolBar: React.FC<ToolBarProps> = (props) => {
  const { map } = useMap();

  return (
    <ToolBarReactive map={map} {...props} />
  )
};

export * from './config';
export * from './types';
