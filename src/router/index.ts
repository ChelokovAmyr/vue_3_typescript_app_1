import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ListView from '@/views/ListView.vue'
import NoteView from '@/views/NoteView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ListView',
    component: ListView
  },
  {
    path: '/note',
    name: 'Create',
    component: NoteView
  },
  {
    path: '/note/:id',
    name: 'Edit',
    component: NoteView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
