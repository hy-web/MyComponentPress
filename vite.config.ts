/*
 * @Author: 创建者
 * @Date: 2023-05-14 16:27:40
 * @LastEditors: HY
 * @LastEditTime: 2023-05-28 23:56:29
 * @FilePath: \vite-vue3-TS-demo4.0\vite.config.ts
 * @Description: 请描述此文件的作用
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// vite插件：自动触发eslint配置，让问题出现在终端中
import eslint from 'vite-plugin-eslint'
// vite插件：vue3等插件 hooks 自动引入
import AutoImport from 'unplugin-auto-import/vite'
// vite插件：自定义组件自动导入
import Components from 'unplugin-vue-components/vite'
// 自动按需导入ElementPlus相关组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint(),
    Components({
      resolvers: [
        ElementPlusResolver()
      ]
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'vue-router',
        {
          '@vueuse/core': ['useDark']
        }
      ],
      defaultExportByFilename: false,
      dirs: [],
      dts: './auto-imports.d.ts',
      cache: false,
      vueTemplate: false,
      resolvers: [
        ElementPlusResolver()
      ],
      injectAtEnd: true,
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src")
    }
  }
})
