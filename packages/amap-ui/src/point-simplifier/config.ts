export const setterMap = {
  visible(val: boolean, instance: AMap.AMapUI.PointSimplifier) {
    if (instance) {
      if (val) {
        instance.show()
      } else {
        instance.hide()
      }
    }
  },
};

export const converterMap = {};

export const configurableProps = [
  'data',

  // 扩展属性
  'visible'
];

export const allProps = configurableProps.concat([
  'zIndex',
  'getPosition',
  'getHoverTitle',
  'compareDataItem',
  'autoSetFitView',
  'renderConstructor',
  'renderOptions',
  'maxChildrenOfQuadNode',
  'maxDepthOfQuadTree',
  'badBoundsAspectRatio',
]);
