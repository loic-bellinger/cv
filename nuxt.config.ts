export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Alex Johnson\'s Resume',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/png', href: process.env.NUXT_APP_BASE_URL ? `${process.env.NUXT_APP_BASE_URL}favicon.png` : '/favicon.png' }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never'
      }
    }
  }
})
