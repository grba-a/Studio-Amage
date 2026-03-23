'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const IMAGES = [
  { src: '/images/galerija/galerija-4.jpg', alt: 'Studio Amage interijer' },
  { src: '/images/galerija/galerija-5.jpg', alt: 'Studio Amage interijer' },
  { src: '/images/galerija/galerija-6.jpg', alt: 'Studio Amage interijer' },
  { src: '/images/galerija/galerija-7.jpg', alt: 'Studio Amage interijer' },
]

export default function SalonCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused,  setPaused]  = useState(false)
  const touchX = useRef(0)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setCurrent(p => (p + 1) % IMAGES.length), 5000)
    return () => clearInterval(id)
  }, [paused])

  const prev = () => setCurrent(p => (p - 1 + IMAGES.length) % IMAGES.length)
  const next = () => setCurrent(p => (p + 1) % IMAGES.length)

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Track wrapper ── */}
      <div style={{ overflow: 'hidden', width: '100%', position: 'relative' }}>

        {/* Track */}
        <div
          style={{
            display:    'flex',
            transition: 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)',
            transform:  `translateX(calc(-${current * 79}% + 12.5%))`,
          }}
          onTouchStart={e => { touchX.current = e.touches[0].clientX }}
          onTouchEnd={e => {
            const diff = touchX.current - e.changedTouches[0].clientX
            if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
          }}
        >
          {IMAGES.map(({ src, alt }, i) => {
            const isActive = i === current
            return (
              <div
                key={src}
                style={{
                  flex:         '0 0 75%',
                  marginRight:  '4%',
                  position:     'relative',
                  aspectRatio:  '4 / 3',
                  borderRadius: '16px',
                  overflow:     'hidden',
                  opacity:      isActive ? 1 : 0.5,
                  transform:    isActive ? 'scale(1)' : 'scale(0.95)',
                  transition:   'opacity 400ms ease, transform 400ms ease',
                  boxShadow:    isActive
                    ? '0 16px 48px rgba(44, 24, 16, 0.18)'
                    : 'none',
                }}
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 85vw, 55vw"
                  priority={i === 0}
                />
              </div>
            )
          })}
        </div>

        {/* ── Arrows — inside the wrapper, vertically centred on slides ── */}
        <button
          onClick={prev}
          aria-label="Prethodna slika"
          className="salon-carousel-arrow"
          style={{
            position:        'absolute',
            left:            '14%',
            top:             '50%',
            transform:       'translateY(-50%)',
            zIndex:           10,
            width:           '40px',
            height:          '40px',
            borderRadius:    '50%',
            border:          'none',
            backgroundColor: 'rgba(255,255,255,0.9)',
            color:           '#935638',
            cursor:          'pointer',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            boxShadow:       '0 2px 8px rgba(0,0,0,0.15)',
            transition:      'background-color 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#ffffff')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)')}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          onClick={next}
          aria-label="Sljedeća slika"
          className="salon-carousel-arrow"
          style={{
            position:        'absolute',
            right:           '14%',
            top:             '50%',
            transform:       'translateY(-50%)',
            zIndex:           10,
            width:           '40px',
            height:          '40px',
            borderRadius:    '50%',
            border:          'none',
            backgroundColor: 'rgba(255,255,255,0.9)',
            color:           '#935638',
            cursor:          'pointer',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            boxShadow:       '0 2px 8px rgba(0,0,0,0.15)',
            transition:      'background-color 0.2s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#ffffff')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)')}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* ── Pill dots ── */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '16px' }}>
        {IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slika ${i + 1}`}
            style={{
              width:           i === current ? '24px' : '8px',
              height:          '8px',
              borderRadius:    '4px',
              border:          'none',
              padding:          0,
              cursor:          'pointer',
              backgroundColor: i === current ? '#935638' : 'rgba(147,86,56,0.3)',
              transition:      'all 300ms ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}
