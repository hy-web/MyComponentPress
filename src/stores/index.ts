/*
 * @Author: 创建者
 * @Date: 2022-08-22 08:26:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-03-08 09:22:29
 * @FilePath: \vue3_plug\src\store\index.ts
 * @Description: ''
 */
import { defineStore } from 'pinia'

// 定义容器(第一个参数是容器的id,必须唯一,将来Pinia会把所有的容器挂在到根容器)
export const userMainStore = defineStore('mainStore', {
  // 存储全局状态
  state: () => {
    return {
      // 获取会话存储的登录状态信息,若不存在则为false
      isLogin: false,
      // token
      token: '' as any,
      // 登录账号选项(输入建议)
      accounts: [] as any[],
      // 用户信息
      userInfo: {} as any,
      // 用户权限
      permissions: [] as string[],
      // 左侧菜单的展开状态以及头部是否展开菜单的图标状态
      isCollapse: false,
      // 记录路由最后选中项,重新打开网页时跳转到此处
      defaultActive: '',
      // 菜单路径面包屑
      menuBreadcrumb: [] as any[],
      // 菜单面包屑的显示状态
      showBreadcrumb: true,
      // 标签页数组
      tabsList: [] as any[],
      // 字典数据集合(只要某个页面加载了字典数据，其他页面使用相同字典时，先从这里获取，不存在时再发送请求)
      dictData: {} as any,
      // 布局模式(电脑端：desktop,手机端：mobile,平板端：tablet)
      layout: 'desktop',
      // 菜单tabs页下的容器宽度
      tabsWidth: 0,
      // 菜单tabs页下的容器高度
      tabsHeight: 0,
      // 全屏加载层
      Loading: false,
      // main容器加载层
      mainLoading: false,
      // 主题配置：
      theme: {
        // 默认主题颜色
        color: '#409EFF',
        // 默认顶栏颜色设置
        header: 'primaryColor',
        // 默认侧边栏颜色设置
        aside: 'adaptiveColor'
      }
    }
  },
  // 封装计算属性,允许缓存
  getters: {},
  // 封装业务逻辑,修改state
  actions: {}
  // 持久化存储配置
  // persist: {
  //   // 开启持久化存储
  //   enabled: true,
  //   // Strategies配置(key：自定义key命名; storage：存储方式; paths：存储的state名称)
  //   strategies: [
  //     {
  //       key: 'userInfo',
  //       storage: sessionStorage,
  //       paths: ['userInfo']
  //     },
  //     {
  //       key: 'permissions',
  //       storage: sessionStorage,
  //       paths: ['permissions']
  //     },
  //     {
  //       storage: localStorage,
  //       paths: ['accounts', 'theme', 'defaultActive', 'tabsList']
  //     },
  //     {
  //       storage: sessionStorage,
  //       paths: ['isLogin', 'isCollapse', 'menuBreadcrumb', 'showBreadcrumb', 'layout', 'tabsWidth', 'tabsHeight']
  //     }
  //   ]
  // }
})
