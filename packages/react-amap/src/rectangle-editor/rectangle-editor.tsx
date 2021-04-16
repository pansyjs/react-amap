import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { usePropsReactive } from '../hooks';
import type { RectangleEditorProps, RectangleEditorType } from './types';
import { setterMap, converterMap } from './config';

const RectangleEditor: RectangleEditorType = (props = {}, ref) => {
  const instanceObj = useRef<AMap.RectangleEditor>(null);

  const { onInstanceCreated } = usePropsReactive<AMap.RectangleEditor, RectangleEditorProps>(
    props,
    instanceObj,
    {
      setterMap,
      converterMap
    }
  );

  useEffect(
    () => {
      if (props.map && props.rectangle) {
        createInstance()
          .then(() => {
            onInstanceCreated?.(instanceObj.current)
          })
      }
    },
    [props.map, props.rectangle]
  );

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [instanceObj.current]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      props.map.plugin(['AMap.RectangleEditor'], () => {
        instanceObj.current = new AMap.RectangleEditor(props.map, props.rectangle);
        resolve();
      });
    });
  }

  return null;
}

export default React.forwardRef(RectangleEditor);
