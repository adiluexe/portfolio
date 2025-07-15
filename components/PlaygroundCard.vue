<template>
  <div class="group w-full block cursor-hover">
    
    <!-- Video Content -->
    <div v-if="playgroundItem.type === 'video'" class="bg-primary w-full aspect-[4/5] mb-4 overflow-hidden relative cursor-hover rounded-md shadow-md">
      <!-- Clickable overlay for the entire video -->
      <a 
        v-if="playgroundItem.postUrl && playgroundItem.postUrl !== 'https://www.instagram.com/p/YOUR_POST_ID/' && !playgroundItem.postUrl.includes('YOUR_VIDEO_ID')"
        :href="playgroundItem.postUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="absolute inset-0 z-10 cursor-pointer"
        :title="`View ${playgroundItem.name} on ${playgroundItem.postUrl.includes('instagram') ? 'Instagram' : 'TikTok'}`"
      ></a>

      <video 
        :poster="playgroundItem.poster"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        muted 
        loop 
        autoplay
        playsinline
        @mouseenter="$event.target.play()"
        @mouseleave="$event.target.pause()"
      >
        <source :src="playgroundItem.src" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      
      <!-- Play/External link overlay -->
      <div class="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center pointer-events-none">
        <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2">
          <Icon 
            :name="playgroundItem.postUrl && playgroundItem.postUrl !== 'https://www.instagram.com/p/YOUR_POST_ID/' && !playgroundItem.postUrl.includes('YOUR_VIDEO_ID') ? 'mdi:external-link' : 'mdi:play-circle-outline'" 
            class="text-white text-4xl" 
          />
          <span 
            v-if="playgroundItem.postUrl && playgroundItem.postUrl !== 'https://www.instagram.com/p/YOUR_POST_ID/' && !playgroundItem.postUrl.includes('YOUR_VIDEO_ID')"
            class="text-white text-sm font-medium uppercase"
          >
            View on {{ playgroundItem.postUrl.includes('instagram') ? 'Instagram' : 'TikTok' }}
          </span>
        </div>
      </div>

      <!-- Platform indicator (top right) -->
      <!-- <div 
        v-if="playgroundItem.postUrl && playgroundItem.postUrl !== 'https://www.instagram.com/p/YOUR_POST_ID/' && !playgroundItem.postUrl.includes('YOUR_VIDEO_ID')" 
        class="absolute top-3 right-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      >
        <Icon name="mdi:instagram" v-if="playgroundItem.postUrl.includes('instagram')" class="text-white text-lg" />
        <Icon name="mdi:music-note" v-else-if="playgroundItem.postUrl.includes('tiktok')" class="text-white text-lg" />
      </div> -->
    </div>

    <!-- Instagram Embed (Lazy Loaded) -->
    <div v-else-if="playgroundItem.type === 'instagram'" class="bg-primary w-full aspect-[4/5] mb-4 overflow-hidden rounded-lg">
      <iframe 
        :src="playgroundItem.embedUrl" 
        class="w-full h-full border-0"
        loading="lazy"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Default/Placeholder -->
    <div v-else class="bg-primary w-full aspect-[4/5] mb-4 rounded-lg"></div>

    <!-- Clickable Title -->
    <div class="border-b border-text pb-2 tracking-tighter">
      <a 
        v-if="playgroundItem.postUrl && playgroundItem.postUrl !== 'https://www.instagram.com/p/YOUR_POST_ID/' && !playgroundItem.postUrl.includes('YOUR_VIDEO_ID')"
        :href="playgroundItem.postUrl"
        target="_blank"
        rel="noopener noreferrer"
        ref="titleRef"
        class="text-md font-bold uppercase text-left block transition-all duration-300 hover:text-accent cursor-pointer hover:translate-x-2"
        @mouseenter="onTitleHover"
        @mouseleave="onTitleLeave"
      >
        {{ playgroundItem.name }}
        <Icon 
          name="mdi:external-link" 
          class="inline ml-2 text-sm opacity-60"
        />
      </a>
      <h3 
        v-else
        class="text-md font-bold uppercase text-left block"
      >
        {{ playgroundItem.name }}
      </h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  playgroundItem: {
    type: Object,
    required: true
  }
})

const titleRef = ref(null)
const { $gsap } = useNuxtApp()

const onTitleHover = () => {
  if (titleRef.value && $gsap) {
    $gsap.to(titleRef.value, {
      duration: 0.3,
      x: 10,
      ease: 'power2.out'
    })
  }
}

const onTitleLeave = () => {
  if (titleRef.value && $gsap) {
    $gsap.to(titleRef.value, {
      duration: 0.3,
      x: 0,
      ease: 'power2.out'
    })
  }
}
</script>
