// Plugins
import { unheadVueComposablesImports } from '@unhead/vue'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import Sitemap from 'vite-plugin-sitemap'
import MetaLayouts from 'vite-plugin-vue-meta-layouts'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// Utilities
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({}),
    vue({
      template: { transformAssetUrls }
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    AutoImport({
      dts: true,
      imports: [
        'vue',
        VueRouterAutoImports,
        unheadVueComposablesImports,
        {
          '@vueuse/core': [
            'useWindowSize',
            'useLocalStorage',
            'useWindowScroll',
          ]
        },
        {
          'vuetify': ['useTheme', 'useDisplay']
        }
      ]
    }),
    Sitemap({}),
    MetaLayouts({
      defaultLayout: 'defaultLayout',
    }),
    Components({
      dts: true,
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.vue',
    ],
  },
  server: {
    port: 3000,
  },
})
