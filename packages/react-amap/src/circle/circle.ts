import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { buildCreateOptions, renderEditor } from '../utils/overlay';
import { allProps, setterMap, converterMap } from './config';
import type { CircleProps } from './types';

export const Circle = React.forwardRef<AMap.Circle, React.PropsWithChildren<CircleProps>>((props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.Circle>(null);

  const { loaded, onInstanceCreated } = usePropsReactive<AMap.Circle, CircleProps>(
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
    [instanceObj.current]
  );

  const createInstance = () => {
    const options = buildCreateOptions<CircleProps, AMap.Circle.Options>(
      props,
      allProps,
      converterMap
    );
    options.map = map;
    instanceObj.current = new window.AMap.Circle(options);
    return Promise.resolve();
  }

  return loaded
    ? renderEditor<AMap.Circle>(props.children, {
        key: 'circle',
        instance: instanceObj.current,
        map: map
      })
    : null
});
