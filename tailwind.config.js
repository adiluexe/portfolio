/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F0ECE5',
        text: '#0B0D18',
        primary: '#31304D',
        accent: '#161A30',
        alt: '#B6BBC4',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        centrion: ['Centrion', 'sans-serif'],
        'centrion-high': ['Centrion-High', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      }
    },
  },
  plugins: [],
}

