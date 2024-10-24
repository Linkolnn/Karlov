import { createRouter, createWebHistory } from 'vue-router'
import Home from '@views/Home.vue'
import Quiz from '@views/Quiz.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/#about',
      name: 'about',
      component: Home
    },
    {
      path: '/quiz',
      name: 'quiz',
      component: Quiz
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  }
})

export default router
