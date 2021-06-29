import { createRouter, createWebHistory } from 'vue-router'

// Pages
import IndexPage from '../pages/IndexPage.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
  },
  {
    path: '/login',
    component: () => import('../pages/LoginPage.vue'),
  },
  {
    path: '/:categorySlug/:productSlug',
    component: () => import('../pages/ProductPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
