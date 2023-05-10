<template>
  <div class="wrapper">
    <div class="faculty">
      <div class="faculty-title">
        Faculty
      </div>
      <br/>
      <div class="faculty-1">
        <div class="faculty-1-pic">
          👴🏼
        </div>
        <div class="faculty-1-name">
          Hector Avila
        </div>
        <div class="faculty-1-info">
          <b><i>Cybersecurity & Computer Forensics</i></b><br/>
          Phone: 854-758-4857<br/>
          Email: havila@educatemeacademy.com 
        </div>
      </div>
      <br/>
      <div class="faculty-2">
        <div class="faculty-2-pic">
          👨🏻
        </div>
        <div class="faculty-2-name">
          Roman Ayola
        </div>
        <div class="faculty-2-info">
          <b><i>Computer Science</i></b><br/>
          Phone: 854-758-5421<br/>
          Email: rayola@educatemeacademy.com 
        </div>
      </div>
      <br/>
      <div class="faculty-3">
        <div class="faculty-3-pic">
          🧔‍♂️
        </div>
        <div class="faculty-3-name">
          Nicholas Carr
        </div>
        <div class="faculty-3-info">
          <b><i>Web Development</i></b><br/>
          Phone: 854-758-2789<br/>
          Email: ncarr@educatemeacademy.com 
        </div>
      </div>
      <br/>
      <div class="faculty-4">
        <div class="faculty-4-pic">
          👨🏾‍🦳
        </div>
        <div class="faculty-4-name">
          Martin Martinez
        </div>
        <div class="faculty-4-info">
          <b><i>Information Technology</i></b><br/>
          Phone: 854-758-8574<br/>
          Email: mmartinez@educatemeacademy.com 
        </div>
      </div>
      <br/>
      <div class="faculty-5">
        <div class="faculty-5-pic">
          👨🏻‍🦲
        </div>
        <div class="faculty-5-name">
          Winston Montemayor
        </div>
        <div class="faculty-5-info">
          <b><i>Web Development</i></b><br/>
          Phone: 854-758-4201<br/>
          Email: wmontemayor@educatemeacademy.com 
        </div>
      </div>
      <br/>
      <div class="faculty-6">
        <div class="faculty-6-pic">
          🧔🏼‍♂️
        </div>
        <div class="faculty-6-name">
          Jason Reigns
        </div>
        <div class="faculty-6-info">
          <b><i>Computer Science</i></b><br/>
          Phone: 854-758-8598<br/>
          Email: jreigns@educatemeacademy.com 
        </div>
      </div>
      <br/>
      <div class="faculty-7">
        <div class="faculty-7-pic">
          👩🏻
        </div>
        <div class="faculty-7-name">
          Teresa Rios
        </div>
        <div class="faculty-7-info">
          <b><i>Cybersecurity & Computer Forensics</i></b><br/>
          Phone: 854-758-5555<br/>
          Email: trios@educatemeacademy.com 
        </div>
      </div>
      <br/>
      <div class="faculty-8">
        <div class="faculty-8-pic">
          👩🏾‍🦱
        </div>
        <div class="faculty-8-name">
          Jennifer Skyes
        </div>
        <div class="faculty-8-info">
          <b><i>Information Technology</i></b><br/>
          Phone: 854-758-9875<br/>
          Email: jskyes@educatemeacademy.com 
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply flex flex-col container mx-auto py-1.5 gap-4;
  .faculty-title {
        @apply rounded-md bg-green-200 p-2 text-slate-900 text-center text-4xl font-bold;
    }

  .faculty-1 {
        @apply rounded-md bg-blue-200 p-2 text-slate-900 text-center;
        &-pic{
          @apply text-6xl p-3;
        }
        &-name{
          @apply text-3xl py-1.5 italic font-bold;
        }
        &-info{
          @apply font-medium py-2 text-lg;
        }
    }
    .faculty-2 {
        @apply rounded-md bg-green-200 p-2 text-slate-900 text-center;
        &-pic{
          @apply text-6xl p-3;
        }
        &-name{
          @apply text-3xl py-1.5 italic font-bold;
        }
        &-info{
          @apply font-medium py-2 text-lg;
        }
    }
      .faculty-3 {
        @apply rounded-md bg-blue-200 p-2 text-slate-900 text-center;
        &-pic{
          @apply text-6xl p-3;
        }
        &-name{
          @apply text-3xl py-1.5 italic font-bold;
        }
        &-info{
          @apply font-medium py-2 text-lg;
        }
    }
    .faculty-4 {
        @apply rounded-md bg-green-200 p-2 text-slate-900 text-center;
        &-pic{
          @apply text-6xl p-3;
        }
        &-name{
          @apply text-3xl py-1.5 italic font-bold;
        }
        &-info{
          @apply font-medium py-2 text-lg;
        }
    }

      .faculty-5 {
        @apply rounded-md bg-blue-200 p-2 text-slate-900 text-center;
        &-pic{
          @apply text-6xl p-3;
        }
        &-name{
          @apply text-3xl py-1.5 italic font-bold;
        }
        &-info{
          @apply font-medium py-2 text-lg;
        }
    }
    .faculty-6 {
        @apply rounded-md bg-green-200 p-2 text-slate-900 text-center;
        &-pic{
          @apply text-6xl p-3;
        }
        &-name{
          @apply text-3xl py-1.5 italic font-bold;
        }
        &-info{
          @apply font-medium py-2 text-lg;
        }
    }
  .faculty-7 {
        @apply rounded-md bg-blue-200 p-2 text-slate-900 text-center;
        &-pic{
          @apply text-6xl p-3;
        }
        &-name{
          @apply text-3xl py-1.5 italic font-bold;
        }
        &-info{
          @apply font-medium py-2 text-lg;
        }
    }
    .faculty-8 {
        @apply rounded-md bg-green-200 p-2 text-slate-900 text-center;
        &-pic{
          @apply text-6xl p-3;
        }
        &-name{
          @apply text-4xl py-1.5 italic font-bold;
        }
        &-info{
          @apply font-medium py-2 text-lg;
        }
    }    
  }
</style>