import Vue from 'vue'
import VueRouter from 'vue-router'
import BookApp from '../views/BookApp.vue'
import BookDetails from '../views/BookDetails.vue'
import AddBook from '../views/AddBook.vue'
import About from '../views/About.vue'
import UserProfile from '../views/UserProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BookApp',
    component: BookApp
  },
  {
    path: '/book/:bookId',
    name: 'BookDetails',
    component: BookDetails
  },
  {
    path: '/addBook',
    name: 'AddBook',
    component: AddBook
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: UserProfile
  }
]

const router = new VueRouter({
  routes
})

export default router
