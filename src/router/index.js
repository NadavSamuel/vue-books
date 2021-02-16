import Vue from 'vue'
import VueRouter from 'vue-router'
import BookApp from '../views/BookApp.vue'
import BookDetails from '../views/BookDetails.vue'
import Categories from '../views/Categories.vue'
import AddBook from '../views/AddBook.vue'
import About from '../views/About.vue'
import UserProfile from '../views/UserProfile.vue'
import Category from '../views/Category.vue'
import NewEditBook from '../cmps/NewEditBook.vue'
import GoogleBookSearch from '../cmps/GoogleBookSearch.vue'
import Login from '../cmps/Login.vue'
import Signup from '../cmps/Signup.vue'
import UserPage from '../cmps/UserPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BookApp',
    component: BookApp,
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/category/:currCategory',
    name: 'Category',
    component: Category
  },
  {
    path: '/book/:bookId',
    name: 'BookDetails',
    component: BookDetails
  },
  {
    path: '/addBook',
    name: 'AddBook',
    component: AddBook,
    children:[
      {
        path:'',
        component:NewEditBook

      },
      {
        path:'google-books',
        component:GoogleBookSearch
      }

    ]
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: UserProfile,
    children:[
      {
        path:'login',
        component:Login
      },
      {
        path:'signup',
        component:Signup
      },
      {
        path:'user-page',
        component:UserPage
      }
      
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
