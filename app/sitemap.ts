import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://studioamage.com',                           lastModified: new Date(), changeFrequency: 'weekly',  priority: 1   },
    { url: 'https://studioamage.com/ponuda',           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://studioamage.com/transformacije',            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://studioamage.com/galerija',                  lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: 'https://studioamage.com/salon',                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://studioamage.com/edukacija',                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://studioamage.com/blog',                      lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: 'https://studioamage.com/blog/njega-boje',           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://studioamage.com/blog/novi-tretmani',        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://studioamage.com/blog/trendovi-sezone',      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://studioamage.com/privacy',                   lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: 'https://studioamage.com/terms',                     lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: 'https://studioamage.com/cookies',                   lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]
}
