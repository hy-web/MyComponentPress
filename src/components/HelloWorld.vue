<!--
 * @Author: 创建者
 * @Date: 2023-05-14 16:27:40
 * @LastEditors: HY
 * @LastEditTime: 2023-05-29 00:11:29
 * @FilePath: \vite-vue3-TS-demo4.0\src\components\HelloWorld.vue
 * @Description: 请描述此文件的作用
-->
<template>
  <h1 class="color">{{ msg }}</h1>
  <el-button @click="open">按钮</el-button>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
const open = () => {
  ElMessage('this is a message.')
}
defineProps<{ msg: string }>()
console.log(ref)

const red = 'red'
</script>

<style lang="scss" scoped>
.color {
  color: v-bind(red);
}
</style>
