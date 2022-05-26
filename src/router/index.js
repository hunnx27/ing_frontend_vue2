import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import ReviewView from '../views/review/ReviewView.vue'
import LoginView from '../views/login/LoginView.vue'
import MenuLayout from '../layouts/MenuLayout.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

// sample loginnpm 
import Main from '@/components/loginExample/MainItem'
import IndexPage from '@/components/loginExample/IndexItem'
import OauthRedirect from '@/components/loginExample/oauth/RedirectItem'

// test
import Test1View from '@/views/sample/Test1View.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MenuLayout,
    children: [
      {
        path: "",
        name: 'home',
        component: HomeView
      }
    ]
  },
  {
    path: '/review',
    component: MenuLayout,
    children: [
      {
        path: "",
        name: 'review',
        component: ReviewView
      }
    ]
  },
  {
    path: '/login',
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: 'login',
        component: LoginView
      }
    ]
  },
  {
    path: '/about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MenuLayout,
    children:[
      {
        path: "",
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/AboutView.vue') 
      }
    ]
  },
  {
    path: '/about2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DefaultLayout,
    children:[
      {
        path: "",
        name: 'about2',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/About2View.vue') 
      }
    ]
  },
  {
    path: '/loginSample',
    component: IndexPage,
    children: [
      {
        path: '',
        name: 'Main',
        component: Main
      },
      {
        path: '/oauth/redirect',
        name: 'OauthRedrect',
        component: OauthRedirect
      }
    ]
  },
  {
    path: '/test1',
    component: Test1View
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
