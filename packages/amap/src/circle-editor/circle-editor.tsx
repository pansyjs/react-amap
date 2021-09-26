import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { useMap } from '../map';
import { usePropsReactive } from '../utils';
import type { CircleEditorProps } from './types';
import { setterMap, converterMap } from './config';

export const CircleEditor = React.forwardRef<AMap.CircleEditor, CircleEditorProps>((props = {}, ref) => {
  const { circle } = props;
  const { map, AMap } = useMap();
  const instanceObj = useRef<AMap.CircleEditor>(null);

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
