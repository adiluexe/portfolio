<script setup>
import { onMounted, ref } from 'vue'

// SEO Meta Tags for Playground Page
useSeoMeta({
  title: 'Playground - Exequel Adizon',
  description: 'Discover experimental projects and creative explorations by Exequel Adizon (@adiluexe). A collection of innovative digital experiments and artistic endeavors.',
  ogTitle: 'Playground - Exequel Adizon',
  ogDescription: 'Discover experimental projects and creative explorations by Exequel Adizon (@adiluexe). A collection of innovative digital experiments and artistic endeavors.',
  ogImage: '/images/og-image.jpg',
  twitterTitle: 'Playground - Exequel Adizon',
  twitterDescription: 'Discover experimental projects and creative explorations by Exequel Adizon (@adiluexe). A collection of innovative digital experiments and artistic endeavors.',
  twitterImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image'
})

const { $gsap } = useNuxtApp()

const playgroundContent = ref(null)

const playgroundItems = ref([
  { 
    id: 1, 
    name: 'BLUE HAIR', 
    type: 'video',
    src: '/videos/bluehair.mp4',
    poster: '/images/bluehair.jpg',
    postUrl: 'https://www.instagram.com/p/C9UlcOCPpk1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==', // Replace with actual URL
    link: true 
  },
  { 
    id: 2, 
    name: 'BREAKING BAD', 
    type: 'video',
    src: '/videos/breaking_bad.mp4',
    poster: '/images/0.1 - Breaking Bad-thumb.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 3, 
    name: 'CHANGE OF HEART', 
    type: 'video',
    src: '/videos/change_of_heart.mp4',
    poster: '/images/change_of_heart.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 4, 
    name: 'CLOUDS', 
    type: 'video',
    src: '/videos/clouds.mp4',
    poster: '/images/clouds.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 5, 
    name: 'COMETHRU', 
    type: 'video',
    src: '/videos/comethru.mp4',
    poster: '/images/comethru.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 6, 
    name: 'FE!N', 
    type: 'video',
    src: '/videos/fein.mp4',
    poster: '/images/fein.jpg',
    postUrl: 'https://www.tiktok.com/@adiluexe/video/YOUR_VIDEO_ID', // Replace with actual URL
    link: true 
  },
  { 
    id: 7, 
    name: 'FROM THE START', 
    type: 'video',
    src: '/videos/from_the_start.mp4',
    poster: '/images/from_the_start.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 8, 
    name: 'GABI', 
    type: 'video',
    src: '/videos/gabi.mp4',
    poster: '/images/gabi.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 9, 
    name: 'GKYAM', 
    type: 'video',
    src: '/videos/gkyam.mp4',
    poster: '/images/gkyam.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 10, 
    name: 'IDILY', 
    type: 'video',
    src: '/videos/idily.mp4',
    poster: '/images/idily`.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 11, 
    name: 'KALAWAKAN', 
    type: 'video',
    src: '/videos/kalawakan.mp4',
    poster: '/images/kalawakan.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 12, 
    name: 'LEONORA', 
    type: 'video',
    src: '/videos/leonora.mp4',
    poster: '/images/leonora.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 13, 
    name: 'LOOK BACK', 
    type: 'video',
    src: '/videos/look_back.mp4',
    poster: '/images/look_back.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 14, 
    name: 'MISS MOSH', 
    type: 'video',
    src: '/videos/miss_mosh.mp4',
    poster: '/images/miss_mosh.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 15, 
    name: 'MIXED PERSONALITIES', 
    type: 'video',
    src: '/videos/mixed_personalities.mp4',
    poster: '/images/mixed_personalities.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 16, 
    name: 'NANG TAHIMIK', 
    type: 'video',
    src: '/videos/nang_tahimik.mp4',
    poster: '/images/nang_tahimik.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 17, 
    name: 'NGAYON KAYA', 
    type: 'video',
    src: '/videos/ngayon_kaya.mp4',
    poster: '/images/ngayon_kaya.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 18, 
    name: 'NO SURPRISES', 
    type: 'video',
    src: '/videos/no_surprises.mp4',
    poster: '/images/no_surprises.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 19, 
    name: 'PEKLAT CREAM', 
    type: 'video',
    src: '/videos/peklat_cream.mp4',
    poster: '/images/peklat_cream.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 20, 
    name: 'PRETTY BOY', 
    type: 'video',
    src: '/videos/pretty_boy.mp4',
    poster: '/images/pretty_boy.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 21, 
    name: 'SEGURISTA', 
    type: 'video',
    src: '/videos/segurista.mp4',
    poster: '/images/segurista.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 22, 
    name: 'SHOT PUNO', 
    type: 'video',
    src: '/videos/shot_puno.mp4',
    poster: '/images/shot_puno.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 23, 
    name: 'SINCERITY', 
    type: 'video',
    src: '/videos/sincerity.mp4',
    poster: '/images/sincerity.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 24, 
    name: 'SISIKAT KA IHA', 
    type: 'video',
    src: '/videos/sisikat_ka_iha.mp4',
    poster: '/images/sisikat_ka_iha.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 25, 
    name: 'TRAINGAZING', 
    type: 'video',
    src: '/videos/traingazing.mp4',
    poster: '/images/traingazing.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 26, 
    name: 'WALL-E', 
    type: 'video',
    src: '/videos/walle.mp4',
    poster: '/images/walle.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
  { 
    id: 27, 
    name: 'WALTZ OF FOUR LEFT FEET', 
    type: 'video',
    src: '/videos/waltz_of_four_left_feet.mp4',
    poster: '/images/waltz_of_four_left_feet.jpg',
    postUrl: 'https://www.instagram.com/p/YOUR_POST_ID/', // Replace with actual URL
    link: true 
  },
])

onMounted(() => {
  $gsap.from(playgroundContent.value.children, {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    ease: 'power4.out',
  })
})
</script>

<template>
  <div class="w-full min-h-screen flex flex-col justify-center text-center py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-0">
    <div ref="playgroundContent" class="w-full">
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-normal uppercase tracking-tighter mb-8 md:mb-12 lg:mb-16 font-satoshi"><span class="font-spice">P</span>layground</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 p-8">
        <PlaygroundCard v-for="item in playgroundItems" :key="item.id" :playgroundItem="item" />
      </div>
    </div>
  </div>
</template>
