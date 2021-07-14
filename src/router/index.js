import { createRouter, createWebHistory } from 'vue-router'
const Welcome = () => import('@/views/welcome/Welcome.vue')
const Home = () => import('@/views/home/Home.vue')
const Project = () => import('@/views/project/Project.vue')
const Resume = () => import('@/views/resume/Resume.vue')
const SelfStudy = () => import('@/views/selfStudy/SelfStudy.vue')
const Music = () => import('@/views/music/Music.vue')
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
    path: '/project',
    name: 'Project',
    component: Project
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/selfstudy',
    name: 'SelfStudy',
    component: SelfStudy
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
