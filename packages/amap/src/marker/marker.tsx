import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { usePortal } from '@pansy/use-portal';
import { useMap } from '../map';
import { usePropsReactive, isFun } from '../utils';
import type { MarkerProps } from './types';
import { buildCreateOptions } from '../utils/control';
import { allProps, setterMap, converterMap } from './config';

export const Marker = React.forwardRef<AMap.Marker, React.PropsWithChildren<MarkerProps>>((props = {}, ref) => {
  const { map, AMap } = useMap();
  const { container, Portal } = usePortal();
  const instanceObj = useRef<AMap.Marker>(null);

  const { onInstanceCreated } = usePropsReactive(
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

  useEffect(
    () => {
    },
    [props.className, props.render, props.children]
  )

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [instanceObj.current]
  );

  const createInstance = () => {
    const options = buildCreateOptions<MarkerProps, AMap.Marker.Options>(
      props,
      allProps,
      converterMap
    );
    options.map = map;
    const marker = new AMap.Marker(options);

    instanceObj.current = marker;

    setMarkerLayout(props);

    return Promise.resolve();
  }

  const setMarkerLayout = (props: React.PropsWithChildren<MarkerProps<any>>) => {
    if (('render' in props) || ('children' in props && props.children)) {
      createContentWrapper()
      if ('className' in props && props.className) {
        container.className = props.className;
      }
    }
  }

  const createContentWrapper = () => {
    instanceObj.current.setContent(container);
  }

  let children: any = props.render || props.children;

  if (isFun(children)) {
    children = children();
  }

  if (children) {
    return (
      <Portal>{props.children}</Portal>
    );
  }

  return null;
});
