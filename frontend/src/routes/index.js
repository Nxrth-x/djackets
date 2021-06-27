import { createRouter, createWebHistory } from 'vue-router'

// Pages
import IndexPage from '../pages/IndexPage.vue'
import ProductPage from '../pages/ProductPage.vue'

const routes = [
  {
    path: '/',
    component: IndexPage,
  },
  {
    path: '/:categorySlug/:productSlug',
    component: ProductPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
