import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { buildCreateOptions } from '../utils/control';
import type { MapTypeProps } from './types';
import { allProps, converterMap, setterMap } from './config';

export const MapType = React.forwardRef<AMap.MapType, MapTypeProps>((props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.MapType>(null);

  const { onInstanceCreated } = usePropsReactive<AMap.MapType, MapTypeProps>(
    props,
    instanceObj,
    {
      setterMap,
      converterMap
    }
  );

  useEffect(
    () => {
      if (map) {
        createInstance().then(() => {
          instanceObj.current.addTo(map);
          onInstanceCreated?.(instanceObj.current)
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
      map.plugin(['AMap.MapType'], () => {
        const options = buildCreateOptions<MapTypeProps, AMap.MapType.Options>(
          props,
          allProps,
          converterMap,
        );
        instanceObj.current = new AMap.MapType(options);
        resolve();
      });
    });
  }

  return null;
});
