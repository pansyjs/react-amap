import { defineConfig } from 'dumi'
import { join } from 'path';

const logo = 'https://cdn.jsdelivr.net/gh/wangxingkang/pictures@latest/imgs/amap-logo.svg';

export default defineConfig({
  favicons: [
    logo,
  ],
  themeConfig: {
    logo,
    name: 'AMap',
    socialLinks: {
      github: 'https://github.com/pansyjs/react-amap',
    },
    nav: [
      { title: '文档', link: '/docs' },
      { title: '组件', link: '/components' },
      { title: '示例', link: '/examples' },
    ],
  },
  alias: {
    '@pansy/react-amap': join(__dirname, 'packages/amap/src'),
    '@pansy/react-amap-ui': join(__dirname, 'packages/amap-ui/src'),
    '@pansy/react-amap-core': join(__dirname, 'packages/core/src'),
    '@pansy/amap-api-loader': join(__dirname, 'packages/api-loader/src'),
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [
      { type: 'component', dir: 'packages/amap/src' },
      { type: 'component', dir: 'packages/amap-ui/src' }
    ],
    codeBlockMode: 'passive',
  },
  hash: true,
});
