<script setup>
import { ref } from 'vue'
import { useRouter, useRoute} from 'vue-router'

import { useAuth } from '../composables/useAuth'

const { login, logout } = useAuth()
const router = useRouter()
const route = useRoute()

const username = ref('')
const password = ref('')

const logUserIn = async () => {
  if (await login(username.value, password.value)) {
    if (route.query.redirect) {
      router.push(route.query.redirect)
    } else {
      router.push({ name: 'Home' })
    }
  } else {
    logout()
  }
}
</script>

<template>
  <form class="login-form" @submit.prevent="logUserIn">
  <input v-model="username" type="text" placeholder="Username"/>
  <input v-model="password" type="password" placeholder="Password"/>
  <button type="submit" class="bg-green-500 font-semibold px-4 py-2">LOGIN</button>
  </form>
</template>

<style scoped lang="postcss">
.login-form {
  @apply mx-auto mt-20 flex max-w-lg flex-col gap-4 rounded-md bg-blue-200 p-8 shadow-lg;
  & input {
    @apply rounded-md px-4 py-2 text-xl ring-1 ring-slate-500 text-center italic;
  }
  & button {
    @apply rounded-md
  }
}
</style>