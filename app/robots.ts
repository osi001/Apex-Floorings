import type { MetadataRoute } from 'next'

const BASE_URL = 'https://apexfloorings.ng' // Replace with actual domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
