import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import { buildCreateOptions } from '../utils/control';
import type { HawkEyeProps } from './types';
import { allProps, converterMap, setterMap } from './config';

export const HawkEye = React.forwardRef<AMap.HawkEye, HawkEyeProps>((props = {}, ref) => {
  const { map, AMap } = useMap();
  const instanceObj = useRef<AMap.HawkEye>(null);

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
    [loaded]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      AMap.plugin(['AMap.HawkEye'], () => {
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
