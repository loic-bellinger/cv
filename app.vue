<script setup lang="ts">
import { useRuntimeConfig } from '#imports'

const { siteUrl, baseURL } = useRuntimeConfig()
const baseUrl = `${siteUrl}${baseURL}`
const avatarUrl = `${baseUrl}avatar.png`

if (import.meta.server) {
  const { t } = useI18n()
  const i18nHead = useLocaleHead()
  useHead({
    title: t('seo.title'),
    htmlAttrs: {
      lang: i18nHead.value.htmlAttrs!.lang
    },
    link: [...(i18nHead.value.link || []),
      { rel: 'icon', type: 'image/png', href: `${baseUrl}favicon.png` }],
    meta: [...(i18nHead.value.meta || [])]
  })

  useSeoMeta({
    description: t('summary'),
    applicationName: t('name'),
    author: t('name'),

    // Search engines
    robots: 'index, follow',

    // Open Graph
    ogUrl: baseUrl,
    ogTitle: t('seo.title'),
    ogDescription: t('about'),
    ogType: 'website',
    ogSiteName: t('name'),
    ogImage: {
      url: avatarUrl,
      width: 400,
      height: 400,
      alt: t('seo.avatarAlt')
    },

    // Twitter Card
    twitterCard: 'summary_large_image',
    twitterTitle: t('seo.title'),
    twitterDescription: t('about'),
    twitterImage: {
      url: avatarUrl,
      alt: t('seo.avatarAlt')
    },
    twitterSite: '@alexjohnson',
    twitterCreator: '@alexjohnson'
  })
}
</script>

<template>
  <NuxtPage />
</template>
