import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView";
import AdminComponent from "@/views/AdminComponent";
import BookSiteView from "@/views/BookSiteView";
import UserBooks from "@/views/UserBooks";
import HomeView from "@/views/HomeView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      auth: false
    }
  },
  {
    path: '/login',
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
      auth: false
    }
  },
  {
    path: '/books/user',
    name: 'userbooks',
    component: UserBooks,
    meta: {
      auth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: "/"
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
