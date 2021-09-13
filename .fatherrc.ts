export default {
  esm: {
    type: 'babel',
    importLibToEs: true
  },
  cjs: 'babel',
  pkgFilter: {
    exclude: [
      '@pansy/amap-types'
    ]
  },
};
