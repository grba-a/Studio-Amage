'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

// ── Types & data ───────────────────────────────────────────────────────────────
type Category = 'sve' | 'balayage' | 'bojanje' | 'šišanje' | 'transformacije'

const FILTER_LABELS: { key: Category; label: string }[] = [
  { key: 'sve',            label: 'Sve' },
  { key: 'balayage',       label: 'Balayage' },
  { key: 'bojanje',        label: 'Bojanje' },
  { key: 'šišanje',        label: 'Šišanje' },
  { key: 'transformacije', label: 'Transformacije' },
]

const ITEMS: { id: number; category: Category }[] = [
  { id:  1, category: 'balayage' },
  { id:  2, category: 'bojanje' },
  { id:  3, category: 'šišanje' },
  { id:  4, category: 'balayage' },
  { id:  5, category: 'transformacije' },
  { id:  6, category: 'bojanje' },
  { id:  7, category: 'balayage' },
  { id:  8, category: 'šišanje' },
  { id:  9, category: 'bojanje' },
  { id: 10, category: 'transformacije' },
  { id: 11, category: 'balayage' },
  { id: 12, category: 'bojanje' },
]

// ── Page ───────────────────────────────────────────────────────────────────────
export default function GalerijaPage() {
  const [activeFilter, setActiveFilter] = useState<Category>('sve')
  const [lightboxId,   setLightboxId]   = useState<number | null>(null)
  const [hoveredId,    setHoveredId]    = useState<number | null>(null)

  const filtered = activeFilter === 'sve'
    ? ITEMS
    : ITEMS.filter(item => item.category === activeFilter)

  const closeLightbox = useCallback(() => setLightboxId(null), [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeLightbox() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [closeLightbox])

  useEffect(() => {
    document.body.style.overflow = lightboxId !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxId])

  return (
    <>
      <main>

        {/* ══ 1. PAGE HERO ════════════════════════════════════════════════════ */}
        <section
          style={{
            backgroundColor: '#2c1810',
            paddingTop:      'calc(80px + 3.5rem)',
            paddingBottom:   '3.5rem',
            textAlign:       'center',
          }}
        >
          <div className="mx-auto px-6" style={{ maxWidth: '800px' }}>
            <p
              style={{
                fontFamily:    'Poppins, sans-serif',
                fontSize:      '11px',
                fontWeight:     500,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color:         'rgba(255,255,255,0.55)',
                marginBottom:  '1rem',
              }}
            >
              GALERIJA
            </p>

            <h1
              style={{
                fontFamily:   'Playfair Display, serif',
                fontSize:     'clamp(36px, 5vw, 56px)',
                fontWeight:    700,
                color:        '#ffffff',
                lineHeight:    1.15,
                marginBottom: '1.25rem',
              }}
            >
              Galerija radova
            </h1>

            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize:   'clamp(15px, 1.5vw, 17px)',
                lineHeight:  1.75,
                color:      'rgba(255,255,255,0.7)',
                maxWidth:   '580px',
                margin:     '0 auto',
              }}
            >
              Svaki rad je priča za sebe — pogledaj transformacije koje smo
              stvorili zajedno.
            </p>
          </div>
        </section>

        {/* ══ 2. FILTER GUMBI ═════════════════════════════════════════════════ */}
        <section
          aria-label="Filter galerije"
          style={{ backgroundColor: 'var(--bg)', paddingTop: '40px', paddingBottom: '20px' }}
        >
          <div
            className="mx-auto px-6"
            style={{
              maxWidth:       '1400px',
              display:        'flex',
              flexWrap:       'wrap',
              justifyContent: 'center',
              gap:            '10px',
            }}
          >
            {FILTER_LABELS.map(({ key, label }) => {
              const isActive = activeFilter === key
              return (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  style={{
                    fontFamily:      'Poppins, sans-serif',
                    fontSize:        '13px',
                    fontWeight:       500,
                    letterSpacing:   '0.06em',
                    textTransform:   'uppercase',
                    padding:         '10px 22px',
                    borderRadius:    '9999px',
                    border:          '2px solid #935638',
                    cursor:          'pointer',
                    transition:      'all 0.2s ease',
                    backgroundColor: isActive ? '#935638' : 'transparent',
                    color:           isActive ? '#ffffff' : '#935638',
                  }}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </section>

        {/* ══ 3. MASONRY FOTO GRID ════════════════════════════════════════════ */}
        <section
          aria-label="Galerija fotografija"
          style={{ paddingTop: '28px', paddingBottom: '64px' }}
        >
          <div className="mx-auto px-6" style={{ maxWidth: '1400px' }}>
            <style>{`
              .gallery-masonry {
                columns: 3;
                column-gap: 16px;
              }
              @media (max-width: 1023px) { .gallery-masonry { columns: 2; } }
              @media (max-width: 639px)  { .gallery-masonry { columns: 1; } }
            `}</style>

            <div className="gallery-masonry">
              {filtered.map(item => {
                const isHov = hoveredId === item.id
                return (
                  <div
                    key={item.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Otvori fotografiju ${item.id} — Studio Amage frizerski salon Split`}
                    onClick={() => setLightboxId(item.id - 1)}
                    onKeyDown={e => {
                      if (e.key === 'Enter' || e.key === ' ') setLightboxId(item.id - 1)
                    }}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    style={{
                      position:     'relative',
                      overflow:     'hidden',
                      borderRadius: '12px',
                      breakInside:  'avoid',
                      marginBottom: '16px',
                      cursor:       'pointer',
                    }}
                  >
                    <Image
                      src={`/images/galerija/galerija-${item.id}.jpg`}
                      alt={`Studio Amage rad ${item.id} — frizerski salon Split`}
                      width={800}
                      height={1000}
                      style={{ width: '100%', height: 'auto', display: 'block' }}
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    />

                    {/* Hover overlay */}
                    <div
                      aria-hidden="true"
                      style={{
                        position:        'absolute',
                        inset:           0,
                        backgroundColor: 'rgba(44, 24, 16, 0.5)',
                        display:         'flex',
                        alignItems:      'center',
                        justifyContent:  'center',
                        opacity:         isHov ? 1 : 0,
                        transition:      'opacity 0.25s ease',
                      }}
                    >
                      <span style={{ fontSize: '36px', color: '#ffffff', lineHeight: 1 }}>
                        ⌕
                      </span>
                    </div>
                  </div>
                )
              })}

              {filtered.length === 0 && (
                <p
                  style={{
                    textAlign:  'center',
                    padding:    '80px 0',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize:   '16px',
                    color:      '#6b4c3b',
                  }}
                >
                  Nema radova u ovoj kategoriji.
                </p>
              )}
            </div>
          </div>
        </section>

      </main>

      {/* ══ LIGHTBOX ════════════════════════════════════════════════════════════ */}
      {lightboxId !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Studio Amage rad ${lightboxId! + 1}`}
          onClick={closeLightbox}
          style={{
            position:        'fixed',
            inset:           0,
            zIndex:          200,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            padding:         '24px',
          }}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Zatvori lightbox"
            style={{
              position:   'absolute',
              top:        '20px',
              right:      '24px',
              background: 'none',
              border:     'none',
              color:      '#ffffff',
              fontSize:   '32px',
              lineHeight:  1,
              cursor:     'pointer',
              padding:    '8px',
              opacity:     0.85,
            }}
          >
            ✕
          </button>

          {/* Image */}
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position:  'relative',
              maxWidth:  '90vw',
              maxHeight: '88vh',
              width:     '600px',
            }}
          >
            <Image
              src={`/images/galerija/galerija-${lightboxId! + 1}.jpg`}
              alt={`Studio Amage rad ${lightboxId! + 1} — frizerski salon Split`}
              width={800}
              height={1000}
              style={{
                width:        '100%',
                height:       'auto',
                maxHeight:    '88vh',
                objectFit:    'contain',
                borderRadius: '12px',
                boxShadow:    '0 24px 80px rgba(0,0,0,0.5)',
              }}
            />
          </div>
        </div>
      )}
    </>
  )
}
