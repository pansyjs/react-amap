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

  /**
   * 创建Geocoder实例
   * @returns
   */
  const createInstance = () => {
    return new Promise<void>((resolve) => {
      AMap.plugin(['AMap.Geocoder'], () => {
        const opts = buildCreateOptions();

        geocoder.current = new AMap.Geocoder(opts);
        resolve();
      })
    });
  }

  /**
   * 获取创建Geocoder的参数
   * @returns
   */
  const buildCreateOptions = () => {
    const options: AMap.Geocoder.Options = {};

    allProps.forEach((key) => {
      if (key in props) {
        options[key] = props[key];
      }
    });

    return options;
  }

  return null;
});
