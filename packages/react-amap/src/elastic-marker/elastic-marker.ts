import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { buildCreateOptions } from '../utils/overlay';
import { allProps, setterMap, converterMap } from './config';
import type { ElasticMarkerProps } from './types';

export const ElasticMarker = React.forwardRef<AMap.ElasticMarker, ElasticMarkerProps>((props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.ElasticMarker>(null);

  const { loaded, onInstanceCreated } = usePropsReactive<AMap.ElasticMarker, ElasticMarkerProps>(
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
    return new Promise<void>((resolve) => {
      map.plugin(['AMap.ElasticMarker'], () => {
        const options = buildCreateOptions<any, AMap.ElasticMarker.Options>(
          props,
          allProps,
          converterMap
        );
        options.map = map;
        instanceObj.current = new window.AMap.ElasticMarker(options);
        resolve();
      });
    });
  }

  return null
});
