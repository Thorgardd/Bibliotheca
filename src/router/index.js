import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView";
import AdminComponent from "@/views/AdminComponent";
import ReaderSpace from "@/views/ReaderSpace";

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    meta: {
      auth: false
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminComponent,
    meta : {
      auth: true
    }
  },
  {
    path: '/menu',
    name: 'menu',
    component: ReaderSpace,
    meta: {
      auth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
