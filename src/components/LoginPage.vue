<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuth } from '../composables/useAuth'

const { login, logout } = useAuth()
const router = useRouter()

const username = ref('')
const password = ref('')

const logUserIn = () => {
  if (login(username.value, password.value)) {
    router.push({name: 'Home'})
  } else {
    logout()
  }
}
</script>

<template>
  <form class="loginForm" @submit.prevent="logUserIn">
  <input v-model="username" type="text" placeholder="Username"/>
  <input v-model="password" type="password" placeholder="Password"/>
  <button type="submit" class="bg-green-500 px-4 py-2">Click to Login</button>
  </form>
</template>

<style scoped lang="postcss">
.loginForm {
  @apply flex max-w-lg mx-auto flex-col mt-80 gap-4 bg-white p-8 rounded-md shadow-lg;
  &input {
    @apply text-xl pg-4 py-2 ring-1 rounded-md ring-slate-500;
  }
}
</style>