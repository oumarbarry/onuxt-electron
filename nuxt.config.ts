export default defineNuxtConfig({
  typescript: { shim: false },

  ssr: false,

  css: ['@unocss/reset/tailwind.css'],

  modules: [
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-electron',
    '@nuxt/devtools',
  ],
})
