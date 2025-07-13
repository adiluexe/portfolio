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
      <div class="bg-primary w-full max-w-2xl h-64 mb-8">
        <!-- Image placeholder -->
      </div>
      <div class="w-px h-16 bg-text mx-auto mb-8"></div>
      <div class="max-w-2xl text-1xl space-y-4 mb-8 uppercase tracking-tighter">
        <p>Hi, I'm Exequel Adizon. I'm currently a Computer Science student with a strong interest in UI/UX design and full-stack development.</p>
        <p>I enjoy the process of translating concepts into engaging user experiences, whether through design or coding. I believe in creating solutions that are both practical and aesthetically pleasing.</p>
        <p>I'm focused on developing my skills to effectively bridge the gap between design and development in the realm of UI/UX and full-stack technologies.</p>
      </div>
      <div class="w-px h-16 bg-text mx-auto mb-8"></div>
      <div class="text-center font-normal mb-16 tracking-tighter">
        
        <p class="text-lg mb-8">
          <!-- <Icon name="custom:adiluexe-logo" class="px-4 text-sm animate-spin-slow" /> -->
          SAY HELLO
          <!-- <Icon name="custom:adiluexe-logo" class="px-4 text-sm animate-spin-slow" /> -->
        </p>
        <p class="text-3xl">EXEQUEL.ADIZON@GMAIL.COM</p>
        <p class="text-3xl"><a href="https://www.linkedin.com/in/exequel-adizon/" target="_blank">LINKEDIN</a> / <a href="https://github.com/adiluexe" target="_blank">GITHUB</a></p>
      </div>
      <div class="bg-primary w-full max-w-2xl h-64"></div>
    </div>
  </div>
</template>
