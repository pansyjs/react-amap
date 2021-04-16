import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { usePropsReactive } from '../hooks';
import { EllipseEditorProps, EllipseEditorType } from './types';
import { setterMap, converterMap } from './config';

const EllipseEditor: EllipseEditorType = (props = {}, ref) => {
  const instanceObj = useRef<AMap.EllipseEditor>(null);

  const { onInstanceCreated } = usePropsReactive<AMap.EllipseEditor, EllipseEditorProps>(
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
      props.map.plugin(['AMap.EllipseEditor'], () => {
        instanceObj.current = new AMap.EllipseEditor(props.map, props.ellipse);
        resolve();
      });
    });
  }

  return null;
}

export default React.forwardRef(EllipseEditor);
