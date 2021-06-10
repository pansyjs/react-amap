import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import type { GeocoderProps } from './types';

export const Geocoder = React.forwardRef<AMap.Geocoder, GeocoderProps>(({ events, ...rest }, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.Geocoder>(null);

  useEffect(
    () => {
      if (map) {
        createInstance().then(() => {
          events?.created(instanceObj.current);
        });
      }
    },
    [map]
  );

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [instanceObj.current]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      map.plugin(['AMap.Geocoder'], () => {
        instanceObj.current = new AMap.Geocoder(rest);
        resolve();
      })
    });
  }

  return null;
});
