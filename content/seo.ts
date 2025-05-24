import type { MetaFlatInput } from '@nuxt/content'
import { resume } from '~/content/resume'

const altImg = `${resume.name} - Full Stack Developer Profile Photo`

/**
 * SEO meta object for use with Nuxt useSeoMeta().
 */
export const seoMeta: MetaFlatInput = {
  description: resume.summary,
  applicationName: resume.name,
  author: resume.name,

  // Search engines
  robots: 'index, follow',

  // Open Graph
  ogUrl: process.env.NUXT_PUBLIC_SITE_URL,
  ogTitle: `${resume.name} — Full Stack Developer`,
  ogDescription: resume.about,
  ogType: 'website',
  ogSiteName: `${resume.name} Resume`,
  ogLocale: 'en_US',
  ogImage: {
    url: `${process.env.NUXT_PUBLIC_SITE_URL}${resume.avatarUrl}`,
    width: 400,
    height: 400,
    alt: altImg
  },

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: `${resume.name} — Full Stack Developer`,
  twitterDescription: resume.about,
  twitterImage: {
    url: `${process.env.NUXT_PUBLIC_SITE_URL}${resume.avatarUrl}`,
    alt: altImg
  },
  twitterSite: '@alexjohnson',
  twitterCreator: '@alexjohnson'
}
