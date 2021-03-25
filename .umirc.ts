import { join } from 'path';

export default {
  title: 'React AMap',
  mode: 'site',
  alias: { 
    '@pansy/react-amap': join(__dirname, 'packages/react-amap/src'),
  },
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/pansyjs/react-amap',
    },
  ],
  resolve: { 
    includes: [
      'docs', 
      'packages/react-amap/docs'
    ] 
  },
  hash: true,
  dynamicImport: {}
};
