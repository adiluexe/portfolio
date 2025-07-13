<template>
  <div 
    ref="cursor" 
    class="custom-cursor fixed pointer-events-none z-50"
    :style="{ 
      left: cursorPos.x + 'px', 
      top: cursorPos.y + 'px',
      transform: 'translate(-50%, -50%)'
    }"
  >
    <div 
      ref="cursorInner" 
      class="cursor-inner w-6 h-6 rounded-full bg-primary transition-all duration-200 ease-out"
      :class="isHovering ? 'scale-150' : ''"
    ></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const cursor = ref(null)
const cursorInner = ref(null)
const isHovering = ref(false)

const cursorPos = ref({ x: 0, y: 0 })
const targetPos = ref({ x: 0, y: 0 })

const { $gsap } = useNuxtApp()

// Smooth cursor following
const updateCursor = () => {
  if (!cursor.value || !$gsap) return
  
  // Smooth interpolation
  cursorPos.value.x += (targetPos.value.x - cursorPos.value.x) * 0.15
  cursorPos.value.y += (targetPos.value.y - cursorPos.value.y) * 0.15
  
  requestAnimationFrame(updateCursor)
}

// Mouse move handler
const handleMouseMove = (e) => {
  targetPos.value.x = e.clientX
  targetPos.value.y = e.clientY
}

// Mouse enter hover elements
const handleMouseEnter = (e) => {
  const target = e.target
  
  // Check if hovering over interactive elements
  if (
    target.tagName === 'A' || 
    target.tagName === 'BUTTON' || 
    target.classList.contains('cursor-hover') ||
    target.closest('a') ||
    target.closest('button') ||
    target.closest('.cursor-hover')
  ) {
    isHovering.value = true
    
    if ($gsap && cursorInner.value) {
      $gsap.to(cursorInner.value, {
        duration: 0.3,
        scale: 2,
        opacity: 0.6,
        ease: 'power2.out'
      })
    }
  }
}

// Mouse leave hover elements
const handleMouseLeave = (e) => {
  const target = e.target
  
  if (
    target.tagName === 'A' || 
    target.tagName === 'BUTTON' || 
    target.classList.contains('cursor-hover') ||
    target.closest('a') ||
    target.closest('button') ||
    target.closest('.cursor-hover')
  ) {
    isHovering.value = false
    
    if ($gsap && cursorInner.value) {
      $gsap.to(cursorInner.value, {
        duration: 0.3,
        scale: 1,
        opacity: 1,
        ease: 'power2.out'
      })
    }
  }
}

onMounted(() => {
  // Hide default cursor
  document.body.style.cursor = 'none'
  document.documentElement.style.cursor = 'none'
  
  // Add event listeners
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseenter', handleMouseEnter, true)
  document.addEventListener('mouseleave', handleMouseLeave, true)
  
  // Start cursor animation
  updateCursor()
})

onUnmounted(() => {
  // Restore default cursor
  document.body.style.cursor = 'auto'
  document.documentElement.style.cursor = 'auto'
  
  // Remove event listeners
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseenter', handleMouseEnter, true)
  document.removeEventListener('mouseleave', handleMouseLeave, true)
})
</script>

<style scoped>
.custom-cursor {
  transition: opacity 0.3s ease;
}

.cursor-inner {
  background-color: #31304D;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Hide cursor on touch devices */
@media (hover: none) {
  .custom-cursor {
    display: none;
  }
}

/* Ensure cursor is visible */
.custom-cursor * {
  pointer-events: none;
}
</style>
