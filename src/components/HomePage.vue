<script setup>
import { ref } from 'vue'
import {useRouter, useRoute} from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>

<template>
  <div class="wrapper">
  <div class="schoolimage">
    <img class="school" src="/school.svg" alt="school"/>
  </div>
  <div class="history">
    <h1>History</h1>
  <p>
    Founded: ----------------
    Founders: -----------------
    Mission: -----------------
  </p>
  </div>
  <div class="contact">
    <h2>
      Contact Information
    </h2>
  <p>
    Address: ----------------
    Phone: ----------------
    Fax: ------------------
    Email: ------------------
  </p>
  </div>
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  
        @apply flex flex-col container mx-auto py-5 gap-4;
    .schoolimage {
        @apply rounded-md bg-blue-200 p-2;
    }
        .history {
        @apply rounded-md bg-blue-200 p-2 text-slate-900 text-center italic font-semibold;
    }
    .contact {
        @apply rounded-md bg-blue-200 p-2 text-slate-900 text-center italic font-semibold;
    }
}
</style>