'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'

// ── Slide data ────────────────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 0,
    src: '/images/hero/hero-1.jpg',
    alt: 'Balayage frizerski salon Split',
    bg: '#1a0f0a',
  },
  {
    id: 1,
    src: '/images/hero/hero-2.jpg',
    alt: 'Bojanje kose Split Studio Amage',
    bg: '#0f1a14',
  },
  {
    id: 2,
    src: '/images/hero/hero-3.jpg',
    alt: 'Frizerski salon Studio Amage Split',
    bg: '#0a0f1a',
  },
  {
    id: 3,
    src: '/images/hero/hero-4.jpg',
    alt: 'Marija Jurčević frizerka Split',
    bg: '#1a1209',
  },
] as const

const INTERVAL_MS  = 5000
const FADE_DURATION = 1200 // ms — must match CSS transition below

// ── Component ─────────────────────────────────────────────────────────────────
export default function HeroSlider() {
  const [current,    setCurrent]   = useState(0)
  const [paused,     setPaused]    = useState(false)
  const touchStartX                = useRef<number>(0)

  // ── Auto-play (resets whenever slide changes or pause state changes) ─────
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [paused, current])

  // ── Navigation helpers ───────────────────────────────────────────────────
  const goTo   = useCallback((i: number) => setCurrent(i), [])
  const goPrev = useCallback(() => setCurrent(p => (p - 1 + SLIDES.length) % SLIDES.length), [])
  const goNext = useCallback(() => setCurrent(p => (p + 1) % SLIDES.length), [])

  // ── Touch / swipe ────────────────────────────────────────────────────────
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? goNext() : goPrev()
  }

  return (
    <div>
      {/* ── Hero section ─────────────────────────────────────────────────── */}
      <section
        aria-label="Hero galerija"
        style={{
          position:    'relative',
          height:      '100vh',
          minHeight:   '560px',
          overflow:    'hidden',
          clipPath:    'polygon(0 0, 100% 0, 100% 88%, 0 100%)',
          marginBottom: '-10vh',  // pull CTA up into the diagonal whitespace
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* ── Slides ─────────────────────────────────────────────────────── */}
        {SLIDES.map((slide, i) => (
          <div
            key={slide.id}
            aria-hidden={i !== current}
            style={{
              position:   'absolute',
              inset:       0,
              backgroundColor: slide.bg,
              // When real images exist: backgroundImage, backgroundSize, backgroundPosition
              backgroundImage:    `url(${slide.src})`,
              backgroundSize:     'cover',
              backgroundPosition: 'center',
              opacity:    i === current ? 1 : 0,
              transition: `opacity ${FADE_DURATION}ms ease`,
              willChange: 'opacity',
            }}
          >
            <span className="sr-only">{slide.alt}</span>
          </div>
        ))}

        {/* ── Dark overlay ─────────────────────────────────────────────── */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset:     0,
            backgroundColor: 'rgba(0, 0, 0, 0.15)',
            zIndex:    1,
          }}
        />

        {/* ── Dot navigation ───────────────────────────────────────────── */}
        <div
          role="tablist"
          aria-label="Odabir slajda"
          style={{
            position:  'absolute',
            bottom:    '12%',
            left:      '50%',
            transform: 'translateX(-50%)',
            zIndex:    2,
            display:   'flex',
            gap:       '10px',
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
                width:        '12px',
                height:       '12px',
                borderRadius: '50%',
                border:       '2px solid rgba(255, 255, 255, 0.9)',
                backgroundColor: i === current ? 'rgba(255,255,255,0.95)' : 'transparent',
                cursor:       'pointer',
                padding:       0,
                transition:   'background-color 0.3s ease, transform 0.2s ease',
                transform:    i === current ? 'scale(1.2)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </section>

      {/* ── CTA below the diagonal ───────────────────────────────────────── */}
      <div
        style={{
          position:       'relative',
          zIndex:          2,
          backgroundColor: 'var(--bg)',
          paddingTop:      '7vh',
          paddingBottom:   '6vh',
          display:         'flex',
          flexDirection:   'column',
          alignItems:      'center',
          gap:             '0',
        }}
      >
        <Link href="/#rezervacija" className="hero-cta">
          Rezerviraj svoj termin
        </Link>
      </div>
    </div>
  )
}
