import {
  createRouter,
  // createWebHashHistory,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'

import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'
// import Axios from '@/views/axios.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue') // 懒加载组件
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
