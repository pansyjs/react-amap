import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '@pansy/react-amap';
import { getAMapUI } from '@pansy/react-amap-core';
import { PathSimplifierProps } from './types';

export const PathSimplifier = React.forwardRef<AMap.Circle, React.PropsWithChildren<PathSimplifierProps>>((
  props = {},
  ref
) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.Circle>(null);

  useEffect(
    () => {
      if (!map) return;
      createInstance().then(() => {

      });
    },
    [map]
  );

  const createInstance = () => {
    const AMapUI = getAMapUI();

    AMapUI.load(['ui/misc/PathSimplifier'], (PathSimplifier) => {
      console.log(AMapUI);
      console.log(PathSimplifier);
    });

    return Promise.resolve();
  }

  return null;
});
