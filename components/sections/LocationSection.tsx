import FadeInOnScroll from '@/components/ui/FadeInOnScroll'

// Server component — no 'use client'

const IconPin = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
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
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
)

const IconClock = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

export default function LocationSection() {
  return (
    <section
      aria-labelledby="location-heading"
      style={{ backgroundColor: 'var(--bg)', paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: info ── */}
          <FadeInOnScroll direction="left">
            <div>
              <p
                className="font-sans font-medium uppercase"
                style={{ fontSize: '11px', letterSpacing: '0.2em', color: '#935638', marginBottom: '1.25rem' }}
              >
                LOKACIJA
              </p>

              <h2
                id="location-heading"
                className="font-serif font-bold"
                style={{
                  fontSize:     'clamp(28px, 3.5vw, 38px)',
                  color:        '#935638',
                  lineHeight:   1.2,
                  marginBottom: '2.5rem',
                }}
              >
                Gdje nas pronaći?
              </h2>

              {/* Info rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                {/* Address */}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#935638', marginTop: '1px', flexShrink: 0 }}>
                    <IconPin />
                  </span>
                  <span className="font-sans" style={{ fontSize: '15px', color: '#6b4c3b', lineHeight: 1.6 }}>
                    Trenkova ulica 74, 21000 Split
                  </span>
                </div>

                {/* Phone */}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <span style={{ color: '#935638', flexShrink: 0 }}>
                    <IconPhone />
                  </span>
                  <a
                    href="tel:+385993496435"
                    className="font-sans hover:underline transition-colors duration-200"
                    style={{ fontSize: '15px', color: '#6b4c3b' }}
                  >
                    +385 99 349 6435
                  </a>
                </div>

                {/* Email */}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <span style={{ color: '#935638', flexShrink: 0 }}>
                    <IconMail />
                  </span>
                  <a
                    href="mailto:studio.amage@gmail.com"
                    className="font-sans hover:underline transition-colors duration-200"
                    style={{ fontSize: '15px', color: '#6b4c3b' }}
                  >
                    studio.amage@gmail.com
                  </a>
                </div>

                {/* Hours */}
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#935638', marginTop: '1px', flexShrink: 0 }}>
                    <IconClock />
                  </span>
                  <div className="font-sans" style={{ fontSize: '15px', color: '#6b4c3b', lineHeight: 1.7 }}>
                    Termini po dogovoru
                  </div>
                </div>

              </div>
            </div>
          </FadeInOnScroll>

          {/* ── Right: Google Maps iframe ── */}
          <FadeInOnScroll direction="right" delay={150}>
            <iframe
              src="https://maps.google.com/maps?q=Trenkova+ulica+74,+Split,+Croatia&output=embed&z=16"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px', display: 'block' }}
              loading="lazy"
              title="Studio Amage lokacija na Google mapi"
            />
          </FadeInOnScroll>

        </div>
      </div>
    </section>
  )
}
