import { AbstractComponentProps } from '../AbstractComponent';

export interface InfoWindowProps extends
  AMap.InfoWindow.Options,
  PansyMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  className?: string;
  visible?: boolean;
}
