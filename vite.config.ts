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
// {
//   "compilerOptions": {
//   "moduleResolution": "node",
//     "target": "es5",
//     "module":"es2015",
//     "lib": ["es2015", "es2016", "es2017", "dom"],
//     "strict": true,
//     "sourceMap": true,
//     "declaration": true,
//     "allowSyntheticDefaultImports": true,
//     "experimentalDecorators": true,
//     "emitDecoratorMetadata": true,
//     "declarationDir": "dist/types",
//     "outDir": "dist/lib",
//     "typeRoots": [
//     "node_modules/@types"
//   ]
// },
//   "include": [
//   "example/**/*.ts",
//   "example/**/*.d.ts",
//   "example/**/*.tsx",
//   "example/**/*.vue",
//   "script/**/*.d.ts",
//   "script/**/*.ts"
// ]
// }
