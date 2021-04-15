import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { render } from 'react-dom';
import { useMap } from '../map';
import { usePropsReactive } from '../hooks';
import type { InfoWindowProps, InfoWindowType } from './types';
import { allProps, converterMap } from './config';

const InfoWindow: InfoWindowType = (props = {}, ref) => {
  const { map } = useMap();
  const infoDOM = useRef<HTMLDivElement>(null);
  const instanceObj = useRef<AMap.InfoWindow>(null);

  const setterMap = {
    visible(val) {
      if (val) {
        showWindow();
        setClassName();
        setChild();
      } else {
        closeWindow();
      }
    }
  }

  const { onInstanceCreated } = usePropsReactive<AMap.InfoWindow, InfoWindowProps>(
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
    instanceObj.current = new window.AMap.InfoWindow(options);
    return Promise.resolve();
  }

  const refreshWindowLayout = () => {
    setChild()
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
      infoDOM.current = document.createElement('div')
      options.content = infoDOM.current
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

  const setChild = () => {
    const child = props.children
    if (infoDOM.current && child) {
      render(<div>{child}</div>, infoDOM.current)
    }
  }

  const setClassName = () => {
    if (infoDOM.current) {
      let baseClsValue = ''
      // 刷新 className
      if ('className' in props && props.className) {
        baseClsValue += props.className
      } else if (props.isCustom === true) {
        baseClsValue += 'amap_markers_pop_window'
      }
      infoDOM.current.className = baseClsValue
    }
  }

  return null;
}

export default React.forwardRef(InfoWindow);
