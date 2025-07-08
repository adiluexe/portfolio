<script setup>
import { ref } from 'vue'
const { $gsap } = useNuxtApp()

const navEl = ref(null)
const navBg = ref(null)
const navList = ref(null) // A ref for the <ul> element

// --- Main Container Hover Logic ---
const onContainerEnter = () => {
  navEl.value.classList.remove('adaptive-text')
  // Animate background bar to fade in
  $gsap.to(navBg.value, {
    duration: 0.4,
    opacity: 1,
    backgroundColor: '#161A30', // Accent color
    ease: 'power3.out'
  });

  // Animate ALL link text to background color
  $gsap.to(navList.value.querySelectorAll('a'), {
    duration: 0.4,
    color: '#F0F0F0',
    ease: 'power3.out'
  });
}

const onContainerLeave = () => {
  navEl.value.classList.add('adaptive-text')
  // Animate background bar to fade out
  $gsap.to(navBg.value, {
    duration: 0.4,
    opacity: 0,
    ease: 'power3.in'
  });

  // Animate ALL link text back to text color
  $gsap.to(navList.value.querySelectorAll('a'), {
    duration: 0.4,
    color: '#FFFFFF',
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
  <nav ref="navEl" class="fixed inset-0 flex items-center justify-center z-40 pointer-events-none adaptive-text">
    <!-- Animated Background Bar -->
    <div ref="navBg" class="absolute top-1/2 -translate-y-1/2 w-full h-24 bg-accent opacity-0 pointer-events-none z-0"></div>

    <!-- Links Container -->
    <div @mouseenter="onContainerEnter" @mouseleave="onContainerLeave" class="relative w-full pointer-events-auto">
      <ul ref="navList" class="flex items-center justify-around uppercase text-sm tracking-tighter">
        <li @mouseenter="onLinkEnter" @mouseleave="onLinkLeave">
          <NuxtLink to="/about" class="block p-4 pointer-events-auto text-left">
            <span class="block text-xs font-normal">01</span>
            <span class="font-spice">A</span>bout
          </NuxtLink>
        </li>
        <li @mouseenter="onLinkEnter" @mouseleave="onLinkLeave">
          <NuxtLink to="/works" class="block p-4 pointer-events-auto text-left">
            <span class="block text-xs font-normal">02</span>
            <span class="font-spice">W</span>orks
          </NuxtLink>
        </li>
        <li @mouseenter="onLinkEnter" @mouseleave="onLinkLeave">
          <NuxtLink to="/contact" class="block p-4 pointer-events-auto text-left">
            <span class="block text-xs font-normal">03</span>
            <span class="font-spice">C</span>ontact
          </NuxtLink>
        </li>
        <li @mouseenter="onLinkEnter" @mouseleave="onLinkLeave">
          <NuxtLink to="/playground" class="block p-4 pointer-events-auto text-left">
            <span class="block text-xs font-normal">04</span>
            <span class="font-spice">P</span>layground
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>