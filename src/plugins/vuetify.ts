/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@/assets/styles/main.scss'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#8B4513',
          secondary: '#444',
          background: 'rgb(229, 231, 235)',
          surface: 'rgb(218, 217, 213)',
        },
      },
    },
  },
  defaults: {
    VBtn: {
      rounded: 0,
      color: 'secondary',
      ripple: false,
    }
  }
})
