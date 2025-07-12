<script setup>
import { onMounted, ref } from 'vue'

const { $gsap } = useNuxtApp()

const aboutContent = ref(null)

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
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-normal uppercase tracking-tighter mb-8 md:mb-12 lg:mb-16 font-satoshi"><span class="font-spice">A</span>bout</h1>
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
