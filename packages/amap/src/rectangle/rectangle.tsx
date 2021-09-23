import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import { buildCreateOptions, renderEditor } from '../utils/overlay';
import type { RectangleProps } from './types';
import { allProps, setterMap, converterMap } from './config';

export const Rectangle = React.forwardRef<AMap.Rectangle, React.PropsWithChildren<RectangleProps>>((props = {}, ref) => {
  const { map, AMap } = useMap();
  const instanceObj = useRef<AMap.Rectangle>(null);

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
    instanceObj.current = new AMap.Rectangle(options);
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
