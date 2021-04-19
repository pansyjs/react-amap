import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import { buildCreateOptions, renderEditor } from '../utils/overlay';
import type { EllipseProps } from './types';
import { allProps, setterMap, converterMap } from './config';

export const Ellipse = React.forwardRef<AMap.Ellipse, React.PropsWithChildren<EllipseProps>>((props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.Ellipse>(null);

  const { loaded, onInstanceCreated } = usePropsReactive<AMap.Ellipse, EllipseProps>(
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
    const options = buildCreateOptions<EllipseProps, AMap.Ellipse.Options>(
      props,
      allProps,
      converterMap
    );
    options.map = map;
    instanceObj.current = new window.AMap.Ellipse(options);
    return Promise.resolve();
  }

  return loaded
    ? renderEditor<AMap.Ellipse>(props.children, {
        key: 'ellipse',
        instance: instanceObj.current,
        map: map
      })
    : null
});
