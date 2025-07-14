// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
  ],

  css: ["~/assets/css/main.css"],
  ssr: true,
  future: {
    compatibilityVersion: 4,
  },
  ui: {
    colorMode: false,
  },

  compatibilityDate: "2024-11-27",
  googleFonts: {
    families: {
      "Plus Jakarta Sans": true,
      Lora: true,
    },
    display: "swap",
  },
});
