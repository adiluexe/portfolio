<template>
  <header class="bg-gray-800 text-white p-4">
    <nav class="container mx-auto flex justify-between">
      <NuxtLink to="/" class="font-bold text-xl">MyPortfolio</NuxtLink>
      <ul class="flex space-x-4">
        <li><NuxtLink to="/" class="hover:text-gray-400">Home</NuxtLink></li>
        <li><NuxtLink to="/about" class="hover:text-gray-400">About</NuxtLink></li>
        <li><NuxtLink to="/works" class="hover:text-gray-400">Works</NuxtLink></li>
        <li><NuxtLink to="/playground" class="hover:text-gray-400">Playground</NuxtLink></li>
        <li><NuxtLink to="/contact" class="hover:text-gray-400">Contact</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
