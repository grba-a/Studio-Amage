'use client'

import { useState } from 'react'

// ── FAQ data ──────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: 'Koliko unaprijed se trebam naručiti?',
    a: 'Preporučujemo naručivanje najmanje 7–14 dana unaprijed, posebno za složenije tretmane poput balayagea i transformacija. Za šišanje i feniranje ponekad smo dostupni i kraćim narokom. Kontaktirajte nas putem obrasca ili telefona i provjerit ćemo dostupnost.',
  },
  {
    q: 'Radite li balayage i složenije tehnike bojanja?',
    a: 'Da! Balayage, highlights, pramenovi, toniranje i sve tehnike bojanja su naša specijalnost. Svaki tretman bojanja počinje konzultacijom gdje zajedno analiziramo stanje vaše kose i definiramo cilj koji je dugoročno zdrav i lijep.',
  },
  {
    q: 'Kako mogu rezervirati termin?',
    a: 'Termin možete rezervirati putem kontakt obrasca na ovoj stranici, pozivom na +385 99 349 6435 ili porukom na Instagram @studio.amage. Potvrdit ćemo vaš termin u najkraćem mogućem roku.',
  },
] as const

// ── Schema.org FAQPage JSON-LD ────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section
      aria-labelledby="faq-heading"
      style={{ backgroundColor: '#f4ece4', padding: '80px 0' }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
            FAQ
          </p>
          <h2
            id="faq-heading"
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize:   'clamp(28px, 4vw, 38px)',
              fontWeight:  700,
              color:      '#935638',
              lineHeight:  1.2,
            }}
          >
            Česta pitanja
          </h2>
        </div>

        {/* Accordion items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {FAQS.map(({ q, a }, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius:    '12px',
                  border:          '1px solid rgba(147, 86, 56, 0.15)',
                  overflow:        'hidden',
                }}
              >
                {/* Question row */}
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  style={{
                    width:           '100%',
                    display:         'flex',
                    alignItems:      'center',
                    justifyContent:  'space-between',
                    gap:             '16px',
                    padding:         '20px 28px',
                    background:      'none',
                    border:          'none',
                    cursor:          'pointer',
                    textAlign:       'left',
                  }}
                >
                  <span
                    style={{
                      fontFamily:  'Poppins, sans-serif',
                      fontSize:    '16px',
                      fontWeight:   500,
                      color:       '#2c1810',
                      lineHeight:   1.4,
                    }}
                  >
                    {q}
                  </span>
                  {/* Arrow */}
                  <span
                    aria-hidden="true"
                    style={{
                      color:      '#935638',
                      fontSize:   '14px',
                      flexShrink:  0,
                      transform:  isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      display:    'inline-block',
                    }}
                  >
                    ▶
                  </span>
                </button>

                {/* Answer — max-height accordion */}
                <div
                  style={{
                    maxHeight:  isOpen ? '500px' : '0',
                    overflow:   'hidden',
                    transition: 'max-height 0.35s ease',
                  }}
                >
                  <p
                    style={{
                      fontFamily:  'Poppins, sans-serif',
                      fontSize:    '15px',
                      lineHeight:   1.8,
                      color:       '#6b4c3b',
                      padding:     '0 28px 24px',
                    }}
                  >
                    {a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
