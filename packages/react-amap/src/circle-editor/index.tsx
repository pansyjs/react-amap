import React from 'react';
import { withPropsReactive } from '../utils';
import { CircleEditorProps } from './types';
import { InternalCircleEditor } from './circle-editor';

export const CircleEditorReactive = withPropsReactive<AMap.ToolBar, CircleEditorProps>(InternalCircleEditor);

export const CircleEditor: React.FC<CircleEditorProps> = (props) => {
  return (
    <CircleEditorReactive {...props} />
  )
};

export * from './types';
