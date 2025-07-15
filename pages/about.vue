<script setup>
import { onMounted, ref } from 'vue'

// SEO Meta Tags for About Page
useSeoMeta({
  title: 'About - Exequel Adizon',
  description: 'Learn more about Exequel Adizon (@adiluexe), a creative developer and designer from Taguig, Philippines. Discover my journey, skills, and passion for digital experiences.',
  ogTitle: 'About - Exequel Adizon',
  ogDescription: 'Learn more about Exequel Adizon (@adiluexe), a creative developer and designer from Taguig, Philippines. Discover my journey, skills, and passion for digital experiences.',
  ogImage: '/images/og-image.jpg',
  twitterTitle: 'About - Exequel Adizon',
  twitterDescription: 'Learn more about Exequel Adizon (@adiluexe), a creative developer and designer from Taguig, Philippines. Discover my journey, skills, and passion for digital experiences.',
  twitterImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image'
})

const { $gsap } = useNuxtApp()

const aboutContent = ref(null)
const titleTextRef = ref(null)
const contentContainer = ref(null)
let morphTimeline = null
const isContentRevealed = ref(false)

const texts = [
  '<span class="font-spice">A</span>bout',
  '<span class="font-spice">M</span>y <span class="font-spice">S</span>tory',
  '<span class="font-spice">W</span>ho I <span class="font-spice">A</span>m'
]
let currentIndex = 0

const startMorphEffect = () => {
  if (morphTimeline) morphTimeline.kill()
  
  morphTimeline = $gsap.timeline({ repeat: -1 })
  
  morphTimeline
    .to({}, { duration: 0.8 })
    .add(() => {
      currentIndex = (currentIndex + 1) % texts.length
    })
    .to(titleTextRef.value, {
      duration: 0.25,
      scaleY: 0.7,
      scaleX: 1.3,
      skewX: 15,
      filter: 'blur(2px)',
      ease: 'power2.inOut'
    })
    .to(titleTextRef.value, {
      duration: 0.2,
      scaleY: 0.3,
      scaleX: 0.6,
      skewX: -20,
      rotationY: 45,
      filter: 'blur(4px)',
      ease: 'power2.inOut'
    })
    .call(() => {
      titleTextRef.value.innerHTML = texts[currentIndex]
    })
    .to(titleTextRef.value, {
      duration: 0.2,
      scaleY: 1.4,
      scaleX: 0.8,
      skewX: 10,
      rotationY: -20,
      filter: 'blur(3px)',
      ease: 'power2.inOut'
    })
    .to(titleTextRef.value, {
      duration: 0.35,
      scaleY: 1,
      scaleX: 1,
      skewX: 0,
      rotationY: 0,
      filter: 'blur(0px)',
      ease: 'elastic.out(1, 0.8)'
    })
    .to({}, { duration: 0.6 })
}

const stopMorphEffect = () => {
  if (morphTimeline) {
    morphTimeline.kill()
    morphTimeline = null
  }
  
  currentIndex = 0
  titleTextRef.value.innerHTML = texts[0]
  $gsap.to(titleTextRef.value, {
    duration: 0.6,
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    rotationY: 0,
    filter: 'blur(0px)',
    ease: 'elastic.out(1, 0.7)'
  })
}

const toggleContentVisibility = () => {
  if (!contentContainer.value) return
  
  const textNodes = contentContainer.value.querySelectorAll('p')
  
  if (isContentRevealed.value) {
    // Hide content - show only highlighted spans
    isContentRevealed.value = false
    
    textNodes.forEach(paragraph => {
      const walker = document.createTreeWalker(
        paragraph,
        NodeFilter.SHOW_TEXT,
        null,
        false
      )
      
      const textNodesToCensor = []
      let node
      while (node = walker.nextNode()) {
        // Skip text nodes that are inside spans (highlighted content)
        if (!node.parentElement.closest('span') && node.textContent.trim()) {
          textNodesToCensor.push(node)
        }
      }
      
      // Animate hiding non-highlighted text
      textNodesToCensor.forEach(textNode => {
        const wrapper = document.createElement('span')
        wrapper.className = 'censored-text'
        wrapper.style.cssText = `
          background: repeating-linear-gradient(45deg, #333, #333 4px, #555 4px, #555 8px);
          color: transparent;
          border-radius: 2px;
          filter: blur(2px);
          opacity: 0.8;
        `
        textNode.parentNode.insertBefore(wrapper, textNode)
        wrapper.appendChild(textNode)
        
        $gsap.fromTo(wrapper, 
          { filter: 'blur(0px)', opacity: 1 },
          { filter: 'blur(2px)', opacity: 0.8, duration: 0.2 }
        )
      })
    })
  } else {
    // Reveal content - show all text with immediate transition
    isContentRevealed.value = true
    
    const censoredElements = contentContainer.value.querySelectorAll('.censored-text')
    
    // Instantly remove censored wrappers and show clean text
    censoredElements.forEach(wrapper => {
      const textNode = wrapper.firstChild
      wrapper.parentNode.insertBefore(textNode, wrapper)
      wrapper.remove()
    })
    
    // Immediate fade-in of the clean text
    const allTextNodes = contentContainer.value.querySelectorAll('p')
    $gsap.fromTo(allTextNodes, 
      { opacity: 0.8 },
      { opacity: 1, duration: 0.1, ease: 'power2.out' }
    )
  }
}

const initializeCensoredText = () => {
  if (!contentContainer.value) return
  
  const textNodes = contentContainer.value.querySelectorAll('p')
  
  textNodes.forEach(paragraph => {
    const walker = document.createTreeWalker(
      paragraph,
      NodeFilter.SHOW_TEXT,
      null,
      false
    )
    
    const textNodesToCensor = []
    let node
    while (node = walker.nextNode()) {
      // Skip text nodes that are inside spans (highlighted content)
      if (!node.parentElement.closest('span') && node.textContent.trim()) {
        textNodesToCensor.push(node)
      }
    }
    
    // Wrap non-highlighted text with censored styling
    textNodesToCensor.forEach(textNode => {
      const wrapper = document.createElement('span')
      wrapper.className = 'censored-text'
      wrapper.style.cssText = `
        background: repeating-linear-gradient(45deg, #333, #333 4px, #555 4px, #555 8px);
        color: transparent;
        border-radius: 2px;
        filter: blur(2px);
        opacity: 0.8;
      `
      textNode.parentNode.insertBefore(wrapper, textNode)
      wrapper.appendChild(textNode)
    })
  })
}

onMounted(() => {
  $gsap.from(aboutContent.value.children, {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.1,
    ease: 'power4.out',
  })
  
  // Initialize censored text effect after a short delay
  setTimeout(() => {
    initializeCensoredText()
  }, 1200)
})
</script>

<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-center text-center py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-0">
    <div ref="aboutContent">
      <h1 
        class="text-5xl md:text-7xl lg:text-8xl font-normal uppercase tracking-tighter mb-8 md:mb-12 lg:mb-16 font-satoshi cursor-hover"
        @mouseenter="startMorphEffect"
        @mouseleave="stopMorphEffect"
      >
        <span ref="titleTextRef"><span class="font-spice">A</span>bout</span>
      </h1>
      <div class="w-full h-64 bg-primary mx-auto mb-4"></div>
      <div class="w-px h-24 bg-text mx-auto mb-4"></div>
      
      <!-- Interactive Content Toggle Button -->
      <div class="mb-6">
        <button 
          @click="toggleContentVisibility"
          class="group relative cursor-hover bg-primary text-background px-6 py-3 uppercase font-bold tracking-wider hover:bg-background hover:text-primary border-2 border-primary transition-all duration-300"
        >
          {{ isContentRevealed ? 'Show Summary' : 'Read Full Story' }}
          <span class="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left -z-10"></span>
        </button>
        <p class="text-sm mt-2 opacity-70">
          {{ isContentRevealed ? 'Click to see key highlights only' : 'Click to reveal the complete story' }}
        </p>
      </div>
      
      <div ref="contentContainer" class="max-w-4xl text-md space-y-6 mb-4 tracking-tight text-center uppercase">
        <div>
          <h2 class="text-2xl font-bold mb-4 uppercase">ABOUT ME</h2>
          <p><span class="highlight-text">Hi, I'm Exequel Adizon</span>! I'm currently an incoming fourth-year <span class="highlight-text">Computer Science student</span> with a <span class="highlight-text">keen interest in both design and development</span>. I'm exploring career paths as a <span class="highlight-text">UI/UX Designer and Full-stack Developer.</span></p>
        </div>

        <div>
          <h3 class="text-2xl font-bold mb-4 uppercase">My Journey into Design</h3>
          <p class="mb-4">My passion for design actually started with a love for drawing when I was young, which naturally led me to more creative pursuits. I delved into editing early on, experimenting with tools like Pizap, PicsArt, and Canva, before eventually mastering <span class="highlight-text">professional software like Adobe Photoshop, Illustrator, and Figma.</span></p>
          
          <p class="mb-4">I entered the design field quite early. In high school, I was already editing posts and graphics for various Facebook pages. This led to my role as the <span class="highlight-text">layout artist</span> for our <span class="highlight-text">school's English journalism publication, "The Masonry,"</span> where our newspaper proudly <span class="highlight-text">won several awards at the DSPC and RSPC in 2019.</span></p>
          
          <p class="mb-4">In university, I had the honor of being the inaugural <span class="highlight-text">Head of Graphics for Fortem Ardeas Esports</span>, the University of Makati's premier esports organization. There, I <span class="highlight-text">established the brand identity and managed a vast array of graphics</span>, from live broadcast visuals to real-time graphic edits. I also created deliverables for internal events and <span class="highlight-text">collaborated with prominent esports brands such as Moonton Philippines, AcadArena, and Tier One Entertainment.</span></p>

          <p>
            Around this time, I was also <span class="highlight-text">taking on freelance design projects</span> alongside my organizational work. The money was good, but I eventually hit a <span class="highlight-text">burnout</span>; designing wasn't fun anymore, and I started losing interest. This experience led me to create an account purely for posting whatever I wanted to create. This proved to be a very therapeutic process, giving me the confidence I needed to fall back in love with design. The works you see in my "playground" section are all from that account, which <span class="highlight-text">amassed over 1 million views and half a million likes</span> in just a month of posting. Although I've stopped posting on that account to focus on more programming related activities, I'm incredibly grateful for that experience and aspire to replicate its success someday.
          </p>
        </div>

        <div>
          <h3 class="text-2xl font-bold mb-4 uppercase">My Exploration into Development</h3>
          <p class="mb-4">I first discovered programming in 9th grade during my ICT classes, where I learned to build websites using HTML, CSS, and JavaScript. That same year, I was also the <span class="highlight-text">programmer for</span> our school's <span class="highlight-text">robotics team, "THS Overdrive",</span> where we even <span class="highlight-text">won first place in the Programming Category of VEX IQ Robotics Competition.</span></p>
          
          <p class="mb-4">Honestly, it wasn't until college (and very recently) that I truly immersed myself in Computer Science and reignited my passion for programming. Looking back, I sometimes regret not pursuing it more seriously when I was younger, but I'm making up for lost time. This past year alone has been incredibly transformative. I've <span class="highlight-text">participated in three hackathons</span> (no wins yet, but the experience has been invaluable).</p>
          
          <p>I've gained proficiency in <span class="highlight-text">mobile app development using Flutter and React Native</span>, and I've moved beyond vanilla web development to explore powerful <span class="highlight-text">frameworks and libraries like Next.js and React</span>. To truly call myself a full-stack developer, I've also delved into <span class="highlight-text">backend development, building and managing databases and APIs</span>. On top of all this, I've <span class="highlight-text">successfully completed several freelance programming projects</span>.</p>
        </div>

        <div>
          <Icon name="custom:adiluexe-logo" class="block mb-4 mx-auto text-sm animate-bounce" />
          <h3 class="text-2xl font-bold mb-4 uppercase">Let's Connect</h3>
          <p>If you're looking for someone who's <span class="highlight-text">proficient in both design and programming</span>—someone who <span class="highlight-text">blends technical skills with a creative mindset</span>—please feel free to reach out! I'm still <span class="highlight-text">open to freelance opportunities</span>, but I'm particularly <span class="highlight-text">keen on gaining more formal experience in the tech industry</span>, as most of my work thus far has been self-driven.</p>
        </div>
      </div>
      <div class="w-px h-24 bg-text mx-auto mb-4"></div>
      <div class="text-center">
        <a 
          href="mailto:exequel.adizon@gmail.com"
          class="group relative inline-flex items-center gap-2 cursor-hover transition-all duration-300 mb-4"
        >
          <span class="relative group-hover:text-primary transition-colors duration-300 text-4xl">
        EXEQUEL.ADIZON@GMAIL.COM
        <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
          </span>
          <svg class="w-6 h-6 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
          </svg>
        </a>
        <div class="flex items-center justify-center gap-4 text-4xl">
          <a 
        href="https://github.com/adiluexe" 
        target="_blank"
        class="group relative flex items-center gap-2 cursor-hover transition-all duration-300"
          >
        <span class="relative group-hover:text-primary transition-colors duration-300">
          GITHUB
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
        </span>
        <svg class="w-6 h-6 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
        </svg>
          </a>
          <span class="text-4xl font-satoshi">/</span>
          <a 
        href="https://www.linkedin.com/in/exequel-adizon/" 
        target="_blank"
        class="group relative flex items-center gap-2 cursor-hover transition-all duration-300"
          >
        <span class="relative group-hover:text-primary transition-colors duration-300">
          LINKEDIN
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 ease-out group-hover:w-full"></span>
        </span>
        <svg class="w-6 h-6 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z" />
        </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.highlight-text {
  color: var(--color-primary);
  font-weight: 500;
  position: relative;
}

.censored-text {
  display: inline;
  position: relative;
}

.censored-text:hover {
  cursor: pointer;
}
</style>
