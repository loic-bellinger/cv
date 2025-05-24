<script setup lang="ts">
const { t } = useI18n()
const i18nHead = useLocaleHead({ key: 'id' })
const config = useRuntimeConfig()
const baseUrl = `${config.public.i18n.baseUrl}${config.app.baseURL}`
const avatarUrl = `${baseUrl}avatar.png`

if (import.meta.server) {
  useSeoMeta({
    // Search engines
    robots: 'index, follow',
    ogType: 'website',
    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterSite: '@alexjohnson',
    twitterCreator: '@alexjohnson'
  })
}

useHead(() => ({
  title: t('seo.title'),
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang
  },
  link: [...(i18nHead.value.link || []), { rel: 'icon', type: 'image/png', href: `${baseUrl}favicon.png` }],
  meta: [...(i18nHead.value.meta || [])]
}))

useSeoMeta({
  description: () => t('summary'),
  applicationName: () => t('name'),
  author: () => t('name'),
  // Open Graph
  ogTitle: () => t('seo.title'),
  ogDescription: () => t('about'),
  ogSiteName: () => t('name'),
  ogImage: {
    url: avatarUrl,
    width: 400,
    height: 400,
    alt: () => t('seo.avatarAlt')
  },
  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.title'),
  twitterDescription: () => t('about'),
  twitterImage: {
    url: avatarUrl,
    alt: () => t('seo.avatarAlt')
  }
})
</script>

<template>
  <NuxtPage />
</template>
