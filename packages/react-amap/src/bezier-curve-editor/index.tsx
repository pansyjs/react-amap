import React from 'react';
import { withPropsReactive } from '../utils';
import { BezierCurveEditorProps } from './types';
import { InternalBezierCurveEditor } from './bezier-curve-editor';

// @ts-ignore
export const Reactive = withPropsReactive<AMap.CircleEditor, CircleEditorProps>(InternalBezierCurveEditor);

export const BezierCurveEditor: React.FC<BezierCurveEditorProps> = (props) => {
  return (
    <Reactive {...props} />
  )
};

export { BezierCurveEditorProps } from './types';
