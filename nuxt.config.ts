// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/image"],

  // App configuration
  app: {
    head: {
      title: "Exequel Adizon - Portfolio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Portfolio of Exequel Adizon - Creative Developer, Designer & Digital Artist",
        },
        { name: "author", content: "Exequel Adizon" },
        {
          name: "keywords",
          content:
            "portfolio, developer, designer, creative, digital art, web development",
        },

        // Open Graph / Facebook
        { property: "og:type", content: "website" },
        { property: "og:title", content: "Exequel Adizon - Portfolio" },
        {
          property: "og:description",
          content:
            "Portfolio of Exequel Adizon - Creative Developer, Designer & Digital Artist",
        },
        { property: "og:image", content: "/images/og-image.jpg" },
        { property: "og:url", content: "https://adiluexe.com" },

        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Exequel Adizon - Portfolio" },
        {
          name: "twitter:description",
          content:
            "Portfolio of Exequel Adizon - Creative Developer, Designer & Digital Artist",
        },
        { name: "twitter:image", content: "/images/og-image.jpg" },

        // Additional SEO
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#000000" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "canonical", href: "https://adiluexe.com" },
      ],
    },
  },

  icon: {
    customCollections: [
      {
        prefix: "custom",
        dir: "./assets/svg",
      },
    ],
  },
  css: ["~/assets/css/main.css"],
});