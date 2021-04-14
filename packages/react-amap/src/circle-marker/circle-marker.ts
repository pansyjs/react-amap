import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { buildCreateOptions } from '../utils/overlay';
import { allProps, setterMap, converterMap } from './config';
import type { CircleMarkerProps, CircleMarkerType } from './types';

const CircleMarker: CircleMarkerType = (props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.CircleMarker>(null);

  const { loaded, onInstanceCreated } = usePropsReactive<AMap.CircleMarker, CircleMarkerProps>(
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
    instanceObj.current = new window.AMap.CircleMarker(options);
    return Promise.resolve();
  }

  return null
}

export default React.forwardRef(CircleMarker);
