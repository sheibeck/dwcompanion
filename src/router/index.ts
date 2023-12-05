import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import * as Auth from 'aws-amplify/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('../views/CharacterListView.vue')
    },
    {
      path: '/character/:id',
      name: 'character',
      component: () => import('../views/CharacterDetailView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach(async (to, from) => {
  const homeRoute = {name: "home"};

  if (!router.getRoutes().find( r => r.name === to.name)) {
    router.push(homeRoute);
    return false;
  }

  const session = await Auth.fetchAuthSession();

  if (to.name !== "home") {
    if (!session.userSub) {
      router.push(homeRoute);
      return false;
    }
  }

  if (to.name === "home") {
    if (session.userSub) {
      router.push({name: "characters" });
    }
  }
})

export default router
