
import React from 'react';
import { AbstractComponentProps } from '../AbstractComponent';

export interface MarkerProps<D = any> extends
  AMap.Marker.Options,
  PansyMap.BaseChildrenComponentProps,
  AbstractComponentProps
{
  className?: string;
  render?: renderMarker<D>;
}

export interface MarkerState {
  loaded: boolean
}

export type renderMarker<D = any> = (extData: D) => React.ReactNode | string;
