import React, { forwardRef, useEffect, useRef, useImperativeHandle } from 'react';
import { buildCreateOptions } from '@pansy/react-amap/es/utils/control';
import { usePropsReactive } from '@pansy/react-amap-core';
import { allProps, converterMap, setterMap } from './config';

import type { ScatterLayerProps } from './types';

export const ScatterLayer = forwardRef<Loca.ScatterLayer, React.PropsWithChildren<ScatterLayerProps>>((
  props = {},
  ref
) => {
  const ins = useRef<Loca.ScatterLayer>();

  const { onInstanceCreated } = usePropsReactive(
    props,
    ins,
    {
      setterMap,
      converterMap
    }
  );

  useEffect(() => {
    const options = buildCreateOptions<ScatterLayerProps, Loca.ScatterLayer.Options>(
      props,
      allProps,
      converterMap,
    );

    ins.current = new window.Loca.ScatterLayer(options);

    onInstanceCreated?.(ins.current);
  }, [])

  useImperativeHandle(
    ref,
    () => ins.current,
    [ins.current]
  );

  return null;
})
