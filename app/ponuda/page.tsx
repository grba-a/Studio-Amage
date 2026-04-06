import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// ── SEO ───────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Ponuda — balayage, bojanje, šišanje',
  description:
    'Pogledajte ponudu Studio Amage — balayage, bojanje, šišanje i personalizirani frizerski tretmani u Splitu. Trenkova ulica 74.',
  alternates: { canonical: 'https://studioamage.com/ponuda' },
  openGraph: {
    images: [{ url: 'https://studioamage.com/images/hero/hero-1.webp', width: 1200, height: 630, alt: 'Tretmani i usluge — Studio Amage Split' }],
  },
}

// ── Service data ──────────────────────────────────────────────────────────────
const SERVICES = [
  {
    name:    'Bojanje i pramenovi',
    short:   'Bojanje koje izgleda skupo, čak i tjednima nakon termina',
    detail:  'Precizna tehnika nanošenja boje koja ostavlja prirodan prelaz i sjaj koji traje. Idealno za one koji žele promjenu bez drastičnog reza.',
    imgSrc:  '/images/galerija/galerija-13.webp',
    imgAlt:  'Bojanje i pramenovi — Studio Amage Split',
  },
  {
    name:    'Šišanje i feniranje',
    short:   'Precizno šišanje i završni styling prilagođen obliku lica, teksturi i životnom stilu',
    detail:  'Svaki rez počinje detaljnom konzultacijom. Cilj je frizura koja izgleda dobro i kad ju sami stiliziraš kod kuće.',
    imgSrc:  '/images/galerija/galerija-12.webp',
    imgAlt:  'Šišanje i feniranje — Studio Amage Split',
  },
  {
    name:    'Balayage',
    short:   'Ručno oslikani pramenovi koji izgledaju prirodno i rastu lijepo — bez oštrih linija',
    detail:  'Tehnika bojanja rukom koja daje najprirodniji rezultat. Savršena za one koji žele low-maintenance kosu s WOW efektom.',
    imgSrc:  '/images/galerija/galerija-16.webp',
    imgAlt:  'Balayage — Studio Amage Split',
  },
] as const

// ── Page ──────────────────────────────────────────────────────────────────────
export default function TretmaniUslugePage() {
  return (
    <main>

      {/* ══ 1. PAGE HERO ═══════════════════════════════════════════════════ */}
      <section
        style={{
          background:   'linear-gradient(135deg, #ede3db 0%, #f4ece4 50%, #e8ddd5 100%)',
          minHeight:    '320px',
          display:      'flex',
          alignItems:   'center',
          justifyContent: 'center',
          textAlign:    'center',
          padding:      'calc(80px + 3.5rem) 24px 3.5rem',
          position:     'relative',
          overflow:     'hidden',
        }}
      >
        {/* Decorative corner triangle */}
        <div aria-hidden="true" style={{
          position:    'absolute',
          top:          0,
          right:        0,
          width:        0,
          height:       0,
          borderStyle: 'solid',
          borderWidth: '0 200px 200px 0',
          borderColor: 'transparent rgba(147,86,56,0.08) transparent transparent',
        }} />

        <div style={{ maxWidth: '800px', position: 'relative' }}>
          <p
            style={{
              fontFamily:    'Poppins, sans-serif',
              fontSize:      '11px',
              fontWeight:     500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color:         '#935638',
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
              color:        '#935638',
              lineHeight:    1.15,
              marginBottom: '1.25rem',
            }}
          >
            Tretmani i usluge
          </h1>

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
            {SERVICES.map(({ name, short, detail, imgSrc, imgAlt }) => (
              <article key={name} className="service-card">

                {/* Image */}
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <Image src={imgSrc} alt={imgAlt} fill style={{ objectFit: 'cover' }} />
                </div>

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
                    className="text-justify"
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
                className="text-justify"
                style={{
                  fontFamily:   'Poppins, sans-serif',
                  fontSize:     '16px',
                  lineHeight:    1.8,
                  color:        '#6b4c3b',
                  marginBottom: '2rem',
                }}
              >
                Potpuna promjena izgleda koja spaja personaliziran plan, stručnu tehniku
                i njegu kose za rezultat koji traje.
                <br />
                Ovo nije samo šišanje, ovo je potpuna transformacija.
              </p>

              <Link href="/transformacije" className="btn-outline-brand">
                Saznaj više
              </Link>
            </div>

            {/* Image */}
            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '3/4' }}>
              <Image
                src="/images/galerija/galerija-4.webp"
                alt="Amage Transformacija — frizerski salon Split"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
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
              textAlign:    'center',
            }}
          >
            Rezervirajte termin i javite nam koje usluge Vas zanimaju.
            <br />
            Javljamo se u roku 24 sata.
          </p>
          <Link href="/#rezervacija" className="hero-cta">
            Rezerviraj termin
          </Link>
        </div>
      </section>

    </main>
  )
}
