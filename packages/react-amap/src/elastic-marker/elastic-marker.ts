import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import { buildCreateOptions } from '../utils/overlay';
import { allProps, setterMap, converterMap } from './config';
import type { ElasticMarkerProps } from './types';

export const ElasticMarker = React.forwardRef<AMap.ElasticMarker, ElasticMarkerProps>((props = {}, ref) => {
  const { map, AMap } = useMap();
  const instanceObj = useRef<AMap.ElasticMarker>(null);

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
    return new Promise<void>((resolve) => {
      AMap.plugin(['AMap.ElasticMarker'], () => {
        const options = buildCreateOptions<any, AMap.ElasticMarker.Options>(
          props,
          allProps,
          converterMap
        );
        options.map = map;
        instanceObj.current = new AMap.ElasticMarker(options);
        resolve();
      });
    });
  }

  return null
});
