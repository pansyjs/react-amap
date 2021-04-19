import React, { useRef, useEffect, useImperativeHandle } from 'react';
import { usePropsReactive } from '../hooks';
import { setterMap, converterMap } from './config';
import type { BezierCurveEditorProps } from './types';

export const BezierCurveEditor = React.forwardRef<AMap.BezierCurveEditor, BezierCurveEditorProps>((props = {}, ref) => {
  const instanceObj = useRef<AMap.BezierCurveEditor>(null);

  const { onInstanceCreated } = usePropsReactive<AMap.BezierCurveEditor, BezierCurveEditorProps>(
    props,
    instanceObj,
    {
      setterMap,
      converterMap
    }
  );

  useEffect(
    () => {
      if (props.map && props.bezierCurve) {
        createInstance()
          .then(() => {
            onInstanceCreated?.(instanceObj.current)
          })
      }
    },
    [props.map, props.bezierCurve]
  );

  useImperativeHandle(
    ref,
    () => instanceObj.current,
    [instanceObj.current]
  );

  const createInstance = () => {
    return new Promise<void>((resolve) => {
      props.map.plugin(['AMap.BezierCurveEditor'], () => {
        instanceObj.current = new AMap.BezierCurveEditor(props.map, props.bezierCurve);
        resolve();
      });
    });
  }

  return null;
});
