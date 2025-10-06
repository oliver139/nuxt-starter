// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import theme from './prime.config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@primevue/nuxt-module',
    '@vueuse/nuxt',
  ],
  css: ['@/assets/css/main.css'],
  imports: {
    dirs: ['stores'],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  primevue: {
    options: theme,
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'postcss-nested': {},
    },
  },
})
