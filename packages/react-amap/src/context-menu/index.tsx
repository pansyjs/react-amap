import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../utils';
import { ContextMenuProps } from './types';
import { InternalContextMenu } from './context-menu';
import { Item } from './item';

export const ContextMenuReactive = withPropsReactive<AMap.ContextMenu, ContextMenuProps>(InternalContextMenu);

export const PContextMenu: React.FC<ContextMenuProps> = (props) => {
  const { map } = useMap();

  return (
    <ContextMenuReactive {...props} map={map}  />
  )
};

type InternalContextMenuType = typeof PContextMenu;
export interface CircleMarkerInterface extends InternalContextMenuType {
  Item: typeof Item;
}

const ContextMenu = PContextMenu as CircleMarkerInterface;

ContextMenu.Item = Item;

export { ContextMenu }

export * from './config';
export * from './types';
