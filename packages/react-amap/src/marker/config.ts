import { PropKey } from './types';

/** 动态属性 */
export const configurableProps: PropKey[] = [
  'anchor',
  'angle',
  'animation',
  'clickable',
  'content',
  'cursor',
  'draggable',
  'shape',
  'icon',
  'label',
  'offset',
  'position',
  'raiseOnDrag',
  'shadow',
  'title',
  'extData',

  // 自定义支持
  'zIndex',
  'visible',
];

export const allProps = configurableProps.concat([
  'topWhenClick',
  'bubble',
  'autoRotation',
]);
