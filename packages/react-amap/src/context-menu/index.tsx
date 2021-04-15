import React from 'react';
import InternalContextMenu from './context-menu';
import { Item } from './item';
import { ContextMenuProps } from './types';

interface InternalContextMenuType extends React.FC<ContextMenuProps> {
  Item: typeof Item;
}

const ContextMenu = InternalContextMenu as unknown as InternalContextMenuType;

ContextMenu.Item = Item;

export { ContextMenu }

export { ContextMenuProps } from './types';
