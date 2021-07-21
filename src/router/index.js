// import { createRouter, createWebHistory } from 'vue-router' // 开发用这个
import { createRouter, createWebHashHistory } from 'vue-router' // 打包用这个
const Welcome = () => import('@/views/welcome/Welcome.vue')
const Home = () => import('@/views/home/Home.vue')
const Resume = () => import('@/views/resume/Resume.vue')
// 手机模拟器
const sHome = () => import('@/components/common/shoppingmall/childComps/sViews/sHome/sHome.vue')
const sCategory = () => import('@/components/common/shoppingmall/childComps/sViews/sCategory/sCategory.vue')
const sCart = () => import('@/components/common/shoppingmall/childComps/sViews/sCart/sCart.vue')
const sProfile = () => import('@/components/common/shoppingmall/childComps/sViews/sProfile/sProfile.vue')
const sDetail = () => import('@/components/common/shoppingmall/childComps/sViews/sDetail/sDetail.vue')
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
    component: Home,
    children: [
      // 手机模拟器
      {
        path: '/home/shome',
        component: sHome
      },
      {
        path: '/home/scategory',
        component: sCategory
      },
      {
        path: '/home/scart',
        component: sCart
      },
      {
        path: '/home/sprofile',
        component: sProfile
      },
      {
        path: '/home/sdetail/:iid',
        component: sDetail
      }
    ]
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL), // 部署时需要注释
  history: createWebHashHistory(process.env.BASE_URL), // 打包用这个
  routes
})

export default router
