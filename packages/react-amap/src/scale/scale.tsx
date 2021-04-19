import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { buildCreateOptions } from '../utils/control';
import type { ScaleProps } from './types';
import { allProps, converterMap, setterMap } from './config';

export const Scale = React.forwardRef<AMap.Scale, ScaleProps>((props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.Scale>(null);

  const { onInstanceCreated } = usePropsReactive<AMap.Scale, ScaleProps>(
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
          map.addControl(instanceObj.current);
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
      map.plugin(['AMap.Scale'], () => {
        const options = buildCreateOptions<ScaleProps, AMap.Scale.Options>(
          props,
          allProps,
          converterMap,
        );
        instanceObj.current = new AMap.Scale(options);
        resolve();
      });
    });
  }

  return null;
});
