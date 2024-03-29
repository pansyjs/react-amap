import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import { buildCreateOptions } from '../utils/control';
import type { ToolBarProps } from './types';
import { allProps, converterMap, setterMap } from './config';

export const ToolBar = React.forwardRef<AMap.ToolBar, ToolBarProps>((props = {}, ref) => {
  const { map, AMap } = useMap();
  const instanceObj = useRef<AMap.ToolBar>(null);

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
      AMap.plugin(['AMap.ToolBar'], () => {
        const options = buildCreateOptions<ToolBarProps, AMap.ToolBar.Options>(
          props,
          allProps,
          converterMap,
        );
        instanceObj.current = new AMap.ToolBar(options);
        resolve();
      });
    });
  }

  return null;
});
