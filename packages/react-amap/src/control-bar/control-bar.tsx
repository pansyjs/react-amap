import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { buildCreateOptions } from '../utils/control';
import type { ControlBarProps } from './types';
import { allProps, converterMap, setterMap } from './config';

export const ControlBar = React.forwardRef<AMap.ControlBar, ControlBarProps>((props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.ControlBar>(null);

  const { onInstanceCreated } = usePropsReactive<AMap.ControlBar, ControlBarProps>(
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
      map.plugin(['AMap.ControlBar'], () => {
        const options = buildCreateOptions<ControlBarProps, AMap.ControlBar.Options>(
          props,
          allProps,
          converterMap,
        );
        instanceObj.current = new AMap.ControlBar(options);
        resolve();
      });
    });
  }

  return null;
});
