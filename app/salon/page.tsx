import type { Metadata } from 'next'
import Image from 'next/image'
import SalonCarousel from '@/components/sections/SalonCarousel'
import Link from 'next/link'
import AboutIntro from '@/components/sections/AboutIntro'

// ── SEO ────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Salon i prostor',
  description:
    'Studio Amage — frizerski studio u Splitu. Upoznaj naš intiman prostor u Trenkovoj ulici 74 i vlasnicu Mariju Jurčević.',
  alternates: { canonical: 'https://studioamage.com/salon' },
  openGraph: {
    images: [{ url: 'https://studioamage.com/images/salon/salon-1.webp', width: 1200, height: 630, alt: 'Studio Amage salon — Trenkova 74 Split' }],
  },
}

// ── Detail items ───────────────────────────────────────────────────────────────
const DETAILS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    text: 'Jedan klijent u jednom trenutku',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    text: 'Trenkova ulica 74, Split',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: 'Termini po dogovoru',
  },
] as const

// ── Values ─────────────────────────────────────────────────────────────────────
const VALUES = [
  {
    num:   '01',
    title: 'Personalizacija',
    text:  'Svaki klijent je jedinstven. Slušamo, analiziramo i kreiramo plan koji je savršen upravo za tebe.',
  },
  {
    num:   '02',
    title: 'Kvaliteta',
    text:  'Radimo isključivo s premium proizvodima i tehnikama koji su sigurni za kosu i daju dugotrajan i vidljiv rezultat.',
  },
  {
    num:   '03',
    title: 'Edukacija',
    text:  'Stalno se usavršavamo i pratimo svjetske trendove kako bismo ti uvijek ponudili "best-in-class" uslugu.',
  },
] as const

// ── Page ───────────────────────────────────────────────────────────────────────
export default function SalonPage() {
  return (
    <main>

      {/* ══ 1. PAGE HERO ════════════════════════════════════════════════════ */}
      <section
        style={{
          background:     'linear-gradient(135deg, #ede3db 0%, #f4ece4 50%, #e8ddd5 100%)',
          minHeight:      '320px',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          textAlign:      'center',
          padding:        'calc(80px + 3.5rem) 24px 3.5rem',
          position:       'relative',
          overflow:       'hidden',
        }}
      >
        <div aria-hidden="true" style={{
          position: 'absolute', top: 0, right: 0, width: 0, height: 0,
          borderStyle: 'solid', borderWidth: '0 200px 200px 0',
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
            O NAMA
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
            Salon i prostor
          </h1>

        </div>
      </section>

      <AboutIntro />

      {/* ══ 2. INTERIJER SEKCIJA ════════════════════════════════════════════ */}
      <section
        aria-labelledby="interior-heading"
        style={{ backgroundColor: 'var(--bg)', padding: '80px 0' }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[55fr_45fr] lg:gap-16">

            {/* Image carousel */}
            <SalonCarousel />

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
                STUDIO PROSTOR
              </p>

              <h2
                id="interior-heading"
                style={{
                  fontFamily:   'Playfair Display, serif',
                  fontSize:     'clamp(28px, 3.5vw, 38px)',
                  fontWeight:    700,
                  color:        '#935638',
                  lineHeight:    1.2,
                  marginBottom: '1.5rem',
                }}
              >
                Zavirite u naš salon
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
                Studio Amage nije salon ispunjen redovima stolica i užurbanim
                ritmom. To je intiman prostor posvećen jednom klijentu — tebi.
                Jer pravi rezultati zahtijevaju potpunu pažnju.
              </p>

              {/* Detail items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {DETAILS.map(({ icon, text }) => (
                  <div
                    key={text}
                    style={{
                      display:    'flex',
                      alignItems: 'center',
                      gap:        '14px',
                    }}
                  >
                    <span
                      style={{
                        color:       '#935638',
                        flexShrink:   0,
                        width:       '18px',
                        display:     'flex',
                        alignItems:  'center',
                      }}
                    >
                      {icon}
                    </span>
                    <span
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize:   '15px',
                        color:      '#6b4c3b',
                        lineHeight:  1.5,
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 3. MARIJA BIO ═══════════════════════════════════════════════════ */}
      <section
        aria-labelledby="bio-heading"
        style={{ backgroundColor: '#ede3db', padding: '80px 0' }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* Portrait */}
            <div
              style={{
                position:     'relative',
                aspectRatio:  '3 / 4',
                borderRadius: '16px',
                overflow:     'hidden',
                boxShadow:    '0 16px 48px rgba(44, 24, 16, 0.12)',
              }}
            >
              <Image
                src="/images/marija/marija-portret.webp"
                alt="Marija Jurčević — Studio Amage Split"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

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
                TKO STOJI IZA SVEGA?
              </p>

              <h2
                id="bio-heading"
                style={{
                  fontFamily:   'Playfair Display, serif',
                  fontSize:     'clamp(36px, 4.5vw, 48px)',
                  fontWeight:    700,
                  color:        '#935638',
                  lineHeight:    1.15,
                  marginBottom: '0.75rem',
                }}
              >
                Marija Jurčević
              </h2>

              {/* Badge */}
              <span
                style={{
                  display:         'inline-block',
                  backgroundColor: '#935638',
                  color:           '#ffffff',
                  fontFamily:      'Poppins, sans-serif',
                  fontSize:        '11px',
                  fontWeight:       500,
                  letterSpacing:   '0.1em',
                  textTransform:   'uppercase',
                  borderRadius:    '9999px',
                  padding:         '6px 16px',
                  marginBottom:    '1.75rem',
                }}
              >
                Certificirana edukatorica
              </span>

              <div
                style={{
                  display:       'flex',
                  flexDirection: 'column',
                  gap:           '1rem',
                  fontFamily:    'Poppins, sans-serif',
                  fontSize:      '15px',
                  lineHeight:     1.8,
                  color:         '#6b4c3b',
                }}
              >
                <p className="text-justify">
                  Marija Jurčević je osnivačica i vlasnica Studio Amage — frizerskog
                  studija koji je redefinirao ono što znači osobna pažnja. S više od
                  deset godina iskustva u frizerskoj industriji, Marija je izgradila
                  reputaciju stručnjakinje za tehnike bojanja, balayage i transformacije
                  kose.
                </p>
                <p className="text-justify">
                  Njezin pristup uvijek počinje konzultacijom — razgovorom u kojemu
                  sluša, analizira i razumije što klijent želi, ali i što je dugoročno
                  zdravo za kosu. Rezultat nije samo estetski — to je investicija u
                  samopouzdanje i dobrobit.
                </p>
                <p className="text-justify">
                  Kao certificirana edukatorica, Marija redovito pohađa međunarodne
                  seminare i educira mlade frizere u tehnikama koje spajaju kreativnost
                  i stručnost. Njen rad prati filozofija: svaki klijent zaslužuje
                  tretman koji je napravljen isključivo za njega.
                </p>
                <p className="text-justify">
                  Studio Amage je nastao iz jedne jednostavne ideje — da frizerstvo
                  može i mora biti intimno, pažljivo i personalizirano. I upravo to
                  Marija svaki dan donosi u svoje radno mjesto.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 4. VRIJEDNOSTI ══════════════════════════════════════════════════ */}
      <section
        aria-labelledby="values-heading"
        style={{ backgroundColor: '#f4ece4', padding: '80px 0' }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p
              style={{
                fontFamily:    'Poppins, sans-serif',
                fontSize:      '11px',
                fontWeight:     500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color:         '#935638',
                marginBottom:  '1rem',
              }}
            >
              ŠTO NAS POKREĆE
            </p>
            <h2
              id="values-heading"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize:   'clamp(26px, 3.5vw, 34px)',
                fontWeight:  700,
                color:      '#935638',
                lineHeight:  1.2,
              }}
            >
              Naše vrijednosti
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {VALUES.map(({ num, title, text }) => (
              <div
                key={num}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius:    '16px',
                  padding:         '36px 32px',
                  boxShadow:       '0 2px 16px rgba(44, 24, 16, 0.06)',
                  textAlign:       'center',
                }}
              >
                <p
                  style={{
                    fontFamily:   'Playfair Display, serif',
                    fontSize:     '48px',
                    fontWeight:    700,
                    color:        '#935638',
                    lineHeight:    1,
                    marginBottom: '20px',
                    opacity:       0.2,
                  }}
                >
                  {num}
                </p>
                <h3
                  style={{
                    fontFamily:   'Playfair Display, serif',
                    fontSize:     '22px',
                    fontWeight:    700,
                    color:        '#935638',
                    lineHeight:    1.3,
                    marginBottom: '12px',
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize:   '14px',
                    lineHeight:  1.8,
                    color:      '#6b4c3b',
                  }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. CTA ══════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: '#ede3db',
          paddingTop:      '80px',
          paddingBottom:   '80px',
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
              marginBottom: '1.25rem',
            }}
          >
            Dođi i uvjeri se osobno
          </h2>
          <p
            style={{
              fontFamily:   'Poppins, sans-serif',
              fontSize:     '16px',
              lineHeight:    1.75,
              color:        '#6b4c3b',
              marginBottom: '2.5rem',
            }}
          >
            Rezerviraj termin i doživi razliku između salona i studija
            koji je stvoren isključivo za tebe.
          </p>
          <Link href="/#rezervacija" className="hero-cta">
            Rezerviraj svoj termin
          </Link>
        </div>
      </section>

    </main>
  )
}
