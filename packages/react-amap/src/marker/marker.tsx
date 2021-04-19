import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { render } from 'react-dom';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import type { MarkerProps } from './types';
import { renderMarkerComponent } from './utils';
import { buildCreateOptions } from '../utils/control';
import { allProps, setterMap, converterMap } from './config';

export const Marker = React.forwardRef<AMap.Marker, React.PropsWithChildren<MarkerProps>>((props = {}, ref) => {
  const { map } = useMap();
  const contentWrapper = useRef<HTMLDivElement>();
  const instanceObj = useRef<AMap.Marker>(null);

  const { onInstanceCreated } = usePropsReactive<AMap.Marker, MarkerProps>(
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
      if (map) {
        refreshMarkerLayout(props);
      }
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
    const marker = new window.AMap.Marker(options);

    instanceObj.current = marker;

    marker['render'] = (function(marker) {
      return function(component) {
        renderMarkerComponent(component, marker)
      }
    })(instanceObj.current);

    setMarkerLayout(props);
    setChildComponent(props);

    return Promise.resolve();
  }

  const setMarkerLayout = (props: React.PropsWithChildren<MarkerProps<any>>) => {
    if (('render' in props) || ('children' in props && props.children)) {
      createContentWrapper()
      if ('className' in props && props.className) {
        contentWrapper.current.className = props.className;
      }
    }
  }

  const createContentWrapper = () => {
    contentWrapper.current = document.createElement('div');
    instanceObj.current.setContent(contentWrapper.current);
  }

  const setChildComponent = (props: React.PropsWithChildren<MarkerProps<any>>) => {
    if (contentWrapper.current) {
      if ('className' in props && props.className) {
        contentWrapper.current.className = props.className
      }
      if ('render' in props) {
        renderMarkerComponent(props.render, instanceObj.current)
      } else if ('children' in props) {
        const child = props.children;
        const childType = typeof child;
        if (childType !== 'undefined' && contentWrapper.current) {
          render(<div>{child}</div>, contentWrapper.current)
        }
      }
    }
  }

  const refreshMarkerLayout = (nextProps: MarkerProps) => {
    setChildComponent(nextProps)
  }

  return null;
});
