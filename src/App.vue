<script setup>
import NavMenu from './components/NavMenu.vue'
import Motto from './components/Motto.vue'
</script>

<template>
  <main>
    <div class="sections">
      <NavMenu />
  <Motto />
  <RouterView />
  </div>
  </main>
</template>
