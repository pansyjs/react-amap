import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { buildCreateOptions, renderEditor } from '../utils/overlay';
import { allProps, setterMap, converterMap } from './config';
import type { PolylineProps } from './types';

export const Polyline = React.forwardRef<AMap.Polyline, React.PropsWithChildren<PolylineProps>>((props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.Polyline>(null);

  const { loaded, onInstanceCreated } = usePropsReactive<AMap.Polyline, PolylineProps>(
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
    const options = buildCreateOptions<PolylineProps, AMap.Polyline.Options>(
      props,
      allProps,
      converterMap
    );
    options.map = map;
    instanceObj.current = new window.AMap.Polyline(options);
    return Promise.resolve();
  }

  return loaded
    ? renderEditor<AMap.Polyline>(props.children, {
        key: 'poly',
        instance: instanceObj.current,
        map: map
      })
    : null
});
