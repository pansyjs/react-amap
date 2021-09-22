import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { converterMap, setterMap, allProps } from './config';
import type { TrafficProps } from './types';

export const Traffic = React.forwardRef<
  AMap.Traffic,
  React.PropsWithChildren<TrafficProps>
>((props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.Traffic>(null);

  const { loaded, onInstanceCreated } = usePropsReactive<AMap.Traffic, TrafficProps>(
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
    const options = buildCreateOptions();
    instanceObj.current = new AMap.TileLayer.Traffic(options);
    return Promise.resolve();
  }

  const buildCreateOptions = () => {
    const options: AMap.MarkerCluster.Options = {};

    options.map = map;

    const getSetterValue = (key: string, props: TrafficProps) => {
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
})
