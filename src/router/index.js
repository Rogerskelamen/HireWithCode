import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('@/views/Welcome.vue')
  },
  {
    path: '/intro',
    name: 'IntroPage',
    component: () => import('@/views/IntroPage.vue')
  },
  {
    path: '/accept',
    name: 'AcceptPage',
    component: () => import('@/views/AcceptPage.vue')
  },
  {
    path: '/finish',
    name: 'FinishPage',
    component: () => import('@/views/FinishPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// Global navigation guard
router.beforeEach((to, from, next) => {
  next()
})

export default router