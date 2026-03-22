'use client'

import { useState } from 'react'

// ── Inline SVG icons ──────────────────────────────────────────────────────────
const IconPhone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
      A19.5 19.5 0 0 1 5.26 13a19.79 19.79 0 0 1-3.07-8.67
      A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81
      a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27
      a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
)

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
)

const IconFacebook = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const IconTikTok = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5
      2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01
      a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34
      6.34 6.34 0 0 0 6.33-6.34V9.01a8.16 8.16 0 0 0 4.79 1.54V7.1
      a4.85 4.85 0 0 1-1.02-.41z" />
  </svg>
)

// ── Input / Textarea shared styles ────────────────────────────────────────────
const inputStyle: React.CSSProperties = {
  width:        '100%',
  background:   '#ffffff',
  border:       '1.5px solid rgba(147, 86, 56, 0.2)',
  borderRadius: '10px',
  padding:      '14px 18px',
  fontFamily:   'Poppins, sans-serif',
  fontSize:     '14px',
  color:        '#2c1810',
  outline:      'none',
  marginBottom: '16px',
  boxSizing:    'border-box',
  transition:   'border-color 0.2s ease, box-shadow 0.2s ease',
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    await fetch('https://formspree.io/f/xeelypor', {
      method:  'POST',
      body:    data,
      headers: { Accept: 'application/json' },
    })

    setSubmitted(true)
  }

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = '#935638'
    e.currentTarget.style.boxShadow  = '0 0 0 3px rgba(147, 86, 56, 0.1)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = 'rgba(147, 86, 56, 0.2)'
    e.currentTarget.style.boxShadow  = 'none'
  }

  return (
    <section
      id="rezervacija"
      aria-labelledby="contact-heading"
      style={{ backgroundColor: '#ede3db', padding: '96px 0' }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: info ── */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 500,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: '#935638', marginBottom: '1.25rem',
            }}>
              REZERVACIJA
            </p>

            <h2
              id="contact-heading"
              style={{
                fontFamily:   'Playfair Display, serif',
                fontSize:     'clamp(28px, 3.5vw, 38px)',
                fontWeight:    700,
                color:        '#935638',
                lineHeight:    1.2,
                marginBottom: '1.25rem',
              }}
            >
              Rezerviraj termin u par koraka
            </h2>

            <p style={{
              fontFamily: 'Poppins, sans-serif', fontSize: '16px',
              lineHeight: 1.7, color: '#6b4c3b', marginBottom: '2rem',
            }}>
              Ispunite obrazac i javit ćemo Vam se u roku 24 sata za potvrdu termina.
            </p>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '2rem' }}>
              <a
                href="tel:+385993496435"
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  fontFamily: 'Poppins, sans-serif', fontSize: '15px',
                  color: '#6b4c3b', textDecoration: 'none',
                }}
              >
                <span style={{ color: '#935638' }}><IconPhone /></span>
                +385 99 349 6435
              </a>
              <a
                href="mailto:studio.amage@gmail.com"
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  fontFamily: 'Poppins, sans-serif', fontSize: '15px',
                  color: '#6b4c3b', textDecoration: 'none',
                }}
              >
                <span style={{ color: '#935638' }}><IconMail /></span>
                studio.amage@gmail.com
              </a>
            </div>

            {/* Socials */}
            <div>
              <p style={{
                fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#935638', marginBottom: '12px',
              }}>
                Zaprati nas
              </p>
              <div style={{ display: 'flex', gap: '16px' }}>
                {[
                  { name: 'Instagram', href: 'https://www.instagram.com/studio.amage', Icon: IconInstagram },
                  { name: 'Facebook',  href: 'https://www.facebook.com/studioamage',   Icon: IconFacebook },
                  { name: 'TikTok',    href: 'https://www.tiktok.com/@studioamage',    Icon: IconTikTok },
                ].map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    style={{ color: '#935638' }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: form or success ── */}
          <div>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <p style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: '24px', color: '#935638', fontStyle: 'italic',
                }}>
                  Hvala! Javit ćemo vam se uskoro. ✓
                </p>
                <p style={{
                  fontFamily: 'Poppins, sans-serif',
                  color: '#6b4c3b', marginTop: '12px',
                }}>
                  Vaša rezervacija je primljena.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>

                {/* Ime i prezime */}
                <label style={{
                  display: 'block', fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px', fontWeight: 600, color: '#935638', marginBottom: '6px',
                }}>
                  Ime i prezime
                </label>
                <input
                  type="text"
                  name="ime"
                  required
                  placeholder="Ana Horvat"
                  style={{ ...inputStyle }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />

                {/* Email */}
                <label style={{
                  display: 'block', fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px', fontWeight: 600, color: '#935638', marginBottom: '6px',
                }}>
                  Email adresa
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="ana@email.com"
                  style={{ ...inputStyle }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />

                {/* Telefon */}
                <label style={{
                  display: 'block', fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px', fontWeight: 600, color: '#935638', marginBottom: '6px',
                }}>
                  Broj telefona
                </label>
                <input
                  type="tel"
                  name="telefon"
                  placeholder="+385 91 234 5678"
                  style={{ ...inputStyle }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />

                {/* Poruka */}
                <label style={{
                  display: 'block', fontFamily: 'Poppins, sans-serif',
                  fontSize: '14px', fontWeight: 600, color: '#935638', marginBottom: '6px',
                }}>
                  Što planirate?
                </label>
                <textarea
                  name="poruka"
                  rows={4}
                  placeholder="Npr. balayage i lagane valove..."
                  style={{
                    ...inputStyle,
                    resize:    'vertical',
                    minHeight: '120px',
                  }}
                  onFocus={onFocus}
                  onBlur={onBlur}
                />

                {/* Submit */}
                <button
                  type="submit"
                  style={{
                    width:         '100%',
                    backgroundColor: '#935638',
                    color:          '#ffffff',
                    border:          'none',
                    borderRadius:   '9999px',
                    padding:        '16px',
                    fontFamily:     'Poppins, sans-serif',
                    fontSize:       '14px',
                    fontWeight:      500,
                    letterSpacing:  '0.1em',
                    textTransform:  'uppercase',
                    cursor:         'pointer',
                    transition:     'background-color 0.2s ease',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#7a4529' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#935638' }}
                >
                  Rezerviraj termin
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
