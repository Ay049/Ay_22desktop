import { createRouter, createWebHistory } from 'vue-router'
const Welcome = () => import('@/views/welcome/Welcome.vue')
const Home = () => import('@/views/home/Home.vue')
const Resume = () => import('@/views/resume/Resume.vue')
const routes = [
  {
    path: '',
    // redirect: '/welcome'
    redirect: '/home'
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
