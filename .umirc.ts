import { join } from 'path';

const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/amap-logo.svg';

export default {
  title: 'React AMap',
  logo,
  favicon: logo,
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
      'packages/amap/docs'
    ]
  },
  hash: true,
  dynamicImport: {}
};
