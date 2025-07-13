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
      <h1 ref="heroTitle" class="text-9xl font-normal uppercase tracking-tighter text-primary">
        E<span class="font-spice">x</span>equel A<span class="font-spice">d</span>izon
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
