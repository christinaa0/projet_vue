import { createRouter, createWebHistory } from 'vue-router'

// Pages
import HomeView from '../pages/HomeView.vue'
import MenuPage from '@/pages/MenuPage.vue'
import PanierPage from '@/pages/PanierPage.vue'
import AdminPage from '@/pages/AdminPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuPage,
    },
    {
      path: '/panier',
      name: 'panier',
      component: PanierPage,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutView.vue'), // lazy loading
    },
  ],
})

export default router
