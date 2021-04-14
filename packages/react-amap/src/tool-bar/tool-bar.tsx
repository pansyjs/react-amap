import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import type { ToolBarProps, ToolBarType } from './types';
import { allProps, converterMap, setterMap } from './config';

const ToolBar: ToolBarType = (props = {}, ref) => {
  const { map } = useMap();
  const instanceObj = useRef<AMap.ToolBar>(null);

  const { loaded, onInstanceCreated } = usePropsReactive<AMap.ToolBar, ToolBarProps>(
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
          map.addControl(instanceObj.current);
          onInstanceCreated?.(instanceObj.current)
        });
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
      map.plugin(['AMap.ToolBar'], () => {
        const options = buildCreateOptions(props);
        instanceObj.current = new AMap.ToolBar(options);
        resolve();
      });
    });
  }

  const buildCreateOptions = (props: ToolBarProps) => {
    const options: AMap.ToolBar.Options = {}
    allProps.forEach((key) => {
      if (key in props) {
        if (key !== 'visible') {
          options[key] = getSetterValue(key, props)
        }
      }
    })
    return options;
  }

  /**
   * 处理需要转换的参数
   * @param key
   * @param props
   * @returns
   */
  const getSetterValue = (key: string, props: ToolBarProps) => {
    if (key in converterMap) {
      return converterMap[key](props[key])
    }
    return props[key];
  }

  return null;
}

export default React.forwardRef(ToolBar);
