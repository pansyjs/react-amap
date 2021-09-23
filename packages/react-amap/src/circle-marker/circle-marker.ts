import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import { buildCreateOptions } from '../utils/overlay';
import { allProps, setterMap, converterMap } from './config';
import type { CircleMarkerProps } from './types';

export const CircleMarker = React.forwardRef<AMap.CircleMarker, CircleMarkerProps>((props = {}, ref) => {
  const { map, AMap } = useMap();
  const instanceObj = useRef<AMap.CircleMarker>(null);

  const { loaded, onInstanceCreated } = usePropsReactive(
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
          onInstanceCreated?.(instanceObj.current)
        });
      }
    },
    [map]
  );

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [instanceObj.current, loaded]
  );

  const createInstance = () => {
    const options = buildCreateOptions<CircleMarkerProps, AMap.CircleMarker.Options>(
      props,
      allProps,
      converterMap
    );
    options.map = map;
    instanceObj.current = new AMap.CircleMarker(options);
    return Promise.resolve();
  }

  return null
});
