import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { visualizer } from 'rollup-plugin-visualizer'
import { createHtmlPlugin } from 'vite-plugin-html'

const analyze = process.env.ANALYZE;
const isProd = process.env.NODE_ENV === 'production';


// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    analyze && visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      open: true,
    }),
    tsconfigPaths(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Vite React Starter'
        }
      }
    }),
  ]
})
