import React from 'react';
import { withPropsReactive } from '../utils';
import { RectangleEditorProps } from './types';
import { InternalRectangleEditor } from './rectangle-editor';

// @ts-ignore
export const Reactive = withPropsReactive<AMap.RectangleEditor, RectangleEditorProps>(InternalRectangleEditor);

export const RectangleEditor: React.FC<RectangleEditorProps> = (props) => {
  return (
    <Reactive {...props} />
  )
};

export * from './types';
