import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galerija radova — Balayage i bojanje',
  description:
    'Pogledaj galeriju frizerskih radova — balayage, bojanje, šišanje i transformacije. Studio Amage Split.',
  alternates: { canonical: 'https://studioamage.com/galerija' },
  openGraph: {
    images: [{ url: 'https://studioamage.com/images/galerija/galerija-1.jpg', width: 1200, height: 630, alt: 'Galerija radova — Studio Amage Split' }],
  },
}

export default function GalerijaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
