import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView";
import AdminComponent from "@/views/AdminComponent";
import BookSiteView from "@/views/BookSiteView";
import UserBooks from "@/views/UserBooks";

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
    path: '/books',
    name: 'books',
    component: BookSiteView,
    meta: {
      auth: true
    }
  },
  {
    path: '/books/user',
    name: 'userbooks',
    component: UserBooks,
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
