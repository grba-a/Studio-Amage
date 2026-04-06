import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'

// ── SEO ────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Transformacije kose — Prije i poslije',
  description:
    'Amage Transformacije — potpune promjene izgleda kose u frizerskom studiju Split. Balayage, pramenovi, rekonstrukcija.',
  alternates: { canonical: 'https://studioamage.com/transformacije' },
  openGraph: {
    images: [{ url: 'https://studioamage.com/images/hero/hero-2.webp', width: 1200, height: 630, alt: 'Transformacije kose — Studio Amage Split' }],
  },
}

// ── Steps data ─────────────────────────────────────────────────────────────────
const STEPS: { num: string; title: string; text: string; node?: ReactNode }[] = [
  {
    num:   '01',
    title: 'Konzultacija',
    text:  'Počinjemo razgovorom. Analiziramo stanje kose, tvoje navike i dugoročni cilj.',
    node:  <>Počinjemo razgovorom te analiziramo stanje kose, tvoje navike i dugoročni cilj.</>,
  },
  {
    num:   '02',
    title: 'Personalizirani plan',
    text:  'Kreiramo plan tretmana koji je dugoročno zdrav i prilagođen tvom životnom stilu.',
  },
  {
    num:   '03',
    title: 'Transformacija & njega',
    text:  'Izvodimo tretman s punom pažnjom i educiramo te kako održavati kosu kod kuće.',
  },
]

// ── Before/After pairs ─────────────────────────────────────────────────────────
const PAIRS = [
  {
    id:         1,
    beforeBg:   '#a09080',
    afterBg:    '#7B9080',
    beforeAlt:  'Prije transformacije 1 — Studio Amage',
    afterAlt:   'Poslije transformacije 1 — Studio Amage',
  },
  {
    id:         2,
    beforeBg:   '#9b8a7a',
    afterBg:    '#7a8f86',
    beforeAlt:  'Prije transformacije 2 — Studio Amage',
    afterAlt:   'Poslije transformacije 2 — Studio Amage',
  },
  {
    id:         3,
    beforeBg:   '#a08878',
    afterBg:    '#788a7e',
    beforeAlt:  'Prije transformacije 3 — Studio Amage',
    afterAlt:   'Poslije transformacije 3 — Studio Amage',
  },
] as const

// ── Page ───────────────────────────────────────────────────────────────────────
export default function TransformacijePage() {
  return (
    <main>

      {/* ══ 1. PAGE HERO ══════════════════════════════════════════════════════ */}
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
            SIGNATURE USLUGA
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
            Amage Transformacije
          </h1>

        </div>
      </section>

      {/* ══ 2. VIDEO SEKCIJA ══════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 0' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '900px' }}>
          <div
            style={{
              position:     'relative',
              paddingTop:   '56.25%',
              borderRadius: '16px',
              overflow:     'hidden',
              boxShadow:    '0 20px 60px rgba(0, 0, 0, 0.12)',
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/1172647016?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
              style={{
                position: 'absolute',
                top:      0,
                left:     0,
                width:    '100%',
                height:   '100%',
                border:   'none',
              }}
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              title="Amage Transformacija — Studio Amage"
            />
          </div>
        </div>
      </section>

      {/* ══ 3. TRI KORAKA ═════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="steps-heading"
        style={{ backgroundColor: '#ede3db', padding: '80px 0' }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
              PROCES
            </p>
            <h2
              id="steps-heading"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize:   'clamp(28px, 4vw, 38px)',
                fontWeight:  700,
                color:      '#935638',
                lineHeight:  1.2,
              }}
            >
              Kako izgleda Amage Transformacija?
            </h2>
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {STEPS.map(({ num, title, text, node }) => (
              <div key={num} style={{ textAlign: 'center' }}>
                {/* Number */}
                <p
                  style={{
                    fontFamily:   'Playfair Display, serif',
                    fontSize:     '64px',
                    fontWeight:    700,
                    color:        '#935638',
                    lineHeight:    1,
                    marginBottom: '16px',
                    opacity:       0.25,
                  }}
                >
                  {num}
                </p>

                {/* Title */}
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

                {/* Text */}
                <p
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize:   '14px',
                    lineHeight:  1.8,
                    color:      '#6b4c3b',
                    maxWidth:   '320px',
                    margin:     '0 auto',
                  }}
                >
                  {node ?? text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. VIDEI U POKRETU ═══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#f4ece4', padding: '80px 0' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>

          <p
            style={{
              fontFamily:    'Poppins, sans-serif',
              fontSize:      '11px',
              fontWeight:     500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color:         '#935638',
              marginBottom:  '12px',
            }}
          >
            TRANSFORMACIJE
          </p>

          <h2
            style={{
              fontFamily:   'Playfair Display, serif',
              fontSize:     'clamp(28px, 4vw, 38px)',
              fontWeight:    700,
              color:        '#935638',
              lineHeight:    1.2,
              marginBottom: '48px',
            }}
          >
            U pokretu
          </h2>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap:                 '24px',
            }}
          >
            {(['transformacije-1', 'transformacije-2', 'transformacije-3'] as const).map((vid, i) => (
              <div
                key={i}
                style={{
                  borderRadius:    '16px',
                  overflow:        'hidden',
                  backgroundColor: '#2c1810',
                  aspectRatio:     '9 / 16',
                  position:        'relative',
                }}
              >
                <video
                  src={`/images/transformacije/${vid}.mp4`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══ 5. BEFORE / AFTER ═════════════════════════════════════════════════ */}
      <section
        aria-labelledby="before-after-heading"
        style={{ backgroundColor: 'var(--bg)', padding: '80px 0' }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>

          {/* Header */}
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
              TRANSFORMACIJE
            </p>
            <h2
              id="before-after-heading"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontSize:   'clamp(28px, 4vw, 38px)',
                fontWeight:  700,
                color:      '#935638',
                lineHeight:  1.2,
              }}
            >
              Prije i poslije
            </h2>
          </div>

          {/* 3-col grid of before/after pairs */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PAIRS.map(({ id, beforeBg, afterBg, beforeAlt, afterAlt }) => (
              <div key={id}>
                {/* Pair side-by-side */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  {/* Before */}
                  <div style={{ flex: 1 }}>
                    <div
                      role="img"
                      aria-label={beforeAlt}
                      style={{
                        backgroundColor:    beforeBg,
                        backgroundImage:    `url(/images/transformacije/before-${id}.jpg)`,
                        backgroundSize:     'cover',
                        backgroundPosition: 'center',
                        aspectRatio:        '3 / 4',
                        borderRadius:       '12px',
                        marginBottom:       '8px',
                      }}
                    />
                    <p
                      style={{
                        fontFamily:    'Poppins, sans-serif',
                        fontSize:      '10px',
                        fontWeight:     500,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color:         '#8b7b6b',
                        textAlign:     'center',
                      }}
                    >
                      PRIJE
                    </p>
                  </div>

                  {/* After */}
                  <div style={{ flex: 1 }}>
                    <div
                      role="img"
                      aria-label={afterAlt}
                      style={{
                        backgroundColor:    afterBg,
                        backgroundImage:    `url(/images/transformacije/after-${id}.jpg)`,
                        backgroundSize:     'cover',
                        backgroundPosition: 'center',
                        aspectRatio:        '3 / 4',
                        borderRadius:       '12px',
                        marginBottom:       '8px',
                      }}
                    />
                    <p
                      style={{
                        fontFamily:    'Poppins, sans-serif',
                        fontSize:      '10px',
                        fontWeight:     500,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color:         '#935638',
                        textAlign:     'center',
                      }}
                    >
                      POSLIJE
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. CTA SEKCIJA ════════════════════════════════════════════════════ */}
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
            Spreman/na za svoju transformaciju?
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
            Rezerviraj konzultaciju i zajedno kreiramo plan koji je savršen za tebe.
          </p>

          <Link href="/#rezervacija" className="hero-cta">
            Rezerviraj konzultaciju
          </Link>
        </div>
      </section>

    </main>
  )
}
