import React, { useRef, useState, useEffect, useImperativeHandle } from 'react';
import type { GeocoderProps } from './types';

export const Geocoder = React.forwardRef<AMap.Geocoder, GeocoderProps>(({ events, ...rest }, ref) => {
  const [loaded, setLoaded] = useState<boolean>();
  const instanceObj = useRef<AMap.Geocoder>(null);

  useEffect(
    () => {
      createInstance().then(() => {
        setLoaded(true);
        events?.created?.(instanceObj.current);
      });
    },
    []
  );

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [loaded]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      AMap.plugin(['AMap.Geocoder'], () => {
        instanceObj.current = new AMap.Geocoder(rest);
        resolve();
      })
    });
  }

  return null;
});
