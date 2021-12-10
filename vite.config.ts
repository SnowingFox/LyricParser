import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve } = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/LyricParser/',
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
})
