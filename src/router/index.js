import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/index' },
    // 主页
    {
      path: '/index',
      name: 'home',
      component: () => import(/* webpackChunkName: 'aboutAs' */ '@/views/home/index.vue')
    },
    // 分类
    {
      path: '/classify',
      name: 'classify',
      component: () => import('@/views/classify/index.vue')
    },
    // 购物车
     {
      path: '/shopcart',
      name: 'shopcart',
      component: () => import('@/views/shopcart/index.vue')
    }, 
    // 我的
    {
      path: '/user',
      name: 'user',
      component: () => import('@/views/user/user.vue')
    }, 
    // 登录
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/user/login.vue')
    },
    // 收货地址
    {
      path:'/address',
      name:'address',
      component: () => import('@/views/user/address.vue')
    }
  ]
})