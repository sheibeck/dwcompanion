import { createRouter, createWebHistory } from 'vue-router'
import * as Auth from 'aws-amplify/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('../views/CharacterListView.vue')
    },
    {
      path: '/character/:id/:profession?',
      name: 'character',
      component: () => import('../views/CharacterDetailView.vue')
    },
    {
      path: '/fronts',
      name: 'fronts',
      component: () => import('../views/FrontsView.vue')
    },
    {
      path: '/front/:id',
      name: 'front',
      component: () => import('../views/FrontDetailView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
