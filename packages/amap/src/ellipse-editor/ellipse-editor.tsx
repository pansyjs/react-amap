import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { usePropsReactive } from '../utils';
import { useMap } from '../map';
import { EllipseEditorProps } from './types';
import { setterMap, converterMap } from './config';

export const EllipseEditor = React.forwardRef<AMap.EllipseEditor, EllipseEditorProps>((props = {}, ref) => {
  const { map, AMap } = useMap();
  const instanceObj = useRef<AMap.EllipseEditor>(null);

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
      if (props.map && props.ellipse) {
        createInstance()
          .then(() => {
            onInstanceCreated?.(instanceObj.current)
          })
      }
    },
    [props.map, props.ellipse]
  );

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [instanceObj.current]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      map.plugin(['AMap.EllipseEditor'], () => {
        instanceObj.current = new AMap.EllipseEditor(props.map, props.ellipse);
        resolve();
      });
    });
  }

  return null;
});
