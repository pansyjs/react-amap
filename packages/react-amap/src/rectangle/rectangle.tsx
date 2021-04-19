import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { buildCreateOptions, renderEditor } from '../utils/overlay';
import type { RectangleProps } from './types';
import { allProps, setterMap, converterMap } from './config';

export const Rectangle = React.forwardRef<AMap.Rectangle, React.PropsWithChildren<RectangleProps>>((props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.Rectangle>(null);

  const { loaded, onInstanceCreated } = usePropsReactive<AMap.Rectangle, RectangleProps>(
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
        createInstance()
          .then(() => {
            onInstanceCreated?.(instanceObj.current)
          })
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
    const options = buildCreateOptions<RectangleProps, AMap.Rectangle.Options>(
      props,
      allProps,
      converterMap
    );
    options.map = map;
    instanceObj.current = new window.AMap.Rectangle(options);
    return Promise.resolve();
  }

  return loaded
    ? renderEditor<AMap.Rectangle>(props.children, {
        key: 'rectangle',
        instance: instanceObj.current,
        map: map
      })
    : null
});
