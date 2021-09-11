import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { usePropsReactive } from '../hooks';
import { useMap } from '../map';
import type { OverlayGroupProps } from './types';
import { setterMap, converterMap } from './config';

export const OverlayGroup = React.forwardRef<AMap.OverlayGroup, React.PropsWithChildren<OverlayGroupProps>>((props = {}, ref) => {
  const instanceObj = useRef<AMap.OverlayGroup>(null);
  const { map } = useMap();

  const { loaded, onInstanceCreated } = usePropsReactive<any, OverlayGroupProps>(
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
    [loaded]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      instanceObj.current = new AMap.OverlayGroup([]);
      resolve();
    });
  }

  const renderPolygons = (
    children: any
  ) => {
    if (!children) {
      return null
    }

    return React.Children.map(children, (child: any) =>
      React.cloneElement(child, {
        events: {
          created: (polygon: any) => {
            if (instanceObj.current) {
              instanceObj.current.addOverlay(polygon);
            }
          }
        }
      }),
    )
  }

  return loaded
    ? renderPolygons(props.children)
    : null
});
