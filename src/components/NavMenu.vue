<script setup>
import { ref } from 'vue'
const brand = ref("🦈 Carr EdUcateMe Academy")
</script>

<template>
  <nav>
    <div class="wrapper">
      <RouterLink :to="{name:'Home'}" class="brand">
        <span class="brand-title">{{ brand }}</span>
      </RouterLink>
      <div class="menu">
        <RouterLink :to="{ name: 'Home' }" href="#" class="menu-item">Home</RouterLink>
        <RouterLink :to="{ name: 'Courses' }" href="#" class="menu-item">Courses</RouterLink>
        <RouterLink :to="{ name: 'Faculty' }" href="#" class="menu-item">Faculty</RouterLink>
        <RouterLink :to="{ name: 'Students' }" href="#" class="menu-item">Students</RouterLink>
        <RouterLink :to="{ name: 'Login' }" href="#" class="menu-login">Login</RouterLink>
      </div>
      
    </div>
  </nav>
</template>

<style scoped lang="postcss">
nav {
  @apply flex h-20 items-center justify-between bg-blue-900 text-gray-200;
    .wrapper {
      @apply container mx-auto flex w-full items-center justify-between;
      .brand {
        &-title {
          @apply text-2xl font-bold text-slate-200;
        }
      }
      .menu {
        @apply flex gap-5;
        &-item {
          @apply rounded-md px-3 py-1.5 hover:bg-slate-300 hover:text-blue-800;
        }
        &-login {
          @apply rounded-md bg-green-800 text-slate-200 px-3 py-1.5 hover:bg-green-400 hover:text-slate-800 hover:font-bold;
        }
      }
    }

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
