import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import MenuLayout from '../layouts/MenuLayout.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: MenuLayout,
    children: [
      {
        path: "",
        component: HomeView
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MenuLayout,
    children:[
      {
        path: "",
        component: () => import(/* webpackChunkName: "about" */ '../views/about/AboutView.vue') 
      }
    ]
  },
  {
    path: '/about2',
    name: 'about2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DefaultLayout,
    children:[
      {
        path: "",
        component: () => import(/* webpackChunkName: "about" */ '../views/about/About2View.vue') 
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
