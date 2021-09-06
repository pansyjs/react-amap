import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { converterMap, setterMap } from './config';
import type { MarkerClusterProps } from './types';

export const MarkerCluster = React.forwardRef<
  AMap.MarkerCluster,
  MarkerClusterProps
>((props = {}, ref) => {
  const { map } = useMap();
  const cluster = useRef<AMap.MarkerCluster>(null);

  const { loaded, onInstanceCreated } = usePropsReactive<AMap.MarkerCluster, MarkerClusterProps>(
    props,
    cluster,
    {
      setterMap,
      converterMap
    }
  );

  useImperativeHandle(
    ref,
    () => cluster.current,
    [loaded]
  );

  useEffect(
    () => {
      if (map) {
        createInstance().then(() => {
          onInstanceCreated?.(cluster.current)
        });
      }
    },
    [map]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      AMap.plugin(['AMap.MarkerCluster'], () => {
        cluster.current = new AMap.MarkerCluster(map, []);
        resolve();
      });
    });
  }

  return null;
})
