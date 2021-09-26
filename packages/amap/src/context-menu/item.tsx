import React, { useEffect } from 'react';
import { noop } from '../utils';

export interface ContextMenuItemProps {
  contextMenu?: AMap.ContextMenu;
  text?: string;
  onClick?: () => void;
}

export const Item: React.FC<ContextMenuItemProps> = (props = {}) => {
  const { text = '', contextMenu, onClick = noop } = props;

  useEffect(() => {
    if (contextMenu) {
      contextMenu.addItem(text, onClick);
    }
    return () => {
      if (contextMenu) {
        contextMenu.removeItem(text, onClick);
      }
    };
  }, [props.contextMenu, props.text, props.onClick]);

  return null;
};
