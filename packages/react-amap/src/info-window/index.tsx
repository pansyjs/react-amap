import React from 'react';
import { useMap } from '../map/context';
import { withPropsReactive } from '../utils';
import { InfoWindowProps } from './types';
import { InternalInfoWindow } from './info-window';

export const InfoWindowReactive = withPropsReactive<AMap.InfoWindow, InfoWindowProps>(InternalInfoWindow);

export const InfoWindow: React.FC<InfoWindowProps> = (props) => {
  const { map } = useMap();

  return (
    <InfoWindowReactive {...props} map={map}  />
  )
};

export * from './info-window';
export * from './config';
export * from './types';
