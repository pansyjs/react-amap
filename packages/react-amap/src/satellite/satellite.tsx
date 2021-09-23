import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import { converterMap, setterMap, allProps } from './config';
import type { SatelliteProps } from './types';

export const Satellite = React.forwardRef<
  AMap.Satellite,
  React.PropsWithChildren<SatelliteProps>
>((props = {}, ref) => {
  const { map, AMap } = useMap();
  const instanceObj = useRef<AMap.Satellite>(null);

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
    const options = buildCreateOptions();
    instanceObj.current = new AMap.TileLayer.Satellite(options);
    return Promise.resolve();
  }

  const buildCreateOptions = () => {
    const options: AMap.MarkerCluster.Options = {};

    options.map = map;

    const getSetterValue = (key: string, props: SatelliteProps) => {
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
