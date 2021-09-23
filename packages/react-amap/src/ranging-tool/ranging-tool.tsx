import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import type { RangingToolProps, RangingToolOptions } from './types';
import { converterMap, setterMap, allProps } from './config';

export const RangingTool = React.forwardRef<AMap.RangingTool, RangingToolProps>((
  props = {},
  ref
) => {
  const { map, AMap } = useMap();
  const instanceObj = useRef<AMap.RangingTool>(null);

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
    [loaded]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      AMap.plugin(['AMap.RangingTool'], () => {
        const options = buildCreateOptions();

        instanceObj.current = new AMap.RangingTool(map, options);

        resolve();
      });
    });
  }

  const buildCreateOptions = () => {
    const options: RangingToolOptions = {} as RangingToolOptions;

    const getSetterValue = (key: string, props: RangingToolOptions) => {
      if (key in converterMap) {
        return converterMap[key](props[key])
      }
      return props[key];
    }

    allProps.forEach((key) => {
      if (key in props) {
        if (key !== 'visible') {
          options[key] = getSetterValue(key, props)
        }
      }
    })

    return options;
  }

  return null;
});
