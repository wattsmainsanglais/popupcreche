import type { MetadataRoute } from 'next'

import { routing } from '@/i18n/routing'

const baseUrl = 'https://www.thepopupweddingcreche.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  return routing.locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
    alternates: {
      languages: Object.fromEntries(routing.locales.map((l) => [l, `${baseUrl}/${l}`])),
    },
  }))
}
