<script setup>
import { onMounted, ref } from 'vue'

// SEO Meta Tags for About Page
useSeoMeta({
  title: 'About - Exequel Adizon',
  description: 'Learn more about Exequel Adizon (@adiluexe), a creative developer and designer from Taguig, Philippines. Discover my journey, skills, and passion for digital experiences.',
  ogTitle: 'About - Exequel Adizon',
  ogDescription: 'Learn more about Exequel Adizon (@adiluexe), a creative developer and designer from Taguig, Philippines. Discover my journey, skills, and passion for digital experiences.',
  ogImage: '/images/og-image.jpg',
  twitterTitle: 'About - Exequel Adizon',
  twitterDescription: 'Learn more about Exequel Adizon (@adiluexe), a creative developer and designer from Taguig, Philippines. Discover my journey, skills, and passion for digital experiences.',
  twitterImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image'
})

const { $gsap } = useNuxtApp()

const aboutContent = ref(null)
const titleTextRef = ref(null)
let morphTimeline = null

const texts = [
  '<span class="font-spice">A</span>bout',
  '<span class="font-spice">M</span>y <span class="font-spice">S</span>tory',
  '<span class="font-spice">W</span>ho I <span class="font-spice">A</span>m'
]
let currentIndex = 0

const startMorphEffect = () => {
  if (morphTimeline) morphTimeline.kill()
  
  morphTimeline = $gsap.timeline({ repeat: -1 })
  
  morphTimeline
    .to({}, { duration: 0.8 })
    .add(() => {
      currentIndex = (currentIndex + 1) % texts.length
    })
    .to(titleTextRef.value, {
      duration: 0.25,
      scaleY: 0.7,
      scaleX: 1.3,
      skewX: 15,
      filter: 'blur(2px)',
      ease: 'power2.inOut'
    })
    .to(titleTextRef.value, {
      duration: 0.2,
      scaleY: 0.3,
      scaleX: 0.6,
      skewX: -20,
      rotationY: 45,
      filter: 'blur(4px)',
      ease: 'power2.inOut'
    })
    .call(() => {
      titleTextRef.value.innerHTML = texts[currentIndex]
    })
    .to(titleTextRef.value, {
      duration: 0.2,
      scaleY: 1.4,
      scaleX: 0.8,
      skewX: 10,
      rotationY: -20,
      filter: 'blur(3px)',
      ease: 'power2.inOut'
    })
    .to(titleTextRef.value, {
      duration: 0.35,
      scaleY: 1,
      scaleX: 1,
      skewX: 0,
      rotationY: 0,
      filter: 'blur(0px)',
      ease: 'elastic.out(1, 0.8)'
    })
    .to({}, { duration: 0.6 })
}

const stopMorphEffect = () => {
  if (morphTimeline) {
    morphTimeline.kill()
    morphTimeline = null
  }
  
  currentIndex = 0
  titleTextRef.value.innerHTML = texts[0]
  $gsap.to(titleTextRef.value, {
    duration: 0.6,
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    rotationY: 0,
    filter: 'blur(0px)',
    ease: 'elastic.out(1, 0.7)'
  })
}

onMounted(() => {
  $gsap.from(aboutContent.value.children, {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    ease: 'power4.out',
  })
})
</script>

<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-center text-center py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-0">
    <div ref="aboutContent">
      <h1 
        class="text-5xl md:text-7xl lg:text-8xl font-normal uppercase tracking-tighter mb-8 md:mb-12 lg:mb-16 font-satoshi cursor-hover"
        @mouseenter="startMorphEffect"
        @mouseleave="stopMorphEffect"
      >
        <span ref="titleTextRef"><span class="font-spice">A</span>bout</span>
      </h1>
      <div class="w-full h-64 bg-primary mx-auto mb-4"></div>
      <div class="w-px h-24 bg-text mx-auto mb-4"></div>
      <div class="max-w-4xl text-md space-y-6 mb-4 tracking-tight text-center uppercase">
        <div>
          <h2 class="text-2xl font-bold mb-4 uppercase">ABOUT ME</h2>
          <p>Hi, I'm Exequel Adizon! I'm currently an incoming fourth-year Computer Science student with a keen interest in both design and development. I'm exploring career paths as a UI/UX Designer and Full-stack Developer.</p>
        </div>

        <div>
          <h3 class="text-2xl font-bold mb-4 uppercase">My Journey into Design</h3>
          <p class="mb-4">My passion for design actually started with a love for drawing when I was young, which naturally led me to more creative pursuits. I delved into editing early on, experimenting with tools like Pizap, PicsArt, and Canva, before eventually mastering professional software like Adobe Photoshop, Illustrator, and Figma.</p>
          
          <p class="mb-4">I entered the design field quite early. In high school, I was already editing posts and graphics for various Facebook pages. This led to my role as the layout artist for our school's English journalism publication, "The Masonry," where our newspaper proudly won several awards at the DSPC and RSPC in 2019.</p>
          
          <p class="mb-4">In university, I had the honor of being the inaugural Head of Graphics for Fortem Ardeas Esports, the University of Makati's premier esports organization. There, I established the brand identity and managed a vast array of graphics, from live broadcast visuals to real-time graphic edits. I also created deliverables for internal events and collaborated with prominent esports brands such as Moonton Philippines, AcadArena, and Tier One Entertainment.</p>

          <p>
            Around this time, I was also taking on freelance design projects alongside my organizational work. The money was good, but I eventually hit a burnout; designing wasn't fun anymore, and I started losing interest. This experience led me to create an account purely for posting whatever I wanted to create. This proved to be a very therapeutic process, giving me the confidence I needed to fall back in love with design. The works you see in my "playground" section are all from that account, which amassed over 1 million views and half a million likes in just a month of posting. Although I've stopped posting on that account to focus on more programming related activities, I'm incredibly grateful for that experience and aspire to replicate its success someday.
          </p>
        </div>

        <div>
          <h3 class="text-2xl font-bold mb-4 uppercase">My Exploration into Development</h3>
          <p class="mb-4">I first discovered programming in 9th grade during my ICT classes, where I learned to build websites using HTML, CSS, and JavaScript. That same year, I was also the programmer for our school's robotics team, where we even won first place in the VEX IQ Robotics Competition.</p>
          
          <p class="mb-4">Honestly, it wasn't until college (and very recently) that I truly immersed myself in Computer Science and reignited my passion for programming. Looking back, I sometimes regret not pursuing it more seriously when I was younger, but I'm making up for lost time. This past year alone has been incredibly transformative. I've participated in three hackathons (no wins yet, but the experience has been invaluable).</p>
          
          <p>I've gained proficiency in mobile app development using Flutter and React Native, and I've moved beyond vanilla web development to explore powerful frameworks and libraries like Next.js and React. To truly call myself a full-stack developer, I've also delved into backend development, building and managing databases and APIs. On top of all this, I've successfully completed several freelance programming projects.</p>
        </div>

        <div>
          <Icon name="custom:adiluexe-logo" class="block mb-4 mx-auto text-sm animate-bounce" />
          <h3 class="text-2xl font-bold mb-4 uppercase">Let's Connect</h3>
          <p>If you're looking for someone who's proficient in both design and programming—someone who blends technical skills with a creative mindset—please feel free to reach out! I'm still open to freelance opportunities, but I'm particularly keen on gaining more formal experience in the tech industry, as most of my work thus far has been self-driven.</p>
        </div>
      </div>
      <div class="w-px h-24 bg-text mx-auto mb-4"></div>
      <div class="text-center">
        <a 
          href="mailto:exequel.adizon@gmail.com"
          class="group relative inline-flex items-center gap-2 cursor-hover transition-all duration-300 mb-4"
        >
          <span class="relative group-hover:text-primary transition-colors duration-300 text-4xl">
        EXEQUEL.ADIZON@GMAIL.COM
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
          </span>
          <svg class="w-6 h-6 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
          </svg>
        </a>
        <div class="flex items-center justify-center gap-4 text-4xl">
          <a 
        href="https://github.com/adiluexe" 
        target="_blank"
        class="group relative flex items-center gap-2 cursor-hover transition-all duration-300"
          >
        <span class="relative group-hover:text-primary transition-colors duration-300">
          GITHUB
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
        </span>
        <svg class="w-6 h-6 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
        </svg>
          </a>
          <span class="text-4xl font-satoshi">/</span>
          <a 
        href="https://www.linkedin.com/in/exequel-adizon/" 
        target="_blank"
        class="group relative flex items-center gap-2 cursor-hover transition-all duration-300"
          >
        <span class="relative group-hover:text-primary transition-colors duration-300">
          LINKEDIN
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
        </span>
        <svg class="w-6 h-6 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
        </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
