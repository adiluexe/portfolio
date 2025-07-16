<script setup>
import { onMounted, ref } from 'vue'

// SEO Meta Tags for Contact Page
useSeoMeta({
  title: 'Contact - Exequel Adizon',
  description: 'Get in touch with Exequel Adizon (@adiluexe). Ready to collaborate on your next project? Let\'s create something amazing together.',
  ogTitle: 'Contact - Exequel Adizon',
  ogDescription: 'Get in touch with Exequel Adizon (@adiluexe). Ready to collaborate on your next project? Let\'s create something amazing together.',
  ogImage: '/images/og-image.jpg',
  twitterTitle: 'Contact - Exequel Adizon',
  twitterDescription: 'Get in touch with Exequel Adizon (@adiluexe). Ready to collaborate on your next project? Let\'s create something amazing together.',
  twitterImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image'
})

const { $gsap } = useNuxtApp()

const contactContent = ref(null)
const titleTextRef = ref(null)
const adjectiveRef = ref(null)
let morphTimeline = null
let adjectiveTimeline = null

const texts = [
  '<span class="font-spice">C</span>ontact',
  '<span class="font-spice">L</span>et\'s <span class="font-spice">T</span>alk',
  '<span class="font-spice">G</span>et In <span class="font-spice">T</span>ouch'
]
let currentIndex = 0

const adjectives = [
  'amazing',
  'incredible',
  'extraordinary',
  'beautiful',
  'innovative',
  'remarkable',
  'exceptional',
  'outstanding'
]
let adjectiveIndex = 0

const startAdjectiveCycle = () => {
  if (adjectiveTimeline) adjectiveTimeline.kill()
  
  adjectiveTimeline = $gsap.timeline({ repeat: -1 })
  
  adjectiveTimeline
    .to({}, { duration: 2 }) // Hold for 2 seconds
    .add(() => {
      adjectiveIndex = (adjectiveIndex + 1) % adjectives.length
    })
    .to(adjectiveRef.value, {
      duration: 0.2,
      opacity: 0,
      y: -10,
      ease: 'power2.inOut'
    })
    .call(() => {
      adjectiveRef.value.textContent = adjectives[adjectiveIndex]
    })
    .to(adjectiveRef.value, {
      duration: 0.3,
      opacity: 1,
      y: 0,
      ease: 'power2.out'
    })
}

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
  $gsap.from(contactContent.value.children, {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    ease: 'power4.out',
  })
  
  // Start adjective cycling after initial animation
  setTimeout(() => {
    startAdjectiveCycle()
  }, 1500)
})
</script>

<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-center text-center py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-0 tracking-tighter">
    <div ref="contactContent" class="w-full max-w-6xl">
      <h1 
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal uppercase mb-44 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 font-satoshi tracking-tighter cursor-hover leading-none"
        @mouseenter="startMorphEffect"
        @mouseleave="stopMorphEffect"
      >
        <span ref="titleTextRef"><span class="font-spice">C</span>ontact</span>
      </h1>

      <div class="text-center mb-8 sm:mb-8 text-lg sm:text-lg md:text-lg uppercase px-2 sm:px-4">
        <Icon name="custom:adiluexe-logo" class="block mb-3 sm:mb-4 mx-auto text-sm animate-bounce" />
        <p class="">Let's collaborate</p>
        <p class="">and build something <span ref="adjectiveRef" class="font-bold">amazing</span> together</p>
      </div>
      <div class="w-px h-64 sm:h-64 md:h-64 lg:h-56 xl:h-72 bg-text mx-auto mb-4 sm:mb-6 md:mb-8"></div>
      <div class="text-center mb-3 sm:mb-4 w-full max-w-4xl mx-auto px-2 sm:px-4">
        <a 
          href="mailto:exequel.adizon@gmail.com"
          class="group relative inline-flex items-center gap-1 sm:gap-2 cursor-hover transition-all duration-300 mb-3 sm:mb-4 flex-wrap justify-center"
        >
          <span class="relative group-hover:text-primary transition-colors duration-300 text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span class="block sm:inline">EXEQUEL.ADIZON</span><span class="block sm:inline">@GMAIL.COM</span>
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
          </span>
          <svg class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
          </svg>
        </a>
        <div class="mb-16 flex items-center justify-center gap-2 sm:gap-4 text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl flex-wrap">
          <a 
            href="https://github.com/adiluexe" 
            target="_blank"
            class="group relative flex items-center gap-1 sm:gap-2 cursor-hover transition-all duration-300"
          >
            <span class="relative group-hover:text-primary transition-colors duration-300">
              GITHUB
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
            </span>
            <svg class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
            </svg>
          </a>
          <span class="text-4xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-satoshi">/</span>
          <a 
            href="https://www.linkedin.com/in/exequel-adizon/" 
            target="_blank"
            class="group relative flex items-center gap-1 sm:gap-2 cursor-hover transition-all duration-300"
          >
            <span class="relative group-hover:text-primary transition-colors duration-300">
              LINKEDIN
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
            </span>
            <svg class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
            </svg>
          </a>
        </div>
      </div>
      
      
    </div>
  </div>
</template>
