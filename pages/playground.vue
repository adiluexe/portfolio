<script setup>
import { onMounted, ref } from 'vue'

const { $gsap } = useNuxtApp()

const playgroundContent = ref(null)

const playgroundItems = ref([
  { id: 1, name: 'TRANGAZING', link: true },
  { id: 2, name: 'WALTZ OF FOUR LEFT FEET', link: false },
  { id: 3, name: 'TRANGAZING', link: true },
  { id: 4, name: 'TRANGAZING', link: true },
  { id: 5, name: 'TRANGAZING', link: false },
  { id: 6, name: 'TRANGAZING', link: true },
  { id: 7, name: 'TRANGAZING', link: false },
  { id: 8, name: 'TRANGAZING', link: true },
  { id: 9, name: 'TRANGAZING', link: false },
])

onMounted(() => {
  $gsap.from(playgroundContent.value.children, {
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
    <div ref="playgroundContent" class="w-full">
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-normal uppercase tracking-tighter mb-8 md:mb-12 lg:mb-16 font-satoshi"><span class="font-spice">P</span>layground</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 p-8">
        <PlaygroundCard v-for="item in playgroundItems" :key="item.id" :playgroundItem="item" />
      </div>
    </div>
  </div>
</template>
