'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function SalonPreview() {
  return (
    <section
      aria-labelledby="salon-preview-heading"
      style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display:             'grid',
          gridTemplateColumns: '1fr 1fr',
          gap:                 '60px',
          alignItems:          'center',
        }}
          className="salon-grid"
        >

          {/* ── Left: image ── */}
          <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: '12px', overflow: 'hidden', width: '100%' }}>
            <Image
              src="/images/salon/salon-2.jpg"
              alt="Studio Amage salon Split"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* ── Right: text ── */}
          <div style={{ paddingLeft: '60px' }}>
            <p
              style={{
                fontFamily:    'Poppins, sans-serif',
                fontSize:      '11px',
                fontWeight:     500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color:         '#935638',
                marginBottom:  '1.25rem',
              }}
            >
              STUDIO PROSTOR
            </p>

            <h2
              id="salon-preview-heading"
              style={{
                fontFamily:   'Playfair Display, serif',
                fontSize:     'clamp(26px, 3.5vw, 38px)',
                fontWeight:    700,
                color:        '#935638',
                lineHeight:    1.2,
                marginBottom: '2rem',
              }}
            >
              Zavirite u interijer našeg salona
            </h2>

            <Link
              href="/salon"
              className="btn-outline-brand"
            >
              Pogledaj salon
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}
