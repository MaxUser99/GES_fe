import { defineConfig } from 'vite';
import path from 'path';
import envCompatible from 'vite-plugin-env-compatible';
import { injectHtml } from 'vite-plugin-html';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import viteTS from 'vite-plugin-ts';
import reactJsx from 'vite-react-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: ''
      },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ],
    extensions: [
      '.mjs',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.vue'
    ]
  },
  plugins: [
    viteCommonjs(),
    envCompatible(),
    injectHtml(),
    viteTS(),
    reactJsx()
  ],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  build: {}
})
