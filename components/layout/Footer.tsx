import Link from 'next/link'
import Image from 'next/image'

// ── Navigation links ─────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'PONUDA',    href: '/tretmani-usluge' },
  { label: 'TRANSFORMACIJE', href: '/transformacije' },
  { label: 'O NAMA',    href: '/salon' },
  { label: 'GALERIJA',  href: '/galerija' },
  { label: 'BLOG',      href: '/blog' },
]

const LEGAL_LINKS = [
  { label: 'Privatnost', href: '/privacy' },
  { label: 'Uvjeti',     href: '/terms' },
  { label: 'Kolačići',   href: '/cookies' },
]

// ── Inline SVG icons ──────────────────────────────────────────────────────────
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

const IconWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15
      -.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463
      -2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606
      .134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52
      -.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51
      -.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372
      -.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074
      .149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625
      .712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413
      .248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.555 4.118 1.528 5.846L.057 23.688
      a.5.5 0 0 0 .626.641l5.99-1.52A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12
      S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.016-1.382l-.36-.214-3.724.944
      .972-3.63-.235-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.58 6.58 2.182 12 2.182
      S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
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

// ── Column heading ────────────────────────────────────────────────────────────
function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="font-sans font-semibold uppercase mb-5"
      style={{ fontSize: '11px', letterSpacing: '0.15em', color: '#935638' }}
    >
      {children}
    </h3>
  )
}

// ── Schema.org JSON-LD ────────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HairSalon',
  name: 'Studio Amage',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Trenkova ulica 74',
    addressLocality: 'Split',
    postalCode: '21000',
    addressCountry: 'HR',
  },
  telephone: '+385993496435',
  email: 'studio.amage@gmail.com',
  url: 'https://studioamage.com',
  sameAs: [
    'https://www.instagram.com/studio.amage/',
    'https://web.facebook.com/profile.php?id=61579663233614&locale=hr_HR',
    'https://www.tiktok.com/@studio.amage',
  ],
}

// ── Component (Server Component — no 'use client') ────────────────────────────
export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#ede3db' }}>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Main grid ── */}
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* ── Col 1: Logo ── */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="no-underline inline-block">
              <Image
                src="/images/logo/logo_amage.png"
                alt="Studio Amage"
                width={180}
                height={72}
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
              />
            </Link>
          </div>

          {/* ── Col 2: Navigacija ── */}
          <div>
            <ColHeading>Navigacija</ColHeading>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans uppercase hover:underline transition-colors duration-200"
                    style={{ fontSize: '12px', letterSpacing: '0.08em', color: '#935638' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Kontakt ── */}
          <div>
            <ColHeading>Kontakt</ColHeading>
            <div className="flex flex-col gap-4">

              {/* Social icons row */}
              <div className="flex items-center gap-4">
                {[
                  { name: 'Instagram', href: 'https://www.instagram.com/studio.amage/',                              Icon: IconInstagram },
                  { name: 'Facebook',  href: 'https://web.facebook.com/profile.php?id=61579663233614&locale=hr_HR', Icon: IconFacebook },
                  { name: 'TikTok',    href: 'https://www.tiktok.com/@studio.amage',                               Icon: IconTikTok },
                  { name: 'WhatsApp',  href: 'https://wa.me/385993496435',                                         Icon: IconWhatsApp },
                ].map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="transition-opacity duration-200 hover:opacity-70"
                    style={{ color: '#935638' }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>

              {/* Email */}
              <a
                href="mailto:studio.amage@gmail.com"
                className="flex items-center gap-2 hover:underline transition-colors duration-200"
                style={{ fontSize: '13px', color: 'var(--text-muted)' }}
              >
                <span style={{ color: '#935638', flexShrink: 0 }}>
                  <IconMail />
                </span>
                studio.amage@gmail.com
              </a>

              {/* Phone */}
              <a
                href="tel:+385993496435"
                className="flex items-center gap-2 hover:underline transition-colors duration-200"
                style={{ fontSize: '13px', color: 'var(--text-muted)' }}
              >
                <span style={{ color: '#935638', flexShrink: 0 }}>
                  <IconPhone />
                </span>
                +385 99 349 6435
              </a>
            </div>
          </div>

          {/* ── Col 4: Rezervacije ── */}
          <div>
            <ColHeading>Rezervacije</ColHeading>
            <div className="flex flex-col gap-3">
              <p className="font-sans" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Termini po dogovoru
              </p>
              <p className="font-sans" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                Kontaktiraj nas za dostupnost
              </p>
              <Link
                href="/#rezervacija"
                className="nav-cta mt-2 inline-block text-center"
              >
                Rezerviraj termin
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{ borderTop: '1px solid rgba(147, 86, 56, 0.15)' }}>
        <div
          className="mx-auto max-w-7xl px-6 py-4
                     flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-sans" style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
            © 2026 Studio Amage. Sva prava pridržana.
          </p>
          <div className="flex items-center gap-4">
            {LEGAL_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="font-sans hover:underline transition-colors duration-200"
                style={{ fontSize: '11px', color: 'var(--text-muted)' }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
