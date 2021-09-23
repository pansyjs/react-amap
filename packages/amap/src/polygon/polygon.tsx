import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import { buildCreateOptions, renderEditor } from '../utils/overlay';
import { allProps, setterMap, converterMap } from './config';
import type { PolygonProps } from './types';

export const Polygon = React.forwardRef<AMap.Polygon, React.PropsWithChildren<PolygonProps>>((props = {}, ref) => {
  const { map, AMap } = useMap();
  const instanceObj = useRef<AMap.Polygon>(null);

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
    const options = buildCreateOptions<PolygonProps, AMap.Polygon.Options>(
      props,
      allProps,
      converterMap
    );
    options.map = map;
    instanceObj.current = new AMap.Polygon(options);
    return Promise.resolve();
  }

  return loaded
    ? renderEditor<AMap.Polygon>(props.children, {
        key: 'poly',
        instance: instanceObj.current,
        map: map
      })
    : null
});
