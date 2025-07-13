<template>
  <component 
    :is="playgroundItem.postUrl ? 'a' : (playgroundItem.link ? 'NuxtLink' : 'div')" 
    :href="playgroundItem.postUrl || null"
    :to="playgroundItem.link && !playgroundItem.postUrl ? `/playground/${playgroundItem.id}` : null" 
    :target="playgroundItem.postUrl ? '_blank' : null"
    :rel="playgroundItem.postUrl ? 'noopener noreferrer' : null"
    class="group cursor-pointer w-full block"
  >
    
    <!-- Video Content -->
    <div v-if="playgroundItem.type === 'video'" class="bg-primary w-full aspect-[4/5] mb-4 overflow-hidden rounded-lg relative">
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
      <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
        <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Icon 
            :name="playgroundItem.postUrl ? 'mdi:external-link' : 'mdi:play-circle-outline'" 
            class="text-white text-4xl" 
          />
        </div>
      </div>
      <!-- Post URL indicator -->
      <div v-if="playgroundItem.postUrl" class="absolute top-3 right-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
        <Icon name="mdi:instagram" v-if="playgroundItem.postUrl.includes('instagram')" class="text-white text-xl" />
        <Icon name="mdi:music-note" v-else-if="playgroundItem.postUrl.includes('tiktok')" class="text-white text-xl" />
      </div>
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

    <div class="border-b border-text pb-2 tracking-tighter">
      <h3 class="text-md font-bold uppercase text-left">{{ playgroundItem.name }}</h3>
    </div>
  </component>
</template>

<script setup>
  defineProps({
    playgroundItem: {
      type: Object,
      required: true
    }
  })
</script>
