import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import MenuPage from '@/pages/MenuPage.vue'
<<<<<<< HEAD
import PanierPage from '@/pages/PanierPage.vue'

=======
import PanierPage from '@/pages/PanierPage.vue' 
import AdminPage from '@/pages/AdminPage.vue';
>>>>>>> 8ad71a9071dc946a9774e888dd93fc3fe71cd0c6

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
<<<<<<< HEAD
      path: '/panier',
      name: 'panier',
      component: PanierPage,
=======
      path: '/panier', 
      name: 'panier',
      component: PanierPage, 
>>>>>>> 8ad71a9071dc946a9774e888dd93fc3fe71cd0c6
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutView.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPage,
    },
  ],
})

export default router
