export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/test-utils', '@nuxt/ui', '@nuxtjs/i18n'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-05-15',
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never'
      }
    }
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    bundle: { runtimeOnly: true, optimizeTranslationDirective: false },
    locales: [
      { code: 'en', name: 'English', file: 'en-US.ts', language: 'en-US' },
      { code: 'fr', name: 'Français', file: 'fr-FR.ts', language: 'fr-FR' }
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
      icons: ['lucide:loader-circle', 'lucide:check', 'lucide:chevron-down', 'lucide:mail', 'lucide:phone', 'lucide:github', 'lucide:linkedin']
    }
  }
})
