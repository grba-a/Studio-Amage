import type { Metadata } from 'next'
import Link from 'next/link'

// ── SEO ───────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Usluge i tretmani — Balayage, Bojanje',
  description:
    'Frizerske usluge u Splitu — balayage, bojanje, šišanje, feniranje, rekonstrukcija kose. Studio Amage, Trenkova 74, Split.',
  alternates: { canonical: 'https://studioamage.com/tretmani-usluge' },
}

// ── Service data ──────────────────────────────────────────────────────────────
const SERVICES = [
  {
    name:    'Bojanje i pramenovi',
    short:   'Bojanje koje izgleda skupo, čak i tjednima nakon termina',
    detail:  'Precizna tehnika nanošenja boje koja ostavlja prirodan prelaz i sjaj koji traje. Idealno za one koji žele promjenu bez drastičnog reza.',
    imgBg:   '#8B6355',
    imgAlt:  'Bojanje kose i pramenovi — Studio Amage Split',
  },
  {
    name:    'Šišanje i feniranje',
    short:   'Precizno šišanje i završni styling prilagođen obliku lica, teksturi i životnom stilu',
    detail:  'Svaki rez počinje detaljnom konzultacijom. Cilj je frizura koja izgleda dobro i kad ju sami stiliziraš kod kuće.',
    imgBg:   '#6B8B7A',
    imgAlt:  'Šišanje i feniranje — Studio Amage Split',
  },
  {
    name:    'Balayage',
    short:   'Ručno oslikani pramenovi koji izgledaju prirodno i rastu lijepo — bez oštrih linija',
    detail:  'Tehnika bojanja rukom koja daje najprirodniji rezultat. Savršena za one koji žele low-maintenance kosu s WOW efektom.',
    imgBg:   '#8B7B55',
    imgAlt:  'Balayage — Studio Amage Split',
  },
  {
    name:    'Rekonstrukcijski tretman',
    short:   'Tretman za obnavljanje kose koja je oštećena prilikom invazivnih kemijskih procesa',
    detail:  'Dubinska obnova strukture vlasi. Kosa postaje mekana, sjajna i elastična već nakon prvog tretmana.',
    imgBg:   '#7B6B8B',
    imgAlt:  'Rekonstrukcija kose — Studio Amage Split',
  },
  {
    name:    'Toniranje i gloss',
    short:   'Osvježi boju i dodaj intenzivan sjaj bez oštećivanja vlasi',
    detail:  'Idealno između bojanja ili kao standalone tretman za pojačavanje prirodne boje i neutralizaciju neželjenih tonova.',
    imgBg:   '#8B5555',
    imgAlt:  'Toniranje i gloss — Studio Amage Split',
  },
  {
    name:    'Konzultacija',
    short:   'Besplatna analiza kose i kreiranje plana tretmana prilagođenog tebi',
    detail:  'Svaki put kod nas počinje razgovorom. Zajedno definiramo cilj i plan koji je dugoročno zdrav i lijep za tvoju kosu.',
    imgBg:   '#558B6B',
    imgAlt:  'Konzultacija za kosu — Studio Amage Split',
  },
] as const

// ── Page ──────────────────────────────────────────────────────────────────────
export default function TretmaniUslugePage() {
  return (
    <main>

      {/* ══ 1. PAGE HERO ═══════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: '#2c1810',
          paddingTop:      'calc(80px + 3.5rem)', // offset fixed header
          paddingBottom:   '3.5rem',
          textAlign:       'center',
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '800px' }}>
          <p
            style={{
              fontFamily:    'Poppins, sans-serif',
              fontSize:      '11px',
              fontWeight:     500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color:         'rgba(255,255,255,0.55)',
              marginBottom:  '1rem',
            }}
          >
            PONUDA
          </p>

          <h1
            style={{
              fontFamily:   'Playfair Display, serif',
              fontSize:     'clamp(36px, 5vw, 56px)',
              fontWeight:    700,
              color:        '#ffffff',
              lineHeight:    1.15,
              marginBottom: '1.25rem',
            }}
          >
            Tretmani i usluge
          </h1>

          <p
            style={{
              fontFamily:  'Poppins, sans-serif',
              fontSize:    'clamp(15px, 1.5vw, 17px)',
              lineHeight:   1.75,
              color:       'rgba(255,255,255,0.7)',
              maxWidth:    '620px',
              margin:      '0 auto',
            }}
          >
            Odaberi uslugu ili tretman prema cilju koji želiš postići.
            Svaki termin je personaliziran i prilagođen stanju tvoje kose.
          </p>
        </div>
      </section>

      {/* ══ 2. SERVICES GRID ═══════════════════════════════════════════════ */}
      <section
        aria-labelledby="services-heading"
        style={{ paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>

          <h2
            id="services-heading"
            style={{
              fontFamily:   'Playfair Display, serif',
              fontSize:     'clamp(26px, 3vw, 36px)',
              fontWeight:    700,
              color:        '#935638',
              marginBottom: '2.5rem',
              textAlign:    'center',
            }}
          >
            Najtraženije usluge u studiju
          </h2>

          {/* 3 cols desktop, 2 tablet, 1 mobile */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ name, short, detail, imgBg, imgAlt }) => (
              <article key={name} className="service-card">

                {/* Image placeholder */}
                <div
                  role="img"
                  aria-label={imgAlt}
                  style={{
                    backgroundColor:    imgBg,
                    aspectRatio:        '4 / 3',
                    backgroundImage:    `url(/images/services/${name.toLowerCase().replace(/\s+/g, '-')}.jpg)`,
                    backgroundSize:     'cover',
                    backgroundPosition: 'center',
                  }}
                />

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <h3
                    style={{
                      fontFamily:   'Playfair Display, serif',
                      fontSize:     '22px',
                      fontWeight:    700,
                      color:        '#935638',
                      lineHeight:    1.25,
                      marginBottom: '10px',
                    }}
                  >
                    {name}
                  </h3>

                  <p
                    style={{
                      fontFamily:   'Poppins, sans-serif',
                      fontSize:     '14px',
                      color:        '#6b4c3b',
                      lineHeight:    1.65,
                      marginBottom: '12px',
                      fontWeight:    500,
                    }}
                  >
                    {short}
                  </p>

                  <p
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize:   '13px',
                      color:      '#8b7b6b',
                      lineHeight:  1.7,
                    }}
                  >
                    {detail}
                  </p>

                  <Link href="/#rezervacija" className="service-card-cta">
                    Rezerviraj uslugu →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 3. SIGNATURE SEKCIJA ═══════════════════════════════════════════ */}
      <section
        aria-labelledby="signature-heading"
        style={{ backgroundColor: '#ede3db', paddingTop: '5rem', paddingBottom: '5rem' }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Text */}
            <div>
              <p
                style={{
                  fontFamily:    'Poppins, sans-serif',
                  fontSize:      '11px',
                  fontWeight:     500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color:         '#935638',
                  marginBottom:  '1.25rem',
                }}
              >
                SIGNATURE USLUGA
              </p>

              <h2
                id="signature-heading"
                style={{
                  fontFamily:   'Playfair Display, serif',
                  fontSize:     'clamp(30px, 4vw, 42px)',
                  fontWeight:    700,
                  color:        '#935638',
                  lineHeight:    1.2,
                  marginBottom: '1.5rem',
                }}
              >
                Amage Transformacija
              </h2>

              <p
                style={{
                  fontFamily:   'Poppins, sans-serif',
                  fontSize:     '16px',
                  lineHeight:    1.8,
                  color:        '#6b4c3b',
                  marginBottom: '2rem',
                }}
              >
                Potpuna promjena izgleda koja spaja personaliziran plan, stručnu
                tehniku i njegu kose za rezultat koji traje. Ovo nije samo šišanje
                — ovo je reinvencija.
              </p>

              <Link href="/transformacije" className="btn-outline-brand">
                Saznaj više
              </Link>
            </div>

            {/* Image placeholder */}
            <div
              role="img"
              aria-label="Amage Transformacija — Studio Amage Split"
              style={{
                backgroundColor:    '#b8a090',
                borderRadius:       '12px',
                aspectRatio:        '3 / 4',
                boxShadow:          '0 16px 48px rgba(44, 24, 16, 0.12)',
                backgroundImage:    'url(/images/services/transformacija.jpg)',
                backgroundSize:     'cover',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>
      </section>

      {/* ══ 4. KONTAKT CTA ═════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: '#f4ece4',
          paddingTop:      '5rem',
          paddingBottom:   '5rem',
          textAlign:       'center',
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '600px' }}>
          <h2
            style={{
              fontFamily:   'Playfair Display, serif',
              fontSize:     'clamp(28px, 3.5vw, 38px)',
              fontWeight:    700,
              color:        '#935638',
              lineHeight:    1.2,
              marginBottom: '1.5rem',
            }}
          >
            Spreman/na za promjenu?
          </h2>
          <p
            style={{
              fontFamily:   'Poppins, sans-serif',
              fontSize:     '16px',
              color:        '#6b4c3b',
              lineHeight:    1.7,
              marginBottom: '2rem',
            }}
          >
            Rezerviraj termin i javi nam koje usluge te zanimaju.
            Javit ćemo se u roku 24 sata.
          </p>
          <Link href="/#rezervacija" className="hero-cta">
            Rezerviraj termin
          </Link>
        </div>
      </section>

    </main>
  )
}
