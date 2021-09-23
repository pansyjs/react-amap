import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import { buildCreateOptions, renderEditor } from '../utils/overlay';
import { allProps, setterMap, converterMap } from './config';
import type { CircleProps } from './types';

export const Circle = React.forwardRef<AMap.Circle, React.PropsWithChildren<CircleProps>>((props = {}, ref) => {
  const { map, AMap } = useMap();
  const instanceObj = useRef<AMap.Circle>(null);

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
    [instanceObj.current]
  );

  const createInstance = () => {
    const options = buildCreateOptions<CircleProps, AMap.Circle.Options>(
      props,
      allProps,
      converterMap
    );
    options.map = map;
    instanceObj.current = new AMap.Circle(options);
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
