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
      </div>
    </section>
  )
}
