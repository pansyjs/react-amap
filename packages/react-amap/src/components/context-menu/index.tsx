import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../../utils';
import { ContextMenuProps } from './types';
import { InternalContextMenu } from './context-menu';

export const ContextMenuReactive = withPropsReactive<AMap.ContextMenu, ContextMenuProps>(InternalContextMenu);

export const ContextMenu: React.FC<ContextMenuProps> = (props) => {
  const { map } = useMap();

  return (
    <ContextMenuReactive {...props} map={map}  />
  )
};

export * from './context-menu';
export * from './config';
export * from './types';
