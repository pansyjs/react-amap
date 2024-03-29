import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import type { MouseToolProps } from './types';
import { converterMap, setterMap } from './config';

export const MouseTool = React.forwardRef<AMap.MouseTool, MouseToolProps>((props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.MouseTool>(null);

  const { onInstanceCreated } = usePropsReactive(
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
    [instanceObj.current]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      AMap.plugin(['AMap.MouseTool'], () => {
        instanceObj.current = new AMap.MouseTool(map);
        resolve();
      });
    });
  }

  return null;
});
