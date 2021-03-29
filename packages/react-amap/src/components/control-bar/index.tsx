import { withPropsReactive } from '../../utils';
import { ControlBarProps } from './types';
import { InternalControlBar } from './control-bar';

export const ControlBar = withPropsReactive<AMap.ControlBar, ControlBarProps>(InternalControlBar);
export * from './control-bar';
export * from './config';
