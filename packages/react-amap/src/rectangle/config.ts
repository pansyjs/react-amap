export const configurableProps = [
  /** 动态属性 */
  'bounds',
  'draggable',
  'extData',

  /* 扩展属性 */
  'visible',
  'style'
]

export const allProps = configurableProps.concat([
  'zIndex',
  'bubble',
  'cursor'
])
