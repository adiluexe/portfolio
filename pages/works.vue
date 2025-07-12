<script setup>
import { onMounted, ref } from 'vue'

const { $gsap } = useNuxtApp()

const worksContent = ref(null)

const projects = ref([
  { id: 1, name: 'PORTFOLIO', stack: 'NUXT.JS / VUE.JS / GSAP' },
  { id: 2, name: 'HERONFIT', stack: 'FLUTTER / NEXT.JS / REACT / SUPABASE / FLASK' },
  { id: 3, name: 'ALARP', stack: 'FLUTTER / SUPABASE / CUSTOMPAINT / FLUTTER3D' },
  { id: 4, name: 'SNAPGRADE', stack: 'NEXT.JS / REACT / SPRINGBOOT' },
  { id: 5, name: 'BATHALA', stack: 'GODOT' },
  { id: 6, name: '[YOUR PROJECT HERE]', stack: '' }
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
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-normal uppercase tracking-tighter mb-8 md:mb-12 lg:mb-16 font-satoshi"><span class="font-spice">W</span>orks</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
        <NuxtLink v-for="project in projects" :key="project.id" :to="`/works/${project.id}`">
          <ProjectCard :project="project" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
