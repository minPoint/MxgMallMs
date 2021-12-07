import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Index',
    component:  () => import(/* webpackChunkName: "about" */ '../views/Index.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component:  () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children:[
      {
        path:"/dashboard",
        component: ()=> import('../views/home/DashBoard'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
