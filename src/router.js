import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: () => import('@/views/LoginPage.vue') },
  { path: '/student', name: 'Student', component: () => import('@/views/StudentPage.vue') },
  { path: '/department', name: 'Department', component: () => import('@/views/DepartmentPage.vue') },
  { path: '/faculty', name: 'Faculty', component: () => import('@/views/FacultyPage.vue') },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
