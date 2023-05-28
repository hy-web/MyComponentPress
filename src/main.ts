/*
 * @Author: 创建者
 * @Date: 2023-05-14 16:27:40
 * @LastEditors: HY
 * @LastEditTime: 2023-05-29 00:23:51
 * @FilePath: \vite-vue3-TS-demo4.0\src\main.ts
 * @Description: 请描述此文件的作用
 */
import { createApp } from 'vue'
import App from './App.vue'

/* 自定义全局 */
// 全局animate动画库
// import 'animate.css'
// 全局自定义公共样式
import '@/assets/styles/index.scss'
// 全局初始化公共样式
import '@/assets/styles/normalize.css'
// element弹窗样式（由于自动导入组件的关系，提示组件的样式只能手动导入）
import 'element-plus/es/components/message/style/css'
import 'element-plus/theme-chalk/el-message-box.css'

const app = createApp(App)

// 合并全局变量、全局方法、静态字典和一些插件
// const utils = Object.assign(vars, methods, { dict })

// // 将全局变量和方法放入globalProperties这个API中,供全局调用
// Object.entries(utils).forEach(([key, value]) => {
//   app.config.globalProperties[key] = value
// })

app.mount('#app')
