import { toLnglat } from '../utils';

export const configurableProps = [
  /** 动态属性 */
  'clickable',
  'position',
  'zIndex',
  'draggable',
  'cursor',
  'title',
  'extData',

  /* 扩展属性 */
  'visible'
];

export const allProps = configurableProps.concat([
  'styles',
  'zoomStyleMapping',
  'topWhenClick',
  'bubble'
]);

export const setterMap = {
  visible(val: boolean, instance: AMap.ElasticMarker) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  }
}

export const converterMap = {
  position: toLnglat
}
