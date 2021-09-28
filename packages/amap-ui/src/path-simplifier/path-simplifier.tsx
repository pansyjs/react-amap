import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '@pansy/react-amap';
import { getAMapUI } from '@pansy/react-amap-core';
import { usePropsReactive } from '@pansy/react-amap-core';
import { PathSimplifierProps } from './types';
import { setterMap, converterMap, allProps } from './config';

export const PathSimplifier = React.forwardRef<AMap.AMapUI.PathSimplifier, React.PropsWithChildren<PathSimplifierProps>>((
  props = {},
  ref
) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.AMapUI.PathSimplifier>(null);

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
          onInstanceCreated?.(instanceObj.current);
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
      const AMapUI = getAMapUI();

      const options = buildCreateOptions();
      options.map = map;

      AMapUI.load(['ui/misc/PathSimplifier'], (PathSimplifier) => {
        instanceObj.current = new PathSimplifier(options);

        resolve();
      });
    });
  }

  const buildCreateOptions = () => {
    const options: PathSimplifierProps = {};

    const getSetterValue = (key: string, props: PathSimplifierProps) => {
      if (key in converterMap) {
        return converterMap[key](props[key])
      }
      return props[key];
    }

    allProps.forEach((key) => {
      if (key in props) {
        options[key] = getSetterValue(key, props)
      }
    });

    return options;
  }

  return null;
});
