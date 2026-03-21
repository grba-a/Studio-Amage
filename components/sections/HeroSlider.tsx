'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

// ── Slide data ────────────────────────────────────────────────────────────────
const SLIDES = [
  { id: 0, src: '/images/hero/hero-1.jpg', alt: 'Balayage frizerski salon Split',      bg: '#1a0f0a', pos: 'center 20%' },
  { id: 1, src: '/images/hero/hero-2.jpg', alt: 'Bojanje kose Split Studio Amage',      bg: '#0f1a14', pos: 'center 20%' },
  { id: 2, src: '/images/hero/hero-3.jpg', alt: 'Frizerski salon Studio Amage Split',   bg: '#0a0f1a', pos: 'center 20%' },
  { id: 3, src: '/images/hero/hero-4.jpg', alt: 'Marija Jurčević frizerka Split',       bg: '#1a1209', pos: 'center center' },
] as const

const INTERVAL_MS   = 5000
const FADE_DURATION = 1200

// ── Component ─────────────────────────────────────────────────────────────────
export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [paused,  setPaused]  = useState(false)
  const touchStartX           = useRef<number>(0)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setCurrent(p => (p + 1) % SLIDES.length), INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, current])

  const goTo   = useCallback((i: number) => setCurrent(i), [])
  const goPrev = useCallback(() => setCurrent(p => (p - 1 + SLIDES.length) % SLIDES.length), [])
  const goNext = useCallback(() => setCurrent(p => (p + 1) % SLIDES.length), [])

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev()
  }

  return (
    <section
      aria-label="Hero galerija"
      style={{
        position: 'relative',
        height:   '100vh',
        width:    '100%',
        overflow: 'hidden',
        margin:    0,
        padding:   0,
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* ── Slides ───────────────────────────────────────────────────────── */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.id}
          aria-hidden={i !== current}
          style={{
            position:           'absolute',
            top:                 0,
            left:                0,
            width:              '100%',
            height:             '100%',
            backgroundColor:     slide.bg,
            backgroundImage:    `url(${slide.src})`,
            backgroundSize:     'cover',
            backgroundPosition: slide.pos,
            backgroundRepeat:   'no-repeat',
            opacity:    i === current ? 1 : 0,
            transition: `opacity ${FADE_DURATION}ms ease`,
            willChange: 'opacity',
          }}
        >
          <span className="sr-only">{slide.alt}</span>
        </div>
      ))}

      {/* ── Dark overlay ─────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        style={{
          position:        'absolute',
          inset:            0,
          background:      'rgba(0,0,0,0.15)',
          zIndex:           1,
        }}
      />

      {/* ── Dot navigation ───────────────────────────────────────────────── */}
      <div
        role="tablist"
        aria-label="Odabir slajda"
        style={{
          position:   'absolute',
          bottom:     '32px',
          left:       '50%',
          transform:  'translateX(-50%)',
          zIndex:      3,
          display:    'flex',
          gap:        '10px',
          alignItems: 'center',
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slajd ${i + 1}`}
            onClick={() => goTo(i)}
            style={{
              width:           '12px',
              height:          '12px',
              borderRadius:    '50%',
              border:          '2px solid rgba(255,255,255,0.9)',
              backgroundColor: i === current ? 'rgba(255,255,255,0.95)' : 'transparent',
              cursor:          'pointer',
              padding:          0,
              transition:      'background-color 0.3s ease, transform 0.2s ease',
              transform:       i === current ? 'scale(1.2)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </section>
  )
}
