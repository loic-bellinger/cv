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
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'canonical', href: process.env.NUXT_PUBLIC_SITE_URL },
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
  },
  icon: {
    // Don’t fetch from any API at runtime
    provider: 'none',

    // Bundle every icon referenced in the source
    clientBundle: {
      // scan all the components for `<Icon name="..." />`
      scan: true,

      // Fixed list:
      icons: ['lucide:refresh-cw', 'lucide:chevron-down', 'lucide:mail', 'lucide:phone', 'lucide:github', 'lucide:linkedin']
    }
  }
})
