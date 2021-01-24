import { createRouter, createWebHistory } from 'vue-router'
import create from '../views/create.vue'
import contacts from '../views/contacts.vue'
import contactInfo from '../views/contactInfo.vue'

const routes = [
  {
    path: '/',
    name: 'create',
    component: create
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: contacts 
  },
  {
    path: '/contacts/:contactId',
    name: 'contact',
    component: contactInfo,
    props: true 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
