import React, { forwardRef, useEffect, useRef, useImperativeHandle } from 'react';
import { buildCreateOptions } from '@pansy/react-amap/es/utils/control';
import { usePropsReactive } from '@pansy/react-amap-core';
import { allProps, converterMap, setterMap } from './config';
import { useLoca } from '../Loca';

import type { PulseLinkLayerProps } from './types';

export const PulseLinkLayer = forwardRef<Loca.PulseLinkLayer, React.PropsWithChildren<PulseLinkLayerProps>>((
  props = {},
  ref
) => {
  const { loca } = useLoca();
  const ins = useRef<Loca.PulseLinkLayer>();

  const { onInstanceCreated } = usePropsReactive(
    props,
    ins,
    {
      setterMap,
      converterMap
    }
  );

  useEffect(() => {
    if (loca) {
      const options = buildCreateOptions<PulseLinkLayerProps, Loca.PulseLinkLayer.Options>(
        props,
        allProps,
        converterMap,
      );

      ins.current = new window.Loca.PulseLinkLayer(options);

      onInstanceCreated?.(ins.current);
    }

  }, [loca])

  useImperativeHandle(
    ref,
    () => ins.current,
    [ins.current]
  );

  return null;
})
