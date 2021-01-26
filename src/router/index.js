import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/auth/Register.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/user/:id',
    component: () => import('../views/User.vue'),
    children: [
      {
        path: '', 
        name: 'User',
        component: () => import('../components/user/Info.vue'),
      },
      {
        path: 'change-password',
        name: 'ChangePassword',
        component: () => import('../components/user/ChangePassword.vue'),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
