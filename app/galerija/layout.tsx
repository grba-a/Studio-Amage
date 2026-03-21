import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galerija radova — Balayage i bojanje',
  description:
    'Pogledaj galeriju frizerskih radova — balayage, bojanje, šišanje i transformacije. Studio Amage Split.',
  alternates: { canonical: 'https://studioamage.com/galerija' },
}

export default function GalerijaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
