import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politika privatnosti',
  description: 'Politika privatnosti Studio Amage — informacije o obradi osobnih podataka.',
  alternates: { canonical: 'https://studioamage.com/privacy' },
}

// ── Shared prose styles ────────────────────────────────────────────────────────
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

export default function PrivacyPage() {
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
          Politika privatnosti
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

        <h2 style={h2Style}>1. Voditelj obrade podataka</h2>
        <p style={pStyle}>
          Hair ETAGE j.d.o.o., Studio Amage, Trenkova ulica 74, 21000 Split,
          Hrvatska. Email:{' '}
          <a href="mailto:studio.amage@gmail.com" style={{ color: '#935638' }}>
            studio.amage@gmail.com
          </a>
          , Tel:{' '}
          <a href="tel:+385993496435" style={{ color: '#935638' }}>
            +385 99 349 6435
          </a>
          .
        </p>

        <h2 style={h2Style}>2. Koji osobni podaci se prikupljaju</h2>
        <p style={pStyle}>
          Putem kontakt obrasca na ovoj web stranici prikupljamo sljedeće
          osobne podatke: ime i prezime, email adresu, broj telefona i
          tekstualnu poruku. Navedeni podaci koriste se isključivo u svrhu
          odgovora na vaš upit i dogovaranja termina.
        </p>

        <h2 style={h2Style}>3. Kolačići (cookies)</h2>
        <p style={pStyle}>
          Ova web stranica koristi Google Analytics kolačiće za statističku
          analizu posjeta. Kolačići se ne koriste za osobnu identifikaciju
          korisnika. Možete odbiti postavljanje kolačića putem bannera koji
          se prikazuje pri prvom posjetu stranici, ili putem postavki vašeg
          preglednika.
        </p>

        <h2 style={h2Style}>4. Pohrana i zaštita podataka</h2>
        <p style={pStyle}>
          Osobni podaci pohranjuju se na sigurnim serverima i ne dijele se s
          trećim stranama osim u slučaju kada je to zakonski obvezno. Podaci
          se čuvaju samo onoliko dugo koliko je potrebno za ispunjenje svrhe
          prikupljanja.
        </p>

        <h2 style={h2Style}>5. Vaša prava</h2>
        <p style={pStyle}>
          U skladu s Općom uredbom o zaštiti podataka (GDPR), imate pravo na
          pristup, ispravak, brisanje i prenosivost vaših osobnih podataka.
          Zahtjev možete uputiti na email:{' '}
          <a href="mailto:studio.amage@gmail.com" style={{ color: '#935638' }}>
            studio.amage@gmail.com
          </a>
          .
        </p>

      </div>
    </main>
  )
}
