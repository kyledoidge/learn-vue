import VueRouter from 'vue-router'
import Home from '../views/Home'
import Contact from '../views/contact'

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

const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
