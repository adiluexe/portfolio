<template>
  <div class="group cursor-pointer w-full">
    <div class="bg-primary w-full aspect-[16/9] mb-4"></div>
    <div class="flex justify-between items-center border-b border-text pb-2 tracking-tighter">
      <h3 class="text-md font-bold uppercase">{{ project.name }}</h3>
      <p class="text-sm uppercase">{{ project.stack }}</p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    project: {
      type: Object,
      required: true
    }
  })
</script>
