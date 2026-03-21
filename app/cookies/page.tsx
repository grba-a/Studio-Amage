import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politika kolačića',
  description: 'Politika kolačića Studio Amage — informacije o korištenju kolačića na ovoj web stranici.',
  alternates: { canonical: 'https://studioamage.com/cookies' },
}

const h2Style: React.CSSProperties = {
  fontFamily:   'Playfair Display, serif',
  fontSize:     '24px',
  fontWeight:    700,
  color:        '#935638',
  lineHeight:    1.3,
  marginTop:    '2.5rem',
  marginBottom: '0.75rem',
}

const pStyle: React.CSSProperties = {
  fontFamily: 'Poppins, sans-serif',
  fontSize:   '15px',
  lineHeight:  1.8,
  color:      '#6b4c3b',
}

export default function CookiesPage() {
  return (
    <main style={{ backgroundColor: 'var(--bg)', paddingTop: 'calc(80px + 4rem)', paddingBottom: '5rem' }}>
      <div className="mx-auto px-6" style={{ maxWidth: '800px' }}>

        <h1
          style={{
            fontFamily:   'Playfair Display, serif',
            fontSize:     'clamp(32px, 4vw, 42px)',
            fontWeight:    700,
            color:        '#935638',
            lineHeight:    1.2,
            marginBottom: '0.75rem',
          }}
        >
          Politika kolačića
        </h1>

        <p
          style={{
            fontFamily:   'Poppins, sans-serif',
            fontSize:     '13px',
            color:        '#a08b7a',
            marginBottom: '3rem',
          }}
        >
          Zadnja izmjena: siječanj 2025.
        </p>

        <h2 style={h2Style}>Što su kolačići?</h2>
        <p style={pStyle}>
          Kolačići (cookies) su male tekstualne datoteke koje web stranica
          sprema na vaše računalo ili mobilni uređaj pri prvom posjetu.
        </p>

        <h2 style={h2Style}>Koje kolačiće koristimo?</h2>
        <p style={pStyle}>
          Koristimo Google Analytics kolačiće (<code>_ga</code>,{' '}
          <code>_gid</code>) koji nam pomažu razumjeti kako posjetitelji
          koriste našu stranicu. Ovi kolačići ne sadrže osobne podatke i
          koriste se isključivo u statističke svrhe.
        </p>

        <h2 style={h2Style}>Kako upravljati kolačićima?</h2>
        <p style={pStyle}>
          Kolačiće možete prihvatiti ili odbiti putem bannera koji se
          prikazuje pri prvom posjetu. Također ih možete upravljati ili
          obrisati putem postavki vašeg web preglednika.
        </p>

      </div>
    </main>
  )
}
