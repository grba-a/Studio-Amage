import Image from 'next/image'

// Server component — no 'use client'
export default function BioSection() {
  return (
    <section
      aria-labelledby="bio-heading"
      style={{ backgroundColor: '#ede3db', paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div style={{
        display:             'grid',
        gridTemplateColumns: '55% 45%',
        gap:                 '80px',
        alignItems:          'center',
        maxWidth:            '1200px',
        margin:              '0 auto',
        padding:             '0 24px',
      }}
        className="bio-grid"
      >

          {/* ── Left: text ── */}
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
                fontSize:     'clamp(32px, 4.5vw, 52px)',
                fontWeight:    700,
                color:        '#935638',
                lineHeight:    1.15,
                marginBottom: '2rem',
              }}
            >
              Marija Jurčević
            </h2>

            {[
              'Marija Jurčević nije samo frizerka, već osoba koja je godinama gradila svoje znanje kroz kontinuirano učenje, putovanja i usavršavanje zanata.',
              'Od Obrtničke škole u Splitu, preko renomiranih salona u Zagrebu, sve do edukacijskih pozornica diljem Europe. Njezin je put oblikovan predanošću, preciznošću i strašću prema kosi.',
              'Nakon više od šest godina iskustva u radu s klijentima, kao i u edukaciji drugih frizera, odlučila je stvoriti nešto vlastito — prostor koji donosi drugačiji pristup ljepoti i njezi kose.',
              'Studio Amage nije salon ispunjen redovima stolica i užurbanim ritmom. To je intiman prostor posvećen jednom klijentu — tebi. Jer pravi rezultati zahtijevaju potpunu pažnju.',
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontFamily:   'Poppins, sans-serif',
                  fontSize:     '15px',
                  lineHeight:    1.9,
                  color:        '#6b4c3b',
                  marginBottom: i < 3 ? '1.25rem' : 0,
                }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* ── Right: image ── */}
          <div style={{
            position:     'relative',
            aspectRatio:  '3/4',
            maxHeight:    '560px',
            borderRadius: '12px',
            overflow:     'hidden',
            width:        '100%',
          }}>
            <Image
              src="/images/marija/marija-portret.jpg"
              alt="Marija Jurčević frizerka Studio Amage Split"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              sizes="(max-width: 768px) 100vw, 45vw"
              priority
            />
          </div>

      </div>
    </section>
  )
}
