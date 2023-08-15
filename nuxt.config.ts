// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  css: ['/assets/styles/main.scss'],
  modules: [
    '@vite-pwa/nuxt',
    'vuetify-nuxt-module',
    '@unocss/nuxt',
    'nuxt-seo-experiments',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    'nuxt-og-image',
    // 'nuxt-gtag',
    'nuxt-vitest',
    // '@nuxt/content',
    // 'nuxt-content-assets',
    '@vueuse/nuxt',
    'nuxt-typed-router',
    '@pinia/nuxt',
    // '@sidebase/nuxt-pdf',
    '@nuxtjs/i18n',
    // '@tresjs/nuxt',
    // 'nuxt3-leaflet',
    // '@productdevbook/chatwoot',
    // '@nuxtjs/partytown',
  ],
  pinia: {
    autoImports: [
      'defineStore', 'storeToRefs',
    ]
  },
  vuetify: {
    moduleOptions: {
      styles: "sass",
    },
    vuetifyOptions: {
      theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              primary: '#8B4513',
              secondary: '#444',
              background: 'rgb(229, 231, 235)',
              surface: 'rgb(218, 217, 213)'
            }
          }
        }
      },
      defaults: {
        VBtn: {
          color: 'secondary',
          rounded: 0,
        }
      }
    }
  }
})
