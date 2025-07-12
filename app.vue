<template>
  <div id="smooth-wrapper" class="font-satoshi bg-background text-text">
    <TheHeader />
    <TheNavigation />
    <main id="smooth-content" class="min-h-screen">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
const gsap = useNuxtApp().$gsap;
const ScrollSmoother = useNuxtApp().$ScrollSmoother;

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
