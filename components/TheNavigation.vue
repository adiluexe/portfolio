<script setup>
import { ref } from 'vue'
const { $gsap } = useNuxtApp()

const navBg = ref(null)
const navList = ref(null) // A ref for the <ul> element

// --- Main Container Hover Logic ---
const onContainerEnter = () => {
  // Animate background bar to fade in
  $gsap.to(navBg.value, {
    duration: 0.4,
    opacity: 1,
    backgroundColor: '#ffffff',
    ease: 'power3.out'
  });

  // Animate ALL link text to black
  $gsap.to(navList.value.querySelectorAll('a'), {
    duration: 0.4,
    color: '#000000',
    ease: 'power3.out'
  });
}

const onContainerLeave = () => {
  // Animate background bar to fade out
  $gsap.to(navBg.value, {
    duration: 0.4,
    opacity: 0,
    ease: 'power3.in'
  });

  // Animate ALL link text back to white
  $gsap.to(navList.value.querySelectorAll('a'), {
    duration: 0.4,
    color: '#ffffff',
    ease: 'power3.in'
  });
}

// --- Individual Link Hover Logic ---
const onLinkEnter = (e) => {
  // Scale up the hovered list item
  $gsap.to(e.currentTarget, {
    duration: 0.3,
    scale: 1.15,
    ease: 'power3.out'
  });
}

const onLinkLeave = (e) => {
  // Return the list item to normal size
  $gsap.to(e.currentTarget, {
    duration: 0.3,
    scale: 1,
    ease: 'power3.in'
  });
}
</script>

<template>
  <nav class="fixed inset-0 flex items-center justify-center z-40 pointer-events-none">
    <!-- Animated Background Bar -->
    <div ref="navBg" class="absolute top-1/2 -translate-y-1/2 w-full h-24 bg-white opacity-0 pointer-events-none z-0"></div>

    <!-- Links Container -->
    <div @mouseenter="onContainerEnter" @mouseleave="onContainerLeave" class="relative w-full max-w-6xl px-8 pointer-events-auto">
      <ul ref="navList" class="flex items-center justify-between uppercase text-sm tracking-widest">
        <li @mouseenter="onLinkEnter" @mouseleave="onLinkLeave">
          <NuxtLink to="/about" class="block p-4 pointer-events-auto text-left">
            <span class="block text-xs font-semibold">01</span>
            About
          </NuxtLink>
        </li>
        <li @mouseenter="onLinkEnter" @mouseleave="onLinkLeave">
          <NuxtLink to="/works" class="block p-4 pointer-events-auto text-left">
            <span class="block text-xs font-semibold">02</span>
            Works
          </NuxtLink>
        </li>
        <li @mouseenter="onLinkEnter" @mouseleave="onLinkLeave">
          <NuxtLink to="/contact" class="block p-4 pointer-events-auto text-left">
            <span class="block text-xs font-semibold">03</span>
            Contact
          </NuxtLink>
        </li>
        <li @mouseenter="onLinkEnter" @mouseleave="onLinkLeave">
          <NuxtLink to="/playground" class="block p-4 pointer-events-auto text-left">
            <span class="block text-xs font-semibold">04</span>
            Playground
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>