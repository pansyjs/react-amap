import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { usePropsReactive } from '../hooks';
import type { PolylineEditorProps } from './types';
import { setterMap, converterMap } from './config';

export const PolylineEditor = React.forwardRef<AMap.PolylineEditor, PolylineEditorProps>((props = {}, ref) => {
  const instanceObj = useRef<AMap.PolylineEditor>(null);

  const { onInstanceCreated } = usePropsReactive<AMap.PolylineEditor, PolylineEditorProps>(
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
      props.map.plugin(['AMap.PolylineEditor'], () => {
        instanceObj.current = new AMap.PolylineEditor(props.map, props.poly);
        resolve();
      });
    });
  }

  return null;
});
