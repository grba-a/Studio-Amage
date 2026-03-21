import FadeInOnScroll from '@/components/ui/FadeInOnScroll'

// Server component — no 'use client'
// DOM order: text first (SEO/mobile-first), image second
// Desktop: CSS reorders → image LEFT (45%), text RIGHT (55%)
export default function BioSection() {
  return (
    <section
      aria-labelledby="bio-heading"
      style={{ backgroundColor: '#ede3db', paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[45fr_55fr] lg:gap-0">

          {/* ── Text (DOM first → mobile top, desktop right) ── */}
          <FadeInOnScroll
            direction="right"
            delay={100}
            className="order-1 lg:order-2"
            style={{ paddingLeft: 0 }}
          >
            <div className="lg:pl-[60px]">
              <p
                className="font-sans font-medium uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#935638', marginBottom: '1.25rem' }}
              >
                TKO STOJI IZA SVEGA?
              </p>

              <h2
                id="bio-heading"
                className="font-serif font-bold"
                style={{
                  fontSize:     'clamp(32px, 4.5vw, 52px)',
                  color:        '#935638',
                  lineHeight:   1.15,
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
                  className="font-sans"
                  style={{
                    fontSize:     '15px',
                    lineHeight:   1.9,
                    color:        '#6b4c3b',
                    marginBottom: i < 3 ? '1.25rem' : 0,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </FadeInOnScroll>

          {/* ── Image (DOM second → mobile bottom, desktop left) ── */}
          <FadeInOnScroll direction="left" className="order-2 lg:order-1">
            <div
              role="img"
              aria-label="Marija Jurčević frizerka Studio Amage Split"
              style={{
                backgroundColor:    '#a89080',
                borderRadius:       '12px',
                aspectRatio:        '3 / 4',
                boxShadow:          '0 16px 48px rgba(44, 24, 16, 0.14)',
                backgroundImage:    'url(/images/marija/marija-portret.jpg)',
                backgroundSize:     'cover',
                backgroundPosition: 'center top',
              }}
            />
          </FadeInOnScroll>

        </div>
      </div>
    </section>
  )
}
