import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dotcode',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: ()=> import('../views/contactView.vue')
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: ()=> import('../views/ThanksView.vue')
    },
    {
      path: '/hello-world',
      name: "hello world",
      component: () => import('../views/helloWorldView.vue')
    }
  ]
})
export default router
