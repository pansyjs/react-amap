import React, { useRef, useState, useEffect, useImperativeHandle } from 'react';
import { APILoader } from '../utils';
import { usePropsReactive } from '../hooks';
import {
  allProps,
  setterMap,
  converterMap,
  wrapperStyle,
  containerStyle,
  StatusDynamicProps
} from './config';
import { MapContext } from './context';
import type { MapProps } from './types';

export const Map = React.forwardRef<AMap.Map, React.PropsWithChildren<MapProps>>((props = {}, ref) => {
  const [apiLoading, serApiLoading] = useState<boolean>(false);
  const mapWrapper = useRef<HTMLDivElement>();
  const instanceObj = useRef<AMap.Map>();
  const [mapInternal, setMapInternal] = useState<AMap.Map>(null);

  const { loaded, prevProps, onInstanceCreated } = usePropsReactive<AMap.Map, MapProps>(
    props,
    instanceObj,
    {
      setterMap,
      converterMap
    }
  );

  useEffect(
    () => {
      new APILoader({
        key: props.mapKey,
        useAMapUI: props.useAMapUI,
        version: props.version,
        protocol: props.protocol,
        hostAndPath: props.hostAndPath
      })
      .load()
      .then(() => {
        serApiLoading(true);
        if (props.isRender === false) return;
        createInstance().then(() => {
          setMapInternal(instanceObj.current);
          onInstanceCreated?.(instanceObj.current)
        });
      })
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

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [instanceObj.current]
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

  const getSetterValue = (key: string, props: MapProps) => {
    if (key in converterMap) {
      return converterMap[key](props[key])
    }
    return props[key];
  }

  const updateMapProps = (prevProps: MapProps, nextProps: MapProps) => {
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

  const detectPropChanged = (key: string, prevProps: MapProps, nextProps: MapProps) => {
    return prevProps[key] !== nextProps[key]
  }

  if (props.isRender === false) {
    return (
      <>
        { apiLoading ? props.children : null }
      </>
    )
  }

  return (
    <MapContext.Provider value={{ map: mapInternal }}>
      <div style={wrapperStyle}>
        <div ref={mapWrapper} style={containerStyle}>
          {loaded ? null : props.loading}
        </div>
        <div>
          { loaded ? props.children : null }
        </div>
      </div>
    </MapContext.Provider>
  )
});
