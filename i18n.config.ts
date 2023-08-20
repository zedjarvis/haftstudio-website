export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      home: 'home',
      products: 'products',
      projects: 'projects',
      company: 'company',
      designers: 'designers',
      blog: 'blog',
      contact: 'contact',
      aboutUs: 'about us',
      homeDesc: `Established in 2011, Haft
              Studio's visionary pursuit is enriched by its use of unique materials like matope-crete, timber, stone, and
              papyrus reeds.This creative force harmoniously melds an African aesthetic into urban landscapes, setting
              new benchmarks in creativity, authenticity, and reliability.`,
      $vuetify: {
        carousel: {
          prev: 'Previous',
          next: 'Next',
        }
      }
    },
  }
}))
