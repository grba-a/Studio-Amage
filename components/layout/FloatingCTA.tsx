'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const HIDDEN_ON = ['/privacy', '/terms', '/cookies']

export default function FloatingCTA() {
  const [hovered, setHovered] = useState(false)
  const pathname = usePathname()
  const router   = useRouter()

  if (HIDDEN_ON.includes(pathname)) return null

  const handleClick = () => {
    if (pathname === '/') {
      document.getElementById('rezervacija')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      router.push('/#rezervacija')
    }
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Idi na kontakt"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:   'fixed',
        bottom:     '24px',
        right:      '24px',
        zIndex:      50,
        display:    'flex',
        alignItems: 'center',
        gap:        '10px',
        background: 'none',
        border:     'none',
        padding:     0,
        cursor:     'pointer',
        transform:  hovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'all 0.2s ease',
      }}
    >
      {/* Label — hover-only on desktop */}
      <span
        className="hidden sm:block"
        style={{
          backgroundColor: '#935638',
          color:           '#ffffff',
          borderRadius:    '9999px',
          padding:         '8px 16px',
          fontSize:        '13px',
          fontFamily:      'Poppins, sans-serif',
          fontWeight:       500,
          letterSpacing:   '0.05em',
          whiteSpace:      'nowrap',
          opacity:          hovered ? 1 : 0,
          transform:        hovered ? 'translateX(0)' : 'translateX(8px)',
          transition:      'opacity 0.2s ease, transform 0.2s ease',
          pointerEvents:   'none',
          boxShadow:       '0 2px 12px rgba(147, 86, 56, 0.3)',
        }}
      >
        Kontakt
      </span>

      {/* Always-visible label on mobile */}
      <span
        className="block sm:hidden"
        style={{
          backgroundColor: '#935638',
          color:           '#ffffff',
          borderRadius:    '9999px',
          padding:         '8px 16px',
          fontSize:        '13px',
          fontFamily:      'Poppins, sans-serif',
          fontWeight:       500,
          letterSpacing:   '0.05em',
          whiteSpace:      'nowrap',
          boxShadow:       '0 2px 12px rgba(147, 86, 56, 0.3)',
        }}
      >
        Kontakt
      </span>

      {/* Circle button */}
      <div
        style={{
          width:           '56px',
          height:          '56px',
          borderRadius:    '9999px',
          backgroundColor: hovered ? '#7a4529' : '#935638',
          display:         'flex',
          alignItems:      'center',
          justifyContent:  'center',
          flexShrink:       0,
          boxShadow:        hovered
            ? '0 6px 28px rgba(147, 86, 56, 0.55)'
            : '0 4px 20px rgba(147, 86, 56, 0.4)',
          transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
            A19.5 19.5 0 0 1 5.26 13a19.79 19.79 0 0 1-3.07-8.67
            A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81
            a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27
            a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </div>
    </button>
  )
}
