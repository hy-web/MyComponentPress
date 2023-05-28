/*
 * @Author: 创建者
 * @Date: 2023-02-15 13:45:38
 * @LastEditors: HY
 * @LastEditTime: 2023-05-29 00:30:13
 * @filePath: Do not edit
 * @Description: 请描述此文件的作用
 */
// import Qs from 'qs'
import axios from 'axios'
import { saveAs } from 'file-saver'
import { userMainStore } from '@/stores/index'
import { ElMessage } from 'element-plus'
const envCode = import.meta.env.VITE_CODE
// import methods from '@/assets/utils/method'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // 使用跨域代理
  baseURL: import.meta.env.VITE_BASE_URL,
  // 不使用跨域代理
  // baseURL: import.meta.env.VITE_BASE_SERVER_URL,
  // 超时
  timeout: 20000
})
// 设置默认的请求数据格式
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 携带cookies
axios.defaults.withCredentials = true
// 添加请求拦截器
service.interceptors.request.use(
  (config: any) => {
    // 判断token是否存在
    // const { token } = JSON.parse(localStorage.getItem('token') || '{}')
    // if (token)
    // let isQs = false
    // 在发送请求之前
    switch (config.method) {
      case 'get':
        if (!config.params) config.params = {}
        break
      case 'post':
        // for (const key in config.data) {
        //   // 如果传送数据内包含数组，可以使用此方法将转成JSON字符串的数组传给后台
        //   if (typeof config.data[key] === 'object') {
        //     config.data[key] = JSON.stringify(config.data[key])
        //     isQs = true
        //   }
        // }
        // if (isQs) config.data = Qs.stringify(config.data, { indices: true })
        break
      default:
        break
    }
    return config
  },
  error => {
    errors(error.message)
    // 对请求错误
    return Promise.reject(error)
  }
)

// 是否允许弹出提示框
// let open = true
// 添加响应拦截器
service.interceptors.response.use(
  response => {
    const { code, msg } = response.data
    if (code === '0' || code === envCode || code === undefined) {
      return response.data
    } else {
      errors(msg)
    }
  },
  error => {
    errors(error.message)
    // 响应错误
    return Promise.reject(error)
  }
)

function errors(errType: any) {
  const mainStore = userMainStore()
  ElMessage({ type: 'error', message: errType || `登录失败,请检查用户名或密码是否正确!` })
  mainStore.Loading = false
}

// 通用下载方法
export const download = async (url: string, params: any, filename: any) => {
  try {
    const data = (await service({
      url,
      method: 'get',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      responseType: 'blob',
      params
    })) as any
    const blob = new Blob([data])
    saveAs(blob, filename)
  } catch (e) {
    console.log(e)
  }
}

export default service
