export const configurableProps = [
  /** 动态属性 */
  'offset',
  'ruler',
  'locate',
  'direction',

  /* 扩展属性 */
  'visible'
]

export const allProps = configurableProps.concat([
  'position',
  'liteStyle',
  'noIpLocate',
  'autoPosition',
  'useNative',
  'locationMarker',
]);
