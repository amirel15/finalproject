import { createRouter, createWebHistory } from 'vue-router'

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

export default createRouter({
  history: createWebHistory(),
  routes,
})
