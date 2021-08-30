export default {
  esm: {
    type: 'babel',
    importLibToEs: true
  },
  cjs: 'babel',
  pkgFilter: {
    include: [
      '@pansy/react-amap'
    ]
  },
};
