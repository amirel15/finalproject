<script setup>
import { ref } from 'vue'
const brand = ref("🦈 Carr EdUcateMe Academy")
</script>

<template>
  <nav>
    <div class="wrapper">
      <div class="brand">
        <span class="brand-title">{{ brand }}</span>
      </div>
      <div class="menu">
        <a href="#" class="menu-item">Home</a>
        <a href="#" class="menu-item">Departments</a>
        <a href="#" class="menu-item">Faculty</a>
        <a href="#" class="menu-item">Students</a>
        <a href="#" class="menu-login">Login</a>
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
