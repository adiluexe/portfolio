<script setup>
import { onMounted, ref } from 'vue'

// SEO Meta Tags for Works Page
useSeoMeta({
  title: 'Works - Exequel Adizon',
  description: 'Explore the creative works and projects by Exequel Adizon (@adiluexe). From web development to mobile apps, discover innovative digital solutions and creative projects.',
  ogTitle: 'Works - Exequel Adizon',
  ogDescription: 'Explore the creative works and projects by Exequel Adizon (@adiluexe). From web development to mobile apps, discover innovative digital solutions and creative projects.',
  ogImage: '/images/og-image.jpg',
  twitterTitle: 'Works - Exequel Adizon',
  twitterDescription: 'Explore the creative works and projects by Exequel Adizon (@adiluexe). From web development to mobile apps, discover innovative digital solutions and creative projects.',
  twitterImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image'
})

const { $gsap } = useNuxtApp()

const worksContent = ref(null)
const titleTextRef = ref(null)
let morphTimeline = null

const texts = [
  '<span class="font-spice">W</span>orks',
  '<span class="font-spice">P</span>rojects',
  '<span class="font-spice">C</span>reations'
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

const projects = ref([
  { 
    id: 1, 
    name: 'PORTFOLIO', 
    description: 'A personal portfolio site highlighting my work, skills, and creative journey as a developer and designer.',
    stack: 'NUXT.JS / VUE.JS / GSAP / TAILWIND',
    image: '/works/adiluexe.png',
    github: 'https://github.com/adiluexe/portfolio',
    website: 'https://adiluexe.vercel.app',
    type: 'Web Development'
  },
  { 
    id: 2, 
    name: 'HERONFIT', 
    description: 'A fitness app for the University of Makati gym that helps you track workouts, monitor progress, get personalized recommendations, and book sessions—with an integrated gym management system.',
    stack: 'FLUTTER / NEXT.JS / REACT / SUPABASE / FLASK',
    image: '/works/heronfit.png',
    github: 'https://github.com/skypiea-tech/heronfit',
    website: null, // Mobile app - no website
    type: 'Mobile + Web'
  },
  { 
    id: 3, 
    name: 'ALARP', 
    description: 'An interactive learning app for radiologic technology students—explore 3D radiographic positioning, practice 2D collimation with instant feedback, and sharpen your skills through timed challenges.',
    stack: 'FLUTTER / SUPABASE / CUSTOMPAINT / 3DVIEWER',
    image: '/works/alarp.png',
    github: 'https://github.com/adiluexe/alarp',
    website: null, // Mobile app - no website
    type: 'Mobile Development'
  },
  { 
    id: 4, 
    name: 'SNAPGRADE', 
    description: '[In development] An AI-powered grading system designed for educators to easily and efficiently evaluate student submissions by scanning bubble sheets. Results are exportable in Excel and other related formats, streamlining the assessment process.',
    stack: 'NEXT.JS / REACT / OPENCV / TENSORFLOW / FASTAPI',
    image: '/works/snapgrade.png',
    github: 'https://github.com/adiluexe/snapgrade',
    website: 'https://snapgrade-ai.vercel.app',
    type: 'Web + ML'
  },
  { 
    id: 5, 
    name: 'BATHALA', 
    description: '[In development] A Web3 roguelike card game inspired by Filipino mythology, where every choice shapes your journey. Experience strategic gameplay blending elements of Balatro and Slay the Spire, with unique story-driven mechanics.',
    stack: 'GODOT / GDSCRIPT / SOLIDITY / ETHEREUM / WEB3.JS',
    image: '/works/bathala.png', 
    github: 'https://github.com/devlocke-acsad/bathala',
    website: null, // Game - no website
    type: 'Game + Web3'
  },
  { 
    id: 6, 
    name: 'LET\'S WORK TOGETHER', 
    description: 'Have a project in mind? Let\'s collaborate and create something amazing',
    stack: 'YOUR IDEAS + MY SKILLS',
    image: null, // Special case for collaboration card
    github: null,
    website: 'mailto:exequel.adizon@gmail.com',
    type: 'Collaboration'
  }
])

onMounted(() => {
  $gsap.from(worksContent.value.children, {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    ease: 'power4.out',
  })
})
</script>

<template>
  <div class="w-full min-h-screen flex flex-col justify-center text-center py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-0">
    <div ref="worksContent" class="w-full">
      <h1 
        class="text-5xl md:text-7xl lg:text-8xl font-normal uppercase tracking-tighter mb-8 md:mb-12 lg:mb-16 font-satoshi cursor-hover"
        @mouseenter="startMorphEffect"
        @mouseleave="stopMorphEffect"
      >
        <span ref="titleTextRef"><span class="font-spice">W</span>orks</span>
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 p-8">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>
  </div>
</template>
