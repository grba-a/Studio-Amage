'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

// ── Review data ───────────────────────────────────────────────────────────────
const REVIEWS = [
  {
    name:    'Snježana Lončar',
    initials:'SL',
    when:    'Prije mjesec dana',
    text:    'Danas sam prvi put bila kod ove divne frizerke i moram reći – oduševljena sam! Od samog dolaska osjetila sam toplinu, profesionalnost i onu rijetku kombinaciju sigurnosti i opuštenosti. Pažljivo me saslušala, savjetovala bez nametanja i odmah sam znala da sam u dobrim rukama. Iz salona sam izašla prezadovoljna, s osmijehom i osjećajem da sam pronašla svoju novu frizerku.',
  },
  {
    name:    'Ana Stipic',
    initials:'AS',
    when:    'Prije 3 mjeseca',
    text:    'Prezadovoljna sam balayageom, sisanjem i feniranjem. Mariji sam samo ispričala što želim, a kad sam dobila točno to, ostala sam ugodno iznenađena koliko je razumjela moju viziju. Salon ugodan, lijep i čist. Marija profesionalna, smirena i vrijedna. Kosa mi je ostala zdrava i mekana nakon blajhana po cijeloj kosi.',
  },
  {
    name:    'Ivona Voloder Maras',
    initials:'IV',
    when:    'Prije 3 mjeseca',
    text:    'Bila sam na šišanju, preljevu i pramenovima u frizerskom studiju AMAGE i izašla sam nikad zadovoljnija. Marija ima iznimno stručan pristup, puno znanja i nevjerojatno je susretljiva i draga. Napokon sam pronašla frizerku koja mi pruža kompletnu uslugu na jednom mjestu. Presretna sam što se ovaj studio otvorio u Splitu — sigurno ću se vraćati!',
  },
  {
    name:    'Petra Kovač',
    initials:'PK',
    when:    'Prije 2 mjeseca',
    text:    'Fantastično iskustvo od početka do kraja. Marija je pravi profesionalac koji zna što radi. Balayage je ispao savršeno, prirodno i točno onako kako sam zamislila. Salon je predivan, mirisan i opušten. Preporučujem svima!',
  },
  {
    name:    'Marina Bilić',
    initials:'MB',
    when:    'Prije 5 dana',
    text:    'Konačno frizerka koja sluša! Došla sam s idejom, Marija ju je razumjela i nadogradila. Rezultat je bio još bolji nego što sam očekivala. Definitivno se vraćam!',
  },
] as const

// ── Google G icon ─────────────────────────────────────────────────────────────
const IconGoogleG = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

// ── Stars ─────────────────────────────────────────────────────────────────────
const Stars = () => (
  <div style={{ display: 'flex', gap: '2px', marginBottom: '12px' }} aria-label="5 zvjezdica">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i} style={{ color: '#f59e0b', fontSize: '16px' }} aria-hidden="true">★</span>
    ))}
  </div>
)

// ── Component ─────────────────────────────────────────────────────────────────
export default function ReviewsSection() {
  const [current,  setCurrent]  = useState(0)
  const [isMobile, setIsMobile] = useState(true)   // default true for SSR
  const [offset,   setOffset]   = useState(0)
  const trackRef   = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Max index: desktop shows 3 cards, so last starting pos = REVIEWS.length - 3
  const maxIndex = isMobile ? REVIEWS.length - 1 : REVIEWS.length - 3

  // Keep current in bounds after resize
  useEffect(() => {
    setCurrent(p => Math.min(p, maxIndex))
  }, [maxIndex])

  // Compute translateX from the DOM card's offsetLeft
  const updateOffset = useCallback(() => {
    const card = trackRef.current?.children[current] as HTMLElement | undefined
    if (card) setOffset(card.offsetLeft)
  }, [current])

  useEffect(() => {
    updateOffset()
    window.addEventListener('resize', updateOffset)
    return () => window.removeEventListener('resize', updateOffset)
  }, [updateOffset])

  const prev = () => setCurrent(p => Math.max(0, p - 1))
  const next = () => setCurrent(p => Math.min(maxIndex, p + 1))

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
  }

  return (
    <section
      aria-labelledby="reviews-heading"
      style={{ backgroundColor: '#ede3db', paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p
            className="font-sans font-medium uppercase"
            style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#935638', marginBottom: '1rem' }}
          >
            RECENZIJE
          </p>
          <h2
            id="reviews-heading"
            className="font-serif font-bold"
            style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', color: '#935638', lineHeight: 1.2 }}
          >
            Što naši klijenti kažu?
          </h2>
        </div>

        {/* ── Carousel ── */}
        <div
          style={{ overflow: 'hidden' }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={trackRef}
            style={{
              display:    'flex',
              gap:        '24px',
              transform:  `translateX(-${offset}px)`,
              transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="review-card"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius:     '16px',
                  padding:          '28px',
                  boxShadow:        '0 4px 20px rgba(44, 24, 16, 0.07)',
                  display:          'flex',
                  flexDirection:    'column',
                }}
              >
                {/* Top row: avatar + name + Google G */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Avatar */}
                    <div
                      aria-hidden="true"
                      style={{
                        width:           '42px',
                        height:          '42px',
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
                      {review.initials}
                    </div>
                    {/* Name + when */}
                    <div>
                      <div
                        className="font-sans font-semibold"
                        style={{ fontSize: '14px', color: '#2c1810', lineHeight: 1.2 }}
                      >
                        {review.name}
                      </div>
                      <div
                        className="font-sans"
                        style={{ fontSize: '12px', color: '#9e7b6b', marginTop: '2px' }}
                      >
                        {review.when}
                      </div>
                    </div>
                  </div>
                  <IconGoogleG />
                </div>

                {/* Stars */}
                <Stars />

                {/* Review text */}
                <p
                  className="font-sans"
                  style={{ fontSize: '14px', lineHeight: 1.7, color: '#6b4c3b', flex: 1 }}
                >
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Navigation: arrows + dots ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '2.5rem' }}>
          {/* Prev arrow */}
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Prethodna recenzija"
            style={{
              width:           '40px',
              height:          '40px',
              borderRadius:    '50%',
              border:          '1.5px solid rgba(147,86,56,0.35)',
              backgroundColor: 'transparent',
              color:           '#935638',
              cursor:          current === 0 ? 'default' : 'pointer',
              opacity:         current === 0 ? 0.35 : 1,
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

          {/* Dots */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Recenzija ${i + 1}`}
                aria-current={i === current ? 'true' : undefined}
                style={{
                  width:           i === current ? '20px' : '8px',
                  height:          '8px',
                  borderRadius:    '9999px',
                  border:          'none',
                  backgroundColor: i === current ? '#935638' : 'rgba(147,86,56,0.3)',
                  cursor:          'pointer',
                  padding:          0,
                  transition:      'all 0.3s ease',
                }}
              />
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            disabled={current === maxIndex}
            aria-label="Sljedeća recenzija"
            style={{
              width:           '40px',
              height:          '40px',
              borderRadius:    '50%',
              border:          '1.5px solid rgba(147,86,56,0.35)',
              backgroundColor: 'transparent',
              color:           '#935638',
              cursor:          current === maxIndex ? 'default' : 'pointer',
              opacity:         current === maxIndex ? 0.35 : 1,
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
