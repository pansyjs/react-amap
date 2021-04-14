import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { buildCreateOptions } from '../utils/control';
import type { ToolBarProps, ToolBarType } from './types';
import { allProps, converterMap, setterMap } from './config';

const ToolBar: ToolBarType = (props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.ToolBar>(null);

  const { onInstanceCreated } = usePropsReactive<AMap.ToolBar, ToolBarProps>(
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
      map.plugin(['AMap.ToolBar'], () => {
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
}

export default React.forwardRef(ToolBar);
