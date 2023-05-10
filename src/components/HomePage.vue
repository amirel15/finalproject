<script setup>
import { ref } from 'vue'
import {useRouter, useRoute} from 'vue-router'

const router = useRouter()
const route = useRoute()
</script>

<template>
  <div class="wrapper">
    <div class="schoolimage">
      🏫
    </div>
    <div class="about">
      <h1><b>About Us</b></h1>
      Founded: 2020
      <br/>
      Founders: John Carr & Roman Deacon
    </div>
    <div class="background">
      <b>Background:</b><br/>
      About a deacade ago, Mr. Carr and Mr. Deacon, life long friends, saw how quickly and vast
      technology was advancing with the world and wanted to contribute to the change. For as long as they could remember, technology had always been
      a passion of theirs that it applied to every aspect of their professional lives. They both have at least
      one PhD in a field related to computers and technology. After going through all the vigorous work to get theirs idea off the ground, 
      they created an online institution that offers different types of computer and technology degrees. Mr. Carr and Mr. Deacon
      specifically chose to establish an online educational system because they know how had it can be for many people to sit in a classroom for main reasons.
      <br/><br/>
      Carr EdUcateMe Academy is proud to be one of the many online institutions a person can chose from to dip their toe in technology or utilitze to 
      help them began their life, professional or personal, in the amazing realm of technology.
    </div>
    <div class="contact">
      <h2><b>Contact Information</b></h2>
      <p>
      Address: 4316 Tech Future Blvd<br/>
      Phone: 555-555-5293<br/>
      Fax: 555-555-5792<br/>
      Email: carracademy@educatemeacademy.com
    </p>
  </div>
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  
    @apply flex flex-col container mx-auto py-1.5 gap-4;
    .schoolimage {
        @apply rounded-md bg-green-200 p-2 text-center text-9xl;
    }
    .about {
        @apply rounded-md bg-blue-200 p-2 text-slate-900 text-center italic font-semibold;
    }
    .background {
        @apply rounded-md bg-green-200 p-2 text-slate-900 text-center italic font-semibold;
    }
    .contact {
        @apply rounded-md bg-blue-200 p-2 text-slate-900 text-center italic font-semibold;
    }
}
</style>