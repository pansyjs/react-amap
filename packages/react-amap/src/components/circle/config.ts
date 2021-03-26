export const configurableProps = [
  'center',
  'radius',
  'draggable',
  'extData',

  /* 原生的接口中并没有这些对象，这是本组件的扩展 */
  'visible',
  'style'
]

export const allProps = configurableProps.concat([
  'zIndex',
  'bubble'
])
