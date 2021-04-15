import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { usePropsReactive } from '../hooks';
import type { PolyEditorProps, PolyEditorType } from './types';
import { setterMap, converterMap } from './config';

const PolyEditor: PolyEditorType = (props = {}, ref) => {
  const instanceObj = useRef<AMap.PolyEditor>(null);

  // @ts-ignore
  const { onInstanceCreated } = usePropsReactive<AMap.PolyEditor, PolyEditorProps>(
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
      props.map.plugin(['AMap.PolyEditor'], () => {
        instanceObj.current = new AMap.PolyEditor(props.map, props.poly);
        resolve();
      });
    });
  }

  return null;
}

export default React.forwardRef(PolyEditor);
