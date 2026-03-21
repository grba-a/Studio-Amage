'use client'

import { useState } from 'react'

// ── Review data ───────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    name:     'Snježana Lončar',
    initials: 'SL',
    when:     'Prije mjesec dana',
    text:     'Danas sam prvi put bila kod ove divne frizerke i moram reći – oduševljena sam! Od samog dolaska osjetila sam toplinu, profesionalnost i onu rijetku kombinaciju sigurnosti i opuštenosti. Pažljivo me saslušala, savjetovala bez nametanja i odmah sam znala da sam u dobrim rukama. Iz salona sam izašla prezadovoljna, s osmijehom i osjećajem da sam pronašla svoju novu frizerku.',
  },
  {
    name:     'Ana Stipic',
    initials: 'AS',
    when:     'Prije 3 mjeseca',
    text:     'Prezadovoljna sam balayageom, sisanjem i feniranjem. Mariji sam samo ispričala što želim, a kad sam dobila točno to, ostala sam ugodno iznenađena koliko je razumjela moju viziju. Salon ugodan, lijep i čist. Marija profesionalna, smirena i vrijedna. Kosa mi je ostala zdrava i mekana nakon blajhana po cijeloj kosi.',
  },
  {
    name:     'Ivona Voloder Maras',
    initials: 'IV',
    when:     'Prije 3 mjeseca',
    text:     'Bila sam na šišanju, preljevu i pramenovima u frizerskom studiju AMAGE i izašla sam nikad zadovoljnija. Marija ima iznimno stručan pristup, puno znanja i nevjerojatno je susretljiva i draga. Napokon sam pronašla frizerku koja mi pruža kompletnu uslugu na jednom mjestu. Presretna sam što se ovaj studio otvorio u Splitu — sigurno ću se vraćati!',
  },
  {
    name:     'Petra Kovač',
    initials: 'PK',
    when:     'Prije 2 mjeseca',
    text:     'Fantastično iskustvo od početka do kraja. Marija je pravi profesionalac koji zna što radi. Balayage je ispao savršeno, prirodno i točno onako kako sam zamislila. Salon je predivan, mirisan i opušten. Preporučujem svima!',
  },
  {
    name:     'Marina Bilić',
    initials: 'MB',
    when:     'Prije 5 dana',
    text:     'Konačno frizerka koja sluša! Došla sam s idejom, Marija ju je razumjela i nadogradila. Rezultat je bio još bolji nego što sam očekivala. Definitivno se vraćam!',
  },
] as const

// Pages: 0 → reviews 0-2, 1 → reviews 3-4
const PAGES = [REVIEWS.slice(0, 3), REVIEWS.slice(3)] as const

// ── Google G icon ─────────────────────────────────────────────────────────────
const IconGoogleG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

// ── Card ──────────────────────────────────────────────────────────────────────
function ReviewCard({ name, initials, when, text }: typeof REVIEWS[number]) {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius:     '16px',
        padding:          '28px',
        boxShadow:        '0 2px 20px rgba(0, 0, 0, 0.06)',
        display:          'flex',
        flexDirection:    'column',
      }}
    >
      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Avatar */}
          <div
            aria-hidden="true"
            style={{
              width:           '40px',
              height:          '40px',
              borderRadius:    '50%',
              backgroundColor: '#935638',
              color:           '#ffffff',
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              fontFamily:      'Poppins, sans-serif',
              fontSize:        '13px',
              fontWeight:       600,
              flexShrink:       0,
            }}
          >
            {initials}
          </div>
          {/* Name + date */}
          <div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '15px', fontWeight: 600, color: '#2c1810', lineHeight: 1.2 }}>
              {name}
            </div>
            <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', color: '#9b8b7e', marginTop: '2px' }}>
              {when}
            </div>
          </div>
        </div>
        <IconGoogleG />
      </div>

      {/* Stars */}
      <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }} aria-label="5 zvjezdica">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: '#f59e0b', fontSize: '16px' }} aria-hidden="true">★</span>
        ))}
      </div>

      {/* Text */}
      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', lineHeight: 1.7, color: '#6b4c3b', flex: 1, margin: 0 }}>
        {text}
      </p>
    </div>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function ReviewsSection() {
  const [page, setPage] = useState(0)

  const [touchStartX, setTouchStartX] = useState(0)
  const onTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX)
  const onTouchEnd   = (e: React.TouchEvent) => {
    const diff = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) setPage(diff > 0 ? Math.min(1, page + 1) : Math.max(0, page - 1))
  }

  return (
    <section
      aria-labelledby="reviews-heading"
      style={{ backgroundColor: '#ede3db', paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p
            style={{
              fontFamily:    'Poppins, sans-serif',
              fontSize:      '11px',
              fontWeight:     500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color:         '#935638',
              marginBottom:  '1rem',
            }}
          >
            RECENZIJE
          </p>
          <h2
            id="reviews-heading"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize:   'clamp(28px, 3.5vw, 38px)',
              fontWeight:  700,
              color:      '#935638',
              lineHeight:  1.2,
            }}
          >
            Što naši klijenti kažu?
          </h2>
        </div>

        {/* Cards */}
        <div
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Desktop: grid 3 cols. Mobile: single card carousel via overflow+translate */}

          {/* Desktop grid — hidden on mobile */}
          <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
            {PAGES[page as 0 | 1].map((r, i) => (
              <ReviewCard key={i} {...r} />
            ))}
          </div>

          {/* Mobile: single card */}
          <div className="lg:hidden">
            {(() => {
              const allReviews = [...REVIEWS]
              const mobileIndex = page === 0 ? 0 : 3
              return <ReviewCard {...allReviews[mobileIndex]} />
            })()}
          </div>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '2.5rem' }}>
          {/* Prev */}
          <button
            onClick={() => setPage(p => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Prethodna stranica recenzija"
            style={{
              width:           '40px',
              height:          '40px',
              borderRadius:    '50%',
              border:          '1.5px solid rgba(147,86,56,0.35)',
              backgroundColor: 'transparent',
              color:           '#935638',
              cursor:          page === 0 ? 'default' : 'pointer',
              opacity:         page === 0 ? 0.35 : 1,
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              transition:      'all 0.2s ease',
              flexShrink:       0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* 2 dots */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {[0, 1].map(i => (
              <button
                key={i}
                onClick={() => setPage(i)}
                aria-label={`Stranica recenzija ${i + 1}`}
                aria-current={i === page ? 'true' : undefined}
                style={{
                  width:           i === page ? '20px' : '8px',
                  height:          '8px',
                  borderRadius:    '9999px',
                  border:          'none',
                  backgroundColor: i === page ? '#935638' : 'rgba(147,86,56,0.3)',
                  cursor:          'pointer',
                  padding:          0,
                  transition:      'all 0.3s ease',
                }}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => setPage(p => Math.min(1, p + 1))}
            disabled={page === 1}
            aria-label="Sljedeća stranica recenzija"
            style={{
              width:           '40px',
              height:          '40px',
              borderRadius:    '50%',
              border:          '1.5px solid rgba(147,86,56,0.35)',
              backgroundColor: 'transparent',
              color:           '#935638',
              cursor:          page === 1 ? 'default' : 'pointer',
              opacity:         page === 1 ? 0.35 : 1,
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              transition:      'all 0.2s ease',
              flexShrink:       0,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
