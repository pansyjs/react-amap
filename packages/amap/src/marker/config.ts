import { toLnglat, toPixel } from '../utils';
import type { PropKey } from './types';

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

export const setterMap = {
  visible(val: boolean, instance: AMap.Marker) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  },
  zIndex(val: number, instance: AMap.Marker) {
    if (instance) {
      instance.setzIndex(val);
    }
  }
}

export const converterMap = {
  position: toLnglat,
  offset: toPixel
}
