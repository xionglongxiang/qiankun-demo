import { loadMicroApp, type MicroApp } from 'qiankun' // Import MicroApp type
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import HomeView from '../views/HomeView.vue'

interface IMicroConf {
  name: string
  entry: string
  container: string
  activeRule: string
}

export const MICRO_CONF: IMicroConf[] = [
  {
    name: 'react16',
    entry: '//localhost:7100',
    container: '#subapp-viewport',
    activeRule: '/react16'
  },
  {
    name: 'react15',
    entry: '//localhost:7102',
    container: '#subapp-viewport',
    activeRule: '/react15'
  },
  {
    name: 'vue2',
    entry: '//localhost:7101',
    container: '#subapp-viewport',
    activeRule: '/vue2'
  },
  {
    name: 'purehtml',
    entry: '//localhost:7104',
    container: '#subapp-viewport',
    activeRule: '/purehtml'
  },
  {
    name: 'vue3',
    entry: '//localhost:7105',
    container: '#subapp-viewport',
    activeRule: '/vue3'
  }
]

// Use the MicroApp type to specify the type of microList
const microList = new Map<string, MicroApp>()

let current: IMicroConf | undefined // Specify that current can be undefined

const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch*',
    meta: {
      keepAlive: true
    },
    name: 'home',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  console.log('beforeEach')

  const conf = MICRO_CONF.find((item) => {
    console.log('search: ', to.path, item.activeRule)

    return to.path.indexOf(item.activeRule) !== -1
  })

  // 应用跳转
  if (conf) {
    console.log(current && current.activeRule)
    console.log(conf.activeRule)

    // 未切换子应用
    if (current && current.activeRule === conf.activeRule) {
      console.log('未切换子应用！')

      next()
      return
    }

    const cacheMicro = microList.get(conf.activeRule)

    // 已缓存应用
    if (cacheMicro) {
      console.log('使用子应用缓存！')
      next()
      return
    }

    console.log('设置子应用缓存！')
    // 未缓存应用
    const micro = loadMicroApp({ ...conf, router })

    microList.set(conf.activeRule, micro)
    current = conf
    next()
  }

  // 主应用内跳转
  next()
})

export default router
