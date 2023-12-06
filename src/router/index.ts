import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import * as Auth from 'aws-amplify/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
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
  if (!router.getRoutes().find( r => r.name === to.name)) {
    router.push({name: "home"});
    return false;
  }

  if (to.name == "home") {
    return true;
  }

  const session = await Auth.fetchAuthSession();

  if (!session.userSub && to.name !== "login") {
    router.push({name: "login"});
    return false;
  }

  if (session.userSub && to.name === "login") {  
      router.push({name: "home" });
      return true;
  }
})

export default router
