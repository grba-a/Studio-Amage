import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uvjeti korištenja',
  description: 'Uvjeti korištenja Studio Amage — rezervacije, otkazivanja i pravila studija.',
  alternates: { canonical: 'https://studioamage.com/terms' },
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

export default function TermsPage() {
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
          Uvjeti korištenja
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

        <h2 style={h2Style}>1. Rezervacije</h2>
        <p style={pStyle}>
          Rezervacija termina vrši se putem kontakt obrasca, telefonskim
          pozivom ili porukom na Instagram. Termin je potvrđen tek nakon što
          primite potvrdu od strane Studio Amage.
        </p>

        <h2 style={h2Style}>2. Otkazivanje termina</h2>
        <p style={pStyle}>
          Molimo vas da otkazivanje ili pomicanje termina javite najmanje 24
          sata unaprijed. Kasna otkazivanja mogu rezultirati naplatom 50%
          cijene usluge.
        </p>

        <h2 style={h2Style}>3. Kašnjenje</h2>
        <p style={pStyle}>
          U slučaju kašnjenja dužeg od 15 minuta, Studio Amage zadržava pravo
          skraćivanja ili otkazivanja termina, uz eventualnu naplatu.
        </p>

        <h2 style={h2Style}>4. Rezultati</h2>
        <p style={pStyle}>
          Studio Amage nastoji postići rezultat dogovoren konzultacijom.
          Međutim, konačni rezultat ovisi o stanju i povijesti kose svakog
          klijenta. Preporučujemo iskrenu komunikaciju o svim prethodnim
          tretmanima.
        </p>

      </div>
    </main>
  )
}
