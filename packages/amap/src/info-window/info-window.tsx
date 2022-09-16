import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { usePortal } from '@pansy/use-portal';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import type { InfoWindowProps } from './types';
import { allProps, converterMap } from './config';

export const InfoWindow = React.forwardRef<AMap.InfoWindow, React.PropsWithChildren<InfoWindowProps>>((props = {}, ref) => {
  const { map, AMap } = useMap();
  const { container, Portal } = usePortal();
  const instanceObj = useRef<AMap.InfoWindow>(null);

  const setterMap = {
    visible(val) {
      if (val) {
        showWindow();
        setClassName();
      } else {
        closeWindow();
      }
    }
  }

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
        })
      }
    },
    [map]
  );

  useEffect(
    () => {
      refreshWindowLayout();
    },
    [props.children, props.className]
  )

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [instanceObj.current]
  );

  const createInstance = () => {
    const options = buildCreateOptions(props);
    instanceObj.current = new AMap.InfoWindow(options);
    return Promise.resolve();
  }

  const refreshWindowLayout = () => {
    setClassName()
  }

  const buildCreateOptions = (props: InfoWindowProps) => {
    const options: AMap.InfoWindow.Options = {}

    // 如果开发者没有设置 isCustom 属性，默认设置为 false
    if ('isCustom' in props) {
      options.isCustom = !!props.isCustom
    } else {
      options.isCustom = false
    }

    if ('content' in props) {
      options.content = props.content
    } else {
      options.content = container
    }

    allProps.forEach((key) => {
      if (key in props) {
        if (['visible', 'isCustom', 'content'].indexOf(key) === -1) {
          options[key] = getSetterValue(key, props);
        }
      }
    })
    return options;
  }

  const getSetterValue = (key: string, props: InfoWindowProps) => {
    if (key in converterMap) {
      return converterMap[key](props[key])
    }
    return props[key];
  }

  const showWindow = () => {
    if (instanceObj.current) {
      instanceObj.current.open(map, instanceObj.current.getPosition());
    }
  }

  const closeWindow = () => {
    if (instanceObj.current) {
      instanceObj.current.close()
    }
  }

  const setClassName = () => {
    if (container) {
      let baseClsValue = ''
      // 刷新 className
      if ('className' in props && props.className) {
        baseClsValue += props.className
      } else if (props.isCustom === true) {
        baseClsValue += 'amap_markers_pop_window'
      }
      container.className = baseClsValue
    }
  }

  return (<Portal>{props.children}</Portal>);
});
