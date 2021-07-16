import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Contact from '../views/Contact'

const routes = [
  {
    name: 'home',
    alias: '/home',
    path: '/',
    component: Home
  },
  {
    name: 'contact',
    path: '/contact',
    component: Contact
  }
]

const history = createWebHistory()
const router = createRouter({
  routes,
  history
})
export default router
