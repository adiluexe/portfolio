<template>
  <div class="group cursor-hover w-full relative overflow-hidden">
    <!-- Project Image Container -->
    <div class="relative w-full aspect-[16/9] mb-3 sm:mb-4 overflow-hidden bg-background shadow-md border-1 rounded-md">
      <!-- Special case for collaboration card -->
      <div v-if="project.type === 'Collaboration'" class="w-full h-full flex flex-col items-center justify-center bg-primary text-background uppercase p-4">
        <Icon name="custom:adiluexe-logo" class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 sm:mb-4 animate-spin-slow" />
        <h3 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-center"><span class="font-spice">L</span>et's <span class="font-spice">W</span>ork</h3>
        <p class="text-xs sm:text-sm md:text-base mt-1 sm:mt-2 opacity-80 text-center">Ready for your next project?</p>
      </div>
      
      <!-- Regular project image -->
      <img 
        v-else
        :src="project.image" 
        :alt="project.name"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <!-- Hover Overlay with Actions -->
      <div class="absolute inset-0 bg-accent/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 md:p-6">
        <!-- Project Type Badge -->
        <span class="bg-background text-primary px-2 sm:px-3 py-1 text-xs sm:text-sm uppercase font-bold tracking-wider rounded-full">
          {{ project.type }}
        </span>
        
        <!-- Project Description -->
        <div class="flex-1 flex items-center justify-center">
          <p class="text-center text-xs sm:text-sm md:text-base px-2 sm:px-4 md:px-6 max-w-full text-background uppercase leading-tight overflow-hidden">
            {{ project.description }}
          </p>
        </div>
        
        <!-- Action Buttons -->
        <div class="flex gap-2 sm:gap-3 flex-shrink-0">
          <!-- GitHub Button -->
          <a 
            v-if="project.github"
            :href="project.github" 
            target="_blank"
            class="group/btn relative cursor-hover flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-background border-2 border-background text-primary hover:border-background hover:bg-transparent hover:text-background transition-all duration-300 rounded-full"
            @click.stop
            title="View on GitHub"
          >
            <svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
            </svg>
          </a>
          
          <!-- Website/Email Button -->
          <a 
            v-if="project.website"
            :href="project.website" 
            :target="project.website.startsWith('mailto:') ? '_self' : '_blank'"
            class="group/btn relative cursor-hover flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-transparent border-2 border-background text-background hover:bg-background hover:text-primary transition-all duration-300 rounded-full"
            @click.stop
            :title="project.website.startsWith('mailto:') ? 'Send Email' : 'Visit Website'"
          >
            <svg v-if="project.website.startsWith('mailto:')" class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>
            <svg v-else class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
            </svg>
          </a>
          
          <!-- Mobile App Download (GitHub Releases) -->
          <a 
            v-else-if="project.type.includes('Mobile') && project.github"
            :href="project.github + '/releases'" 
            target="_blank"
            class="group/btn relative cursor-hover flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-transparent border-2 border-background text-background hover:bg-background hover:text-primary transition-all duration-300 rounded-full"
            @click.stop
            title="Download App"
          >
            <svg class="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.11 5.89,23 7,23H17C18.11,23 19,22.11 19,21V3C19,1.89 18.11,1 17,1Z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    
    <!-- Project Info -->
    <div class="flex justify-between items-start gap-2 border-b border-text pb-2 px-1 tracking-tighter">
      <h3 class="text-sm sm:text-base md:text-lg font-bold uppercase flex-shrink-0">{{ project.name }}</h3>
      <p class="text-xs sm:text-sm uppercase text-right flex-shrink-0 ml-2 opacity-70 sm:opacity-100 leading-tight">{{ project.stack }}</p>
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
