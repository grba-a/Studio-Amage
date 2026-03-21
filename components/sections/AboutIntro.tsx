import Image from 'next/image'
import FadeInOnScroll from '@/components/ui/FadeInOnScroll'

// Server component — no 'use client'
export default function AboutIntro() {
  return (
    <section
      aria-labelledby="about-heading"
      style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: '1200px' }}
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">

          {/* ── Left column: text ── */}
          <FadeInOnScroll direction="left">
            <div>
              <p
                className="font-sans font-medium uppercase"
                style={{
                  fontSize:      '11px',
                  letterSpacing: '0.2em',
                  color:         '#935638',
                  marginBottom:  '1.25rem',
                }}
              >
                O NAMA
              </p>

              <h2
                id="about-heading"
                className="font-serif font-bold"
                style={{
                  fontSize:     'clamp(28px, 4vw, 42px)',
                  color:        '#935638',
                  lineHeight:   1.2,
                  marginBottom: '1.5rem',
                }}
              >
                Studio Amage je oaza mira i luksuzne frizerske usluge u Splitu
              </h2>

              <p
                className="font-sans"
                style={{
                  fontSize:   '16px',
                  lineHeight: 1.8,
                  color:      '#6b4c3b',
                }}
              >
                U Studiju Amage vjerujemo da svaki rezervirani termin treba biti
                više od običnog dolaska u frizerski salon. Svaki dolazak je iskustvo
                krojeno po mjeri, s fokusom na tebe, tvoju kosu i rezultat koji traje.
              </p>
            </div>
          </FadeInOnScroll>

          {/* ── Right column: image ── */}
          <FadeInOnScroll direction="right" delay={150}>
            <div
              style={{
                position:     'relative',
                borderRadius: '12px',
                overflow:     'hidden',
                aspectRatio:  '4 / 5',
                boxShadow:    '0 12px 40px rgba(44, 24, 16, 0.12)',
              }}
            >
              <Image
                src="/images/salon/salon-1.jpg"
                alt="Studio Amage interijer frizerski salon Split"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </FadeInOnScroll>

        </div>
      </div>
    </section>
  )
}
