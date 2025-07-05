<template>
  <component :is="playgroundItem.link ? 'NuxtLink' : 'div'" :to="playgroundItem.link ? `/playground/${playgroundItem.id}` : null" class="group cursor-pointer w-full">
    <div class="bg-primary w-full aspect-[3/4] mb-4"></div>
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
