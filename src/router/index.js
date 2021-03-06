import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/birth',
    name: '1 destin 2 vie',
    component: () => import('../views/Birth.vue')
  },
  {
    path: '/game/:life',
    name: 'game',
    component: () => import('../views/Game.vue')
  },
  {
    path: '/end/:end',
    name: 'game',
    component: () => import('../views/End.vue')
  },
  {
    path: '/success',
    name: 'Achievement',
    component: () => import('../views/Success.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
