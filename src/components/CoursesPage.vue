<template>
  <div class="wrapper">
    <div class="title">
      <h1>Programs & Courses</h1>
    </div>
    <div class="programs">
      <div class="programs-title">Programs</div>
      <div class="programs-content">
        Cybersecurity & Computer Forensics<br/>
        Computer Science<br/>
        Web Development<br/>
        Information Technology
      </div>
    </div>
      <div class="courses">
        <div class="courses-title">Courses</div>
        <div class="courses-cybr">
          <h3><b>Cybersecurity & Computer Forensics Program</b></h3>
          <i>CYBR 1310: Introduction to Cybersecurity</i><br/>Instructor: Teresa Rios<br/><br/>          
          <i>CYBR 2320: Cybersecurity Through the Years</i><br/>Instructor: Hector Avila<br/><br/>          
          <i>CYBR 3350: Cyber Law & Digital Forensics</i><br/>Instructor: Teresa Rios<br/><br/>             
          <i>CYBR 4326: Advanced Fundamentals in Information Security</i><br/>Instructor: Hector Avila <br/>           
        </div>
        <br/>
        <div class="courses-cosi">
          <h3><b>Computer Science</b></h3>
          <i>COSI 1315: Introduction to Computer Science</i><br/>Instructor: Roman Ayola<br/><br/>            
          <i>COSI 2340: Computer Programming</i><br/>Instructor: Jason Reigns<br/><br/>            
          <i>COSI 3340: Computer Science from Back to Front</i><br/>Instructor: Roman Ayola<br/><br/>            
          <i>COSI 4301: Capstone: Computer Science Internship</i><br/>Instructor: Jason Reigns<br/>      
        </div>
        <br/>
        <div class="courses-webd">
          <h3><b>Web Development</b></h3>
          <i>WEBD 1301: Web Application for Beginners</i><br/>Instructor: Nicholas Carr<br/><br/>      
          <i>WEBD 2340: Programming Fundamentals</i><br/>Instructor: Nicholas Carr<br/><br/>        
          <i>WEBD 3347: Web Design Development</i><br/>Instructor: Winston Montemayor<br/><br/>       
          <i>WEBD 4301: Capstone: Web Application Internship</i><br/>Instructor: Winston Montemayor<br/>       
        </div>
        <br/>
        <div class="courses-coit">
          <h3><b>Information Technology</b></h3>
          <i>COIT 1313: Capstone: Web Application Internship</i><br/>Instructor: Martin Martinez<br/><br/>       
          <i>COIT 2340: Network Administration</i><br/>Instructor: Jennifer Skyes <br/><br/>    
          <i>COIT 3350: Information Technology in the Workforce</i><br/>nstructor: Jennifer Skyes<br/><br/>     
          <i>COIT 4301: Capstone: Information Technology Intership</i><br/>Instructor: Martin Martinez  
        </div>
      </div>
    </div>
</template>

<style scoped lang="postcss">
.wrapper {
        @apply flex flex-col container mx-auto py-1.5 gap-4;
    .title {
        @apply rounded-md bg-blue-200 p-4 text-slate-900 text-center text-4xl font-bold;
    }
    .programs {
        @apply rounded-md bg-green-200 p-2 text-slate-900 text-center font-semibold;
      &-title{
        @apply text-2xl font-bold underline
      }
    }
    .courses {
        @apply rounded-md bg-blue-200 p-2 text-slate-900 text-center font-semibold;
      &-title{
        @apply text-2xl font-bold underline p-2
      }
      &-cybr
      {
        @apply rounded-md bg-green-200 p-2
      }
      &-cosi
      {
        @apply rounded-md bg-emerald-200 p-2
      }
      &-webd
      {
        @apply rounded-md bg-green-200 p-2
      }
      &-coit
      {
        @apply rounded-md bg-emerald-200 p-2
      }
      
      }


}
</style>