import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import type { PolygonEditorProps } from './types';
import { setterMap, converterMap } from './config';

export const PolygonEditor = React.forwardRef<AMap.PolygonEditor, PolygonEditorProps>((props = {}, ref) => {
  const { map, AMap } = useMap();
  const instanceObj = useRef<AMap.PolygonEditor>(null);

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
        createInstance()
          .then(() => {
            onInstanceCreated?.(instanceObj.current)
          })
      }
    },
    [map, props.poly]
  );

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [instanceObj.current]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      AMap.plugin(['AMap.PolygonEditor'], () => {
        instanceObj.current = new AMap.PolygonEditor(map, props.poly);
        resolve();
      });
    });
  }

  return null;
});
