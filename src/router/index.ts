import { createRouter, createWebHistory } from 'vue-router'

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
      path: '/steadings',
      name: 'steadings',
      component: () => import('../views/SteadingsView.vue')
    },
    {
      path: '/steading/:id',
      name: 'steading',
      component: () => import('../views/SteadingDetailView.vue')
    },
    {
      path: '/maps',
      name: 'maps',
      component: () => import('../views/MapsView.vue')
    },
    {
      path: '/map/:id',
      name: 'map',
      component: () => import('../views/MapDetailView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
