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
      aria-label="Idi na rezervaciju"
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
        Rezerviraj
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
        Rezerviraj
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
          <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
        </svg>
      </div>
    </button>
  )
}
