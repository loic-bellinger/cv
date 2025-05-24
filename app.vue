<script setup lang="ts">
import { resume } from '~/content/resume.ts'
import { seoMeta } from '~/content/seo.ts'

if (import.meta.server) {
  useHead({
    title: resume.name,
    titleTemplate: '%s Resume'
  })
  useSeoMeta(seoMeta)
}
</script>

<template>
  <NuxtPage />
</template>
