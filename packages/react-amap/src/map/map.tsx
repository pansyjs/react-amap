import React, { useRef, useEffect } from 'react';
import { usePropsReactive } from '../hooks';
import {
  allProps,
  setterMap,
  converterMap,
  wrapperStyle,
  containerStyle,
  StatusDynamicProps
} from './config';
import type { BaseMapProps } from './types';

export const BaseMap: React.FC<BaseMapProps> = (props = {}) => {
  const mapWrapper = useRef<HTMLDivElement>();
  const instanceObj = useRef<AMap.Map>();

  const { loaded, prevProps, onInstanceCreated } = usePropsReactive<AMap.Map, BaseMapProps>(
    props,
    instanceObj,
    {
      setterMap,
      converterMap
    }
  );

  useEffect(
    () => {
      createInstance().then(() => {
        props.onMapCreate?.(instanceObj.current);
        onInstanceCreated?.(instanceObj.current)
      });
    },
    []
  )

  useEffect(
    () => {
      if (loaded) {
        updateMapProps(prevProps, props)
      }
    },
    [props]
  );

  /** 创建地图实例 */
  const createInstance = () => {
    const options = buildCreateOptions()
    instanceObj.current = new window.AMap.Map(mapWrapper.current, options);
    return Promise.resolve();
  }

  /** 获取创建地图的参数 */
  const buildCreateOptions = () => {
    const options: AMap.Map.Options = {}
    allProps.forEach((key) => {
      if (key in props) {
        options[key] = getSetterValue(key, props)
      }
    })
    return options;
  }

  const getSetterValue = (key: string, props: BaseMapProps) => {
    if (key in converterMap) {
      return converterMap[key](props[key])
    }
    return props[key];
  }

  const updateMapProps = (prevProps: BaseMapProps, nextProps: BaseMapProps) => {
    const nextMapStatus = {};
    let statusChangeFlag = false;
    let statusPropExist = false;

    StatusDynamicProps.forEach((key) => {
      if (key in nextProps) {
        statusPropExist = true
        if (detectPropChanged(key, prevProps, nextProps)) {
          statusChangeFlag = true
          nextMapStatus[key] = nextProps[key]
        }
      }
    });

    statusChangeFlag && instanceObj.current.setStatus(nextMapStatus);
  }

  const detectPropChanged = (key: string, prevProps: BaseMapProps, nextProps: BaseMapProps) => {
    return prevProps[key] !== nextProps[key]
  }

  return (
    <div style={wrapperStyle}>
      <div ref={mapWrapper} style={containerStyle}>
        {loaded ? null : props.loading}
      </div>
      <div>
        { loaded ? props.children : null }
      </div>
    </div>
  )
};
