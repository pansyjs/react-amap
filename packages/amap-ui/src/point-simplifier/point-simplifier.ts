import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '@pansy/react-amap';
import { getAMapUI, usePropsReactive } from '@pansy/react-amap-core';
import { PointSimplifierProps } from './types';
import { setterMap, converterMap, allProps } from './config';

export const PointSimplifier = React.forwardRef<AMap.AMapUI.PointSimplifier, React.PropsWithChildren<PointSimplifierProps>>((
  props = {},
  ref
) => {
  const { map } = useMap();
  const pointSimplifier = useRef<AMap.AMapUI.PointSimplifier>(null);

  const { loaded, onInstanceCreated } = usePropsReactive(
    props,
    pointSimplifier,
    {
      setterMap,
      converterMap
    }
  );

  useEffect(
    () => {
      if (map) {
        createInstance().then(() => {
          onInstanceCreated?.(pointSimplifier.current);
        });
      }
    },
    [map]
  );

  useImperativeHandle(
    ref,
    () => pointSimplifier.current,
    [loaded]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      const AMapUI = getAMapUI();

      AMapUI.load(['ui/misc/PointSimplifier'], (PointSimplifier) => {
        const options = buildCreateOptions(PointSimplifier);
        options.map = map;

        pointSimplifier.current = new PointSimplifier(options);

        resolve();
      });
    });
  }

  const buildCreateOptions = (PointSimplifier) => {
    const options: AMap.AMapUI.PointSimplifier.Options = {};

    const getSetterValue = (key: string, props: PointSimplifierProps) => {
      if (key in converterMap) {
        return converterMap[key](props[key])
      }
      return props[key];
    }

    allProps.forEach((key) => {
      if (key in props) {
        options[key] = getSetterValue(key, props)
      }
    });

    if (options.renderConstructor) {
      options.renderConstructor = PointSimplifier.Render.Canvas.GroupStyleRender;
    }

    return options;
  }

  return null;
});
