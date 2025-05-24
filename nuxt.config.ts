export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/test-utils', '@nuxt/ui', '@nuxtjs/i18n'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    siteUrl: process.env.NUXT_PUBLIC_SITE_URL || ''
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never'
      }
    }
  },
  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || '',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    bundle: { runtimeOnly: true },
    locales: [
      { code: 'en', name: 'English', file: 'en-US.ts', language: 'en-US' },
      { code: 'fr', name: 'French', file: 'fr-FR.ts', language: 'fr-FR' }
    ],
    lazy: true,
    detectBrowserLanguage: false
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
