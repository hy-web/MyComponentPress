/* 
 * @Author: 创建者
 * @Date: 2023-05-14 16:27:40
 * @LastEditors: HY
 * @LastEditTime: 2023-05-15 13:51:57
 * @FilePath: \vite-vue3-TS-demo4.0\.eslintrc.cjs
 * @Description: eslint配置文件
 * @Other-1: 部分配置来源(1)：Typescript-eslint(文档地址：https://typescript-eslint.io/)
 * @Other-2: 部分配置来源(2)：eslint-plugin-vue(文档地址：https://eslint.vuejs.org/)
 * @Other-3: 部分配置来源(3): @vue/eslint-config-prettier(文档地址：https://www.npmjs.com/package/@vue/eslint-config-prettier)
 * @Other-4: 部分配置来源(4): unplugin-auto-import(文档地址：https://www.npmjs.com/package/unplugin-auto-import)
*/
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  // 用于指示此文件是项目使用的根级别文件，ESLint 不应在此目录之外搜索配置文件
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  // 告诉 ESLint 您的配置扩展了给定的配置
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
    // ESLint 的内置“推荐”配置
    'eslint:recommended',
    // typescript-eslint推荐配置
    'plugin:@typescript-eslint/recommended',
    // 解决vue项目中eslint和prettier的配置冲突
    "@vue/eslint-config-prettier",
    // 忽略自动导入中的检查
    './.eslintrc-auto-import.json'
  ],
  // typescript-eslint官方在此处的配置是@typescript-eslint/parser,这将会导致error Parsing error: '>' expected错误，更改为vue-eslint-parser即可
  // 详细信息来自于：https://eslint.vuejs.org/user-guide/#faq
  parser: 'vue-eslint-parser',
  // 告诉 ESLint 将 @typescript-eslint/eslint-plugin 包作为插件加载
  plugins: ['@typescript-eslint','vue'],
  overrides: [
  ],
  parserOptions: {
    // 指定正在使用的 ECMAScript 版本
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.vue'], // 此配置来源于：https://typescript-eslint.io/architecture/parser/#extrafileextensions
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json' // 指定 TypeScript 配置文件位置
  },
  // 需要忽略检查的文件
  ignorePatterns: ["vite-env.d.ts"],
  rules: {
    "semi": "warn",
    "spaced-comment": "warn",
    "@typescript-eslint/no-explicit-any": ["off"]
  }
}
