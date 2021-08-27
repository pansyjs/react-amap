import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { buildCreateOptions } from '../utils/control';
import type { HawkEyeProps } from './types';
import { allProps, converterMap, setterMap } from './config';

export const HawkEye = React.forwardRef<AMap.HawkEye, HawkEyeProps>((props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.HawkEye>(null);

  const { onInstanceCreated } = usePropsReactive<AMap.HawkEye, HawkEyeProps>(
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
      map.plugin(['AMap.HawkEye'], () => {
        const options = buildCreateOptions<HawkEyeProps, AMap.HawkEye.Options>(
          props,
          allProps,
          converterMap,
        );
        instanceObj.current = new AMap.HawkEye(options);
        resolve();
      });
    });
  }

  return null;
});
