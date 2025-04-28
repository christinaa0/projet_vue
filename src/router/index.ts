import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import MenuPage from '@/pages/MenuPage.vue'
import PanierPage from '@/pages/PanierPage.vue' // Assurez-vous que le chemin est correct pour PanierPage
import AdminPage from '@/pages/AdminPage.vue';

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
      path: '/panier', // Nouvelle route pour la page panier
      name: 'panier',
      component: PanierPage, // Assurez-vous que le composant est correctement importé
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
