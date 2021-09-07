import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { usePropsReactive } from '../hooks';
import { converterMap, setterMap, allProps } from './config';
import type { GeocoderProps } from './types';

export const Geocoder = React.forwardRef<
  AMap.Geocoder,
  GeocoderProps
>((props, ref) => {
  const geocoder = useRef<AMap.Geocoder>(null);

  const { loaded, onInstanceCreated } = usePropsReactive<any, GeocoderProps>(
    props,
    geocoder,
    {
      setterMap,
      converterMap
    }
  );

  useEffect(
    () => {
      createInstance().then(() => {
        onInstanceCreated?.(geocoder.current)
      });
    },
    []
  );


  useImperativeHandle(
    ref,
    () => geocoder.current,
    [loaded]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      AMap.plugin(['AMap.Geocoder'], () => {
        const opts = buildCreateOptions();

        geocoder.current = new AMap.Geocoder(opts);
        resolve();
      })
    });
  }

  const buildCreateOptions = () => {
    const options: AMap.Geocoder.Options = {};

    const getSetterValue = (key: string, props: GeocoderProps) => {
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
