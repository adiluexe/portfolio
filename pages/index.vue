<script setup>
import { onMounted, ref } from 'vue'

// SEO Meta Tags for Home Page
useSeoMeta({
  title: 'Exequel Adizon - Creative Developer & Designer',
  description: 'Exequel Adizon (@adiluexe) is a designer and developer based in Taguig, Philippines. Passionate about crafting seamless and captivating digital experiences from design to code.',
  ogTitle: 'Exequel Adizon - Creative Developer & Designer',
  ogDescription: 'Exequel Adizon (@adiluexe) is a designer and developer based in Taguig, Philippines. Passionate about crafting seamless and captivating digital experiences from design to code.',
  ogImage: '/images/og-image.jpg',
  twitterTitle: 'Exequel Adizon - Creative Developer & Designer',
  twitterDescription: 'Exequel Adizon (@adiluexe) is a designer and developer based in Taguig, Philippines. Passionate about crafting seamless and captivating digital experiences from design to code.',
  twitterImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image'
})

const { $gsap } = useNuxtApp()

const heroTitle = ref(null)
const heroTextRef = ref(null)
let glitchTimeline = null

const texts = [
  'E<span class="font-spice">x</span>equel A<span class="font-spice">d</span>izon',
  'F<span class="font-spice">u</span>llstack D<span class="font-spice">e</span>veloper',
  'U<span class="font-spice">I</span>/U<span class="font-spice">X</span> Designer'
]
let currentIndex = 0

const startGlitchEffect = () => {
  if (glitchTimeline) glitchTimeline.kill()
  
  glitchTimeline = $gsap.timeline({ repeat: -1 })
  
  // Liquid morphing effect - faster version
  glitchTimeline
    .to({}, { duration: 0.8 }) // Shorter initial hold
    .add(() => {
      // Cycle to next text
      currentIndex = (currentIndex + 1) % texts.length
    })
    // Start morphing - stretch and distort
    .to(heroTextRef.value, {
      duration: 0.25,
      scaleY: 0.7,
      scaleX: 1.3,
      skewX: 15,
      filter: 'blur(2px)',
      ease: 'power2.inOut'
    })
    // Compress and twist
    .to(heroTextRef.value, {
      duration: 0.2,
      scaleY: 0.3,
      scaleX: 0.6,
      skewX: -20,
      rotationY: 45,
      filter: 'blur(4px)',
      ease: 'power2.inOut'
    })
    // Change text at peak distortion
    .call(() => {
      heroTextRef.value.innerHTML = texts[currentIndex]
    })
    // Expand and flow
    .to(heroTextRef.value, {
      duration: 0.2,
      scaleY: 1.4,
      scaleX: 0.8,
      skewX: 10,
      rotationY: -20,
      filter: 'blur(3px)',
      ease: 'power2.inOut'
    })
    // Settle into final form
    .to(heroTextRef.value, {
      duration: 0.35,
      scaleY: 1,
      scaleX: 1,
      skewX: 0,
      rotationY: 0,
      filter: 'blur(0px)',
      ease: 'elastic.out(1, 0.8)'
    })
    .to({}, { duration: 0.6 }) // Shorter hold before next cycle
}

const stopGlitchEffect = () => {
  if (glitchTimeline) {
    glitchTimeline.kill()
    glitchTimeline = null
  }
  
  // Reset to original text and position with liquid settle
  currentIndex = 0
  heroTextRef.value.innerHTML = texts[0]
  $gsap.to(heroTextRef.value, {
    duration: 0.6,
    x: 0,
    y: 0,
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    rotationY: 0,
    filter: 'blur(0px)',
    ease: 'elastic.out(1, 0.7)'
  })
}

onMounted(() => {
  $gsap.from(heroTitle.value, {
    duration: 1.5,
    y: 100, // Start 100px below its final position
    opacity: 0, // Start fully transparent
    ease: 'power4.out',
  })
})
</script>

<template>
  <div class="w-full min-h-screen flex flex-col justify-center items-center text-center relative">
    <!-- Main Hero Name -->
    <div class="flex-grow flex items-center justify-center pb-96">
      <h1 
        ref="heroTitle" 
        class="text-9xl font-normal uppercase tracking-tighter text-primary cursor-hover"
        @mouseenter="startGlitchEffect"
        @mouseleave="stopGlitchEffect"
      >
        <span ref="heroTextRef">E<span class="font-spice">x</span>equel A<span class="font-spice">d</span>izon</span>
      </h1>
    </div>

    <!-- Three-column Info Section -->
    <div class="w-full absolute bottom-8 left-0 px-8">
      <div class="container mx-auto">
        <div class="flex justify-between items-center text-1xl uppercase">
          <!-- Left Column -->
          <div class="w-1/3 max-w-xs text-center">
            <Icon name="custom:adiluexe-logo" class="block mb-8 mx-auto text-1xl animate-spin-slow" />
            <p>Exequel Adizon (@adiluexe) is a designer and developer based in Taguig, Philippines</p>
          </div>
          <!-- Middle Column -->
          <div class="w-1/3 max-w-xs text-center">
            <!-- Animated hero image / illustration goes here -->
            <div class="h-80 bg-accent"></div>
          </div>
          <!-- Right Column -->
          <div class="w-1/3 max-w-xs text-center">
            <Icon name="custom:adiluexe-logo" class="block mb-8 mx-auto text-1xl animate-spin-slow" />
            <p>Passionate about crafting seamless and captivating digital experiences from design to code</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
