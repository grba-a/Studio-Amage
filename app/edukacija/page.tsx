import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Frizerska edukacija',
  description:
    'Programi edukacije za frizere koji žele podići tehniku na viši nivo — Studio Amage Split. Uskoro dostupno.',
  alternates: { canonical: 'https://studioamage.com/edukacija' },
}

export default function EdukacijaPage() {
  return (
    <main
      style={{
        minHeight:       '70vh',
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        backgroundColor: 'var(--bg)',
        padding:         '80px 24px',
      }}
    >
      <div style={{ maxWidth: '700px', width: '100%', textAlign: 'center' }}>

        <p
          style={{
            fontFamily:    'Poppins, sans-serif',
            fontSize:      '11px',
            fontWeight:     500,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color:         '#935638',
            marginBottom:  '1.5rem',
          }}
        >
          EDUKACIJA
        </p>

        <h1
          style={{
            fontFamily:   'Playfair Display, serif',
            fontSize:     'clamp(36px, 5vw, 56px)',
            fontWeight:    700,
            color:        '#935638',
            lineHeight:    1.2,
            marginBottom: '0',
          }}
        >
          Uskoro dolazi nešto posebno
        </h1>

        {/* Separator */}
        <div
          aria-hidden="true"
          style={{
            width:           '60px',
            height:          '1px',
            backgroundColor: '#935638',
            margin:          '24px auto',
          }}
        />

        <p
          style={{
            fontFamily:  'Poppins, sans-serif',
            fontSize:    'clamp(15px, 1.5vw, 17px)',
            lineHeight:   1.75,
            color:       '#6b4c3b',
            maxWidth:    '560px',
            margin:      '0 auto',
          }}
        >
          Programi za frizere koji žele podići tehniku na viši nivo —
          uskoro dostupno.
        </p>

        <Link
          href="/"
          style={{
            display:        'inline-block',
            marginTop:      '32px',
            fontFamily:     'Poppins, sans-serif',
            fontSize:       '14px',
            fontWeight:      500,
            color:          '#935638',
            textDecoration: 'none',
          }}
          className="edukacija-back-link"
        >
          ← Povratak na početnu stranicu
        </Link>

      </div>
    </main>
  )
}
