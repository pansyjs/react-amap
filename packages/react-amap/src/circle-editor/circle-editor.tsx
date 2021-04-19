import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { usePropsReactive } from '../hooks';
import type { CircleEditorProps } from './types';
import { setterMap, converterMap } from './config';

export const CircleEditor = React.forwardRef<AMap.CircleEditor, CircleEditorProps>((props = {}, ref) => {
  const { map, circle } = props;
  const instanceObj = useRef<AMap.CircleEditor>(null);

  const { onInstanceCreated } = usePropsReactive<AMap.CircleEditor, CircleEditorProps>(
    props,
    instanceObj,
    {
      setterMap,
      converterMap
    }
  );

  useEffect(
    () => {
      if (props.map && props.circle) {
        createInstance()
          .then(() => {
            onInstanceCreated?.(instanceObj.current)
          })
      }
    },
    [props.map, props.circle]
  );

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [instanceObj.current]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      map.plugin(['AMap.CircleEditor'], () => {
        instanceObj.current = new AMap.CircleEditor(map, circle);
        resolve();
      });
    });
  }

  return null;
});
