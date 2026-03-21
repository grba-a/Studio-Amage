'use client'

import Link from 'next/link'
import FadeInOnScroll from '@/components/ui/FadeInOnScroll'
export default function SalonPreview() {
  return (
    <section
      aria-labelledby="salon-preview-heading"
      style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: '1200px' }}
      >
        {/* Desktop: image left (55%) | text right (45%), gap 80px */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-20">

          {/* ── Left column: salon image ── */}
          <FadeInOnScroll direction="left">
            <div
              role="img"
              aria-label="Studio Amage salon interijer Split"
              style={{
                backgroundColor:    '#b8a090',
                borderRadius:       '16px',
                aspectRatio:        '3 / 4',
                boxShadow:          '0 16px 48px rgba(44, 24, 16, 0.12)',
                backgroundImage:    'url(/images/salon/salon-main.jpg)',
                backgroundSize:     'cover',
                backgroundPosition: 'center',
              }}
            />
          </FadeInOnScroll>

          {/* ── Right column: text + CTA ── */}
          <FadeInOnScroll direction="right" delay={150}>
            <div>
              <p
                className="font-sans font-medium uppercase"
                style={{
                  fontSize:      '11px',
                  letterSpacing: '0.2em',
                  color:         '#935638',
                  marginBottom:  '1.25rem',
                }}
              >
                STUDIO PROSTOR
              </p>

              <h2
                id="salon-preview-heading"
                className="font-serif font-bold"
                style={{
                  fontSize:     'clamp(26px, 3.5vw, 38px)',
                  color:        '#935638',
                  lineHeight:   1.2,
                  marginBottom: '2rem',
                }}
              >
                Zavirite u interijer našeg salona
              </h2>

              <Link
                href="/salon"
                style={{
                  display:         'inline-block',
                  marginTop:       '32px',
                  border:          '2px solid #935638',
                  color:           '#935638',
                  borderRadius:    '9999px',
                  padding:         '14px 36px',
                  fontFamily:      'Poppins, sans-serif',
                  fontSize:        '12px',
                  fontWeight:       500,
                  letterSpacing:   '0.12em',
                  textTransform:   'uppercase',
                  textDecoration:  'none',
                  backgroundColor: 'transparent',
                  transition:      'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.backgroundColor = '#935638'
                  el.style.color = '#ffffff'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.backgroundColor = 'transparent'
                  el.style.color = '#935638'
                }}
              >
                Pogledaj salon
              </Link>
            </div>
          </FadeInOnScroll>

        </div>
      </div>
    </section>
  )
}
