<template>
  <div id="smooth-wrapper" class="font-satoshi bg-background text-text">
    <TheHeader :menuOpen="menuOpen" @toggle-menu="menuOpen = !menuOpen" @close-menu="menuOpen = false" />
    <TheNavigation :menuOpen="menuOpen" @close-menu="menuOpen = false" />
    <main id="smooth-content" class="min-h-screen">
      <NuxtPage />
    </main>
    <CustomCursor />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const gsap = useNuxtApp().$gsap;
const ScrollSmoother = useNuxtApp().$ScrollSmoother;

const menuOpen = ref(false)

onMounted(() => {
  if (ScrollSmoother) {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.2,
      effects: true,
    });
  }
});
</script>
