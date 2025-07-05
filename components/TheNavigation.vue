<template>
  <nav class="fixed inset-0 flex items-center justify-center z-40 pointer-events-none">
    <div class="w-full max-w-9xl px-8">
      <ul class="flex items-center justify-around uppercase text-sm">
        <li>
          <NuxtLink to="/about" class="pointer-events-auto hover:text-gray-400 text-left">
            <span class="block text-xs font-semibold">01</span>
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/works" class="pointer-events-auto hover:text-gray-400 text-left">
            <span class="block text-xs font-semibold">02</span>
            Works
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="pointer-events-auto hover:text-gray-400 text-left">
            <span class="block text-xs font-semibold">03</span>
            Contact
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/playground" class="pointer-events-auto hover:text-gray-400 text-left">
            <span class="block text-xs font-semibold">04</span>
            Playground
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
