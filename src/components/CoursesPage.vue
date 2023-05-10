<template>
  <div class="wrapper">
    <div class="title">
      <h1>Programs & Courses</h1>
    </div>
    <div class="programs">
      <div class="programs-title">Programs</div>
      <div class="programs-content">
        <b>Cybersecurity & Computer Forensics</b><br/>
        This degree offers practical experience in a vast array of situations relative to cybersecurity and computer forensics.
        Students in this program learn about how to secure and document networks and systems and how to establish a chain of custody
        correctly, so that is admissible in a court of law.<br/><br/>
        <b>Computer Science</b><br/>
        With this program completed, students will be able to enter the workforce at an entry-level position in the computer science field.
        This curriculum has a concentration of a variety of computer programming languages used in personal and professional everyday life.
        An internship is offered within the degree program for eligible students who would like to dip their toes in the workforce of computer
        science.<br/><br/>
        <b>Web Development</b><br/>
        This newly added program offers students an experience in the server-side of technology. Within this degree, it will be expected for
        those enrolled to create web applications by use of programming, database techiques, and network security. There is an exclusive internship
        offered within this degree for seniors to work with our partnered company in creating new applications to add to the tech world.<br/><br/>
        <b>Information Technology</b><br/>
        This program offers students the knowledge and skills they will need for the ever evolving software applications, computer
        networking, hardware and software equipment, and operating systems. Those enrolled under this program will have the opportunity
        to have hands-on experiences with programming and setting up networks. The COIT program is proud to offer an internship to our
        eligible seniors to allow them to exercise their learned skills in a real life experience.
      </div>
    </div>
      <div class="courses">
        <div class="courses-title">Courses</div>
        <div class="courses-cybr">
          <h3><b>Cybersecurity & Computer Forensics Program</b></h3>
          <i>CYBR 1310: Introduction to Cybersecurity</i><br/>Instructor: Teresa Rios<br/>
          This courses introduces students to information and cybersecurity. It teaches students how to identify vulnerabilities in systems and countermeasures
          that can be used to address these issues.<br/><br/>
          <i>CYBR 2320: Cybersecurity Through the Years</i><br/>Instructor: Hector Avila<br/>
          This courses discusses how cryptography and steganography have envolved since the very beginning and how it is now applied to the cybersecurity we
          know today.<br/>
          {Prerequisite: CYBR 1310}<br/><br/>
          <i>CYBR 3350: Cyber Law & Digital Forensics</i><br/>Instructor: Teresa Rios<br/>
          This course discusses the law and legal aspect that comes into play when certified professionals collect and analyze evidence in computer crimes.
          Students will be exposed to the tools needed to successful conduct investigations of these matters.<br/>
          {Prerequisite: CYBR 2320}<br/><br/>             
          <i>CYBR 4326: Advanced Fundamentals in Information Security</i><br/>Instructor: Hector Avila <br/>
          This courses requires students to use what they have learned to conduct security audits and penetration testing on network infrastructures and systems.<br/>
          {Prerequisite: CYBR 3350}
        </div>

        <br/>
        <div class="courses-cosi">
          <h3><b>Computer Science</b></h3>
          <i>COSI 1315: Introduction to Computer Science</i><br/>Instructor: Roman Ayola<br/>
          This courses introduces students to what computer science is and how it has evolved over the years.<br/><br/>        
          <i>COSI 2340: Computer Programming</i><br/>Instructor: Jason Reigns<br/>
          Within this course, students will be required to create applications using computer programming language like C#. and Python.<br/>
          {Prerequisite: COSI 1315}<br/><br/>         
          <i>COSI 3340: Computer Science from Back to Front</i><br/>Instructor: Roman Ayola<br/>
          This course breaks down the components of a computer and network and discusses how they connect and work together in various ways.<br/>
          {Prerequisite: COSI 2340}<br/><br/>       
          <i>COSI 4301: Capstone: Computer Science Internship</i><br/>Instructor: Jason Reigns<br/> 
          This is an exclusive course that only accepts 15 students each term. For those selected, they will have the opportunity to apply the skills they learned
          in the classroom to a real-world experience with an intership with one of our partner companies.<br/>
          {Prerequisite: COSI 3340}
        </div>
        
        <br/>
        <div class="courses-webd">
          <h3><b>Web Development</b></h3>
          <i>WEBD 1301: Web Application for Beginners</i><br/>Instructor: Nicholas Carr<br/>
          This course is beginner-friendly. It is recommended for those who are barely dipping their foot into the world of web development or as a refresher course 
          for those who been in the field for a while. Those who take this course will make simple easy applications with use of Visual Code and/or Command Prompts.<br/><br/>      
          <i>WEBD 2340: Programming Fundamentals</i><br/>Instructor: Nicholas Carr<br/>
          This course covers the fundamental concepts of structued programming. It provides practice for use of functions, arrays, and control structures.<br/>   
          {Prerequisite: WEBD 1301}<br/><br/>     
          <i>WEBD 3347: Web Design Development</i><br/>Instructor: Winston Montemayor<br/>
          In this course, strudent will be expected to create applications by use of the programming and database techniques they have learned.<br/>
          {Prerequisite: WEBD 2340}<br/><br/>      
          <i>WEBD 4301: Capstone: Web Application Internship</i><br/>Instructor: Winston Montemayor<br/>
          This course is an internship with one of our partner companies that will allow seniors a chance to creating applications with the possiblity of them
          being able to the ever changing tech world.<br/>
          {Prerequisite: WEBD 3347}     
        </div>

        <br/>
        <div class="courses-coit">
          <h3><b>Information Technology</b></h3>
          <i>COIT 1313: Fundamentals of Network Technology</i><br/>Instructor: Martin Martinez<br/>     
          This course offers an introduction the network and information technology. It covers the basic but essential fundamentals and terminology one
          must know in this field.<br/><br/>
          <i>COIT 2340: Network Administration</i><br/>Instructor: Jennifer Skyes <br/>
          This course covers the different tasks need for a network to operate smooth and efficient.<br/>
          {Prerequisite: COIT 1313}<br/><br/>    
          <i>COIT 3350: Information Technology in the Workforce</i><br/>nstructor: Jennifer Skyes<br/>
          The course discusses the vast different types of jobs in the workforce that deal with information technology. It provides students with some basic knowledge
          about what possible jobs they can get upon completion of this program.<br/>
          {Prerequisite:  COIT 2340}<br/><br/>     
          <i>COIT 4301: Capstone: Information Technology Internship</i><br/>Instructor: Martin Martinez<br/>
          This course is an intership that allows for seniors to have the opportunity to put the skill and knowledge they learned about information technology to the 
          test in a real-world experience.<br/>
          {Prerequisite: COIT 4301}  
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