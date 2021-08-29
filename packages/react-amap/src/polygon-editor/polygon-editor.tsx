import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { usePropsReactive } from '../hooks';
import type { PolygonEditorProps } from './types';
import { setterMap, converterMap } from './config';

export const PolygonEditor = React.forwardRef<AMap.PolygonEditor, PolygonEditorProps>((props = {}, ref) => {
  const instanceObj = useRef<AMap.PolygonEditor>(null);

  const { onInstanceCreated } = usePropsReactive<AMap.PolygonEditor, PolygonEditorProps>(
    props,
    instanceObj,
    {
      setterMap,
      converterMap
    }
  );

  useEffect(
    () => {
      if (props.map && props.poly) {
        createInstance()
          .then(() => {
            onInstanceCreated?.(instanceObj.current)
          })
      }
    },
    [props.map, props.poly]
  );

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [instanceObj.current]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      props.map.plugin(['AMap.PolygonEditor'], () => {
        instanceObj.current = new AMap.PolygonEditor(props.map, props.poly);
        resolve();
      });
    });
  }

  return null;
});
