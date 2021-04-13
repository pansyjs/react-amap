import React from 'react';
import { withPropsReactive } from '../utils';
import { PolyEditorProps } from './types';
import { InternalPolyEditor } from './poly-editor';

// @ts-ignore
export const Reactive = withPropsReactive<AMap.PolyEditor, PolyEditorProps>(InternalPolyEditor);

export const PolyEditor: React.FC<PolyEditorProps> = (props) => {
  return (
    <Reactive {...props} />
  )
};

export { PolyEditorProps } from './types';
