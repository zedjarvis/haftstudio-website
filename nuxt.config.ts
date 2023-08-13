// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    'vuetify-nuxt-module',
    '@vite-pwa/nuxt',
    '@unocss/nuxt',
    'nuxt-seo-experiments',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    'nuxt-og-image',
    'nuxt-gtag',
    'nuxt-vitest',
    'nuxt-content-assets',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-typed-router',
    '@pinia/nuxt',
    '@sidebase/nuxt-pdf',
    '@nuxtjs/i18n',
    '@tresjs/nuxt',
    'nuxt3-leaflet',
    // '@productdevbook/chatwoot',
    '@nuxtjs/partytown',
  ],
  vuetify: {
    moduleOptions: {
      styles: "sass",
    },
  }
})
