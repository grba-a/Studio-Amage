'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Don't show if already decided
    const consent = localStorage.getItem('cookie-consent')
    if (consent === 'accepted' || consent === 'declined') return

    // Delay 1s so banner doesn't block LCP
    const timer = setTimeout(() => setVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Obavijest o kolačićima"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        backgroundColor: '#2c1810',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.3s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div
        className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-4
                   flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        {/* Text */}
        <p
          className="font-sans"
          style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.6, maxWidth: '600px' }}
        >
          Koristimo kolačiće za poboljšanje iskustva. Više info u našoj{' '}
          <Link
            href="/cookies"
            style={{ color: '#b06840', textDecoration: 'underline' }}
          >
            Politici kolačića
          </Link>
          .
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 sm:flex-shrink-0">
          <button
            onClick={decline}
            className="w-full sm:w-auto font-sans font-medium uppercase"
            style={{
              border: '1.5px solid rgba(255,255,255,0.5)',
              color: '#ffffff',
              borderRadius: '9999px',
              padding: '10px 24px',
              fontSize: '11px',
              letterSpacing: '0.08em',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              transition: 'border-color 0.2s ease, color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = '#ffffff'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.5)'
            }}
          >
            Odbij
          </button>

          <button
            onClick={accept}
            className="w-full sm:w-auto font-sans font-medium uppercase"
            style={{
              backgroundColor: '#935638',
              color: '#ffffff',
              borderRadius: '9999px',
              padding: '10px 24px',
              fontSize: '11px',
              letterSpacing: '0.08em',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#7a4529'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#935638'
            }}
          >
            Prihvati
          </button>
        </div>
      </div>
    </div>
  )
}
