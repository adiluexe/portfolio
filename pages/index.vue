<script setup>
import { onMounted, ref } from 'vue'

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
    <div class="flex-grow flex items-center justify-center pb-56">
      <h1 ref="heroTitle" class="text-9xl font-bold uppercase tracking-widest">
        Exequel Adizon
      </h1>
    </div>

    <!-- Three-column Info Section -->
    <div class="w-full absolute bottom-8 left-0 px-8">
      <div class="container mx-auto">
        <div class="flex justify-between items-start text-sm uppercase">
          <!-- Left Column -->
          <div class="w-1/3 max-w-xs text-center">
            <span class="block mb-4">[ICON]</span>
            <p>Exequel Adizon (@adiluexe) is a designer and developer based in Taguig, Philippines</p>
          </div>
          <!-- Middle Column -->
          <div class="w-1/3 max-w-xs text-center">
            <span class="block mb-4">[ICON]</span>
            <p>[IMAGE PLACEHOLDER]</p>
          </div>
          <!-- Right Column -->
          <div class="w-1/3 max-w-xs text-center">
            <span class="block mb-4">[ICON]</span>
            <p>Passionate about crafting seamless and captivating digital experiences from design to code</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
