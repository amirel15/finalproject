import { createRouter, createWebHistory } from 'vue-router'
import {useAuth} from '@/composables/useAuth'

import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import CoursesPage from './components/CoursesPage.vue'
import FacultyPage from './components/FacultyPage.vue'
import StudentPage from './components/StudentPage.vue'
import NotFound from './components/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/students', name: 'Students', component: StudentPage },
  { path: '/courses', name: 'Courses', component: CoursesPage },
  { path: '/faculty', name: 'Faculty', component: FacultyPage },
  {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
  else next()
})

export default router