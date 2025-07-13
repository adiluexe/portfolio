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

onMounted(() => {
  $gsap.from(contactContent.value.children, {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    ease: 'power4.out',
  })
})
</script>

<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-center text-center py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-0 tracking-tighter">
    <div ref="contactContent">
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-normal uppercase mb-8 md:mb-12 lg:mb-16 font-satoshi tracking-tighter"><span class="font-spice">C</span>ontact</h1>
      <div class="bg-primary w-full max-w-2xl h-64 mb-8"></div>
      <div class="text-center mb-8">
        <p class="text-2xl uppercase ">Let's collaborate</p>
        <p class="text-2xl uppercase ">and make something together</p>
      </div>
      <div class="w-px h-16 bg-text mx-auto mb-8"></div>
      <div class="text-center mb-8">
        <p class="text-3xl">EXEQUEL.ADIZON@GMAIL.COM</p>
        <p class="text-3xl"><a href="https://github.com/adiluexe" target="_blank">GITHUB</a> / <a href="https://www.linkedin.com/in/exequel-adizon/" target="_blank">LINKEDIN</a></p>
      </div>
      <div class="w-px h-16 bg-text mx-auto mb-8"></div>
      <div class="bg-primary w-full max-w-2xl h-64"></div>
    </div>
  </div>
</template>
