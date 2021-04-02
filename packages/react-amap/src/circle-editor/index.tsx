import React from 'react';
import { withPropsReactive } from '../utils';
import { CircleEditorProps } from './types';
import { InternalCircleEditor } from './circle-editor';

// @ts-ignore
export const Reactive = withPropsReactive<AMap.CircleEditor, CircleEditorProps>(InternalCircleEditor);

export const CircleEditor: React.FC<CircleEditorProps> = (props) => {
  return (
    <Reactive {...props} />
  )
};

export * from './types';
