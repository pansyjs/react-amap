import { withPropsReactive } from '../../utils';
import { ContextMenuProps } from './types';
import { InternalContextMenu } from './context-menu';

export const ContextMenu = withPropsReactive<AMap.ContextMenu, ContextMenuProps>(InternalContextMenu);
export * from './context-menu';
export * from './config';
export * from './types';
