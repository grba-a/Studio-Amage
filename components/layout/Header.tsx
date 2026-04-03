'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// ── Navigation links ────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: 'PONUDA',     href: '/ponuda' },
  { label: 'TRANSFORMACIJE',  href: '/transformacije' },
  { label: 'SALON',     href: '/salon' },
  { label: 'GALERIJA',   href: '/galerija' },
  { label: 'BLOG',       href: '/blog' },
] as const

// ── Social links with inline SVG icons ──────────────────────────────────────
const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/studio.amage/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.75" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://web.facebook.com/profile.php?id=61579663233614&locale=hr_HR',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@studio.amage',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5
          2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01
          a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34
          6.34 6.34 0 0 0 6.33-6.34V9.01a8.16 8.16 0 0 0 4.79 1.54V7.1
          a4.85 4.85 0 0 1-1.02-.41z" />
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/385993496435',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
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
    ),
  },
]

// ── Component ────────────────────────────────────────────────────────────────
export default function Header() {
  const [scrolled,    setScrolled]    = useState(false)
  const [drawerOpen,  setDrawerOpen]  = useState(false)
  const pathname = usePathname()

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll() // run once on mount
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ESC key closes drawer
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  // Close drawer on route change
  useEffect(() => { setDrawerOpen(false) }, [pathname])

  const closeDrawer = useCallback(() => setDrawerOpen(false), [])
  const isActive    = (href: string)  => pathname === href

  return (
    <>
      {/* ══ DESKTOP / STICKY HEADER ══════════════════════════════════════ */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? 'rgba(244, 236, 228, 0.95)' : 'transparent',
          backdropFilter:  scrolled ? 'blur(8px)' : 'none',
          boxShadow:       scrolled ? '0 1px 20px rgba(0,0,0,0.06)' : 'none',
          transition:      'background-color 0.35s ease, backdrop-filter 0.35s ease, box-shadow 0.35s ease',
        }}
      >
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 no-underline">
            <Image
              src="/images/logo/logo_amage.png"
              alt="Studio Amage logo"
              width={160}
              height={80}
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
              priority
            />
          </Link>

          {/* Desktop nav — hidden on mobile */}
          <nav
            className="hidden md:flex items-center gap-2 flex-1 justify-center"
            aria-label="Glavna navigacija"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`nav-pill${isActive(href) ? ' active' : ''}${!scrolled ? ' nav-pill-hero' : ''}`}
              >
                {label}
              </Link>
            ))}

            <Link href="/#rezervacija" className="nav-cta ml-2">
              REZERVIRAJ
            </Link>
          </nav>

          {/* Right: socials (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-4 flex-shrink-0">

            {/* Social icons — desktop only */}
            <div className="hidden md:flex items-center gap-3">
              {SOCIAL_LINKS.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-brand hover:text-brand-dark transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Hamburger — mobile only */}
            <button
              className="flex md:hidden flex-col justify-center items-center
                         w-10 h-10 gap-[5px] -mr-1"
              onClick={() => setDrawerOpen(true)}
              aria-label="Otvori meni"
              aria-expanded={drawerOpen}
            >
              <span className="block w-6 h-[1.5px] bg-brand transition-all duration-300" />
              <span className="block w-6 h-[1.5px] bg-brand transition-all duration-300" />
              <span className="block w-4 h-[1.5px] bg-brand transition-all duration-300 self-start" />
            </button>
          </div>
        </div>
      </header>

      {/* ══ MOBILE DRAWER ════════════════════════════════════════════════ */}
      {/* Backdrop — fades in separately so it doesn't block clicks */}
      <div
        className="fixed inset-0 z-[99] bg-black/20 md:hidden"
        style={{
          opacity:    drawerOpen ? 1 : 0,
          pointerEvents: drawerOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        className="fixed inset-0 z-[100] flex flex-col md:hidden"
        style={{
          background:     'rgba(244, 236, 228, 0.85)',
          backdropFilter: 'blur(20px)',
          transform:  drawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Navigacijski izbornik"
      >
        {/* Drawer header row */}
        <div className="flex items-center justify-between px-6 h-20 flex-shrink-0">
          <Link href="/" onClick={closeDrawer} className="no-underline">
            <Image
              src="/images/logo/logo_amage.png"
              alt="Studio Amage logo"
              width={130}
              height={65}
              style={{ objectFit: 'contain', objectPosition: 'left center' }}
              priority
            />
          </Link>

          {/* Close (×) button */}
          <button
            onClick={closeDrawer}
            className="w-10 h-10 flex items-center justify-center
                       text-brand hover:text-brand-dark transition-colors duration-200"
            aria-label="Zatvori izbornik"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <line x1="18" y1="6" x2="6"  y2="18" />
              <line x1="6"  y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav links — vertically centered */}
        <nav
          className="flex-1 flex flex-col items-center justify-center gap-6"
          aria-label="Mobilna navigacija"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={closeDrawer}
              style={{
                fontFamily:    'Poppins, sans-serif',
                fontSize:      '32px',
                fontWeight:     600,
                letterSpacing: '0.05em',
                color:         '#935638',
                textDecoration: 'none',
                opacity: isActive(href) ? 1 : 0.85,
                transition: 'opacity 0.2s ease',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Drawer footer — CTA + socials */}
        <div className="flex flex-col items-center gap-6 px-6 pb-12 flex-shrink-0">
          <Link
            href="/#rezervacija"
            onClick={closeDrawer}
            className="w-full max-w-xs rounded-full bg-brand text-white text-center
                       py-4 text-sm font-medium tracking-widest uppercase
                       transition-all duration-200 hover:bg-brand-dark"
          >
            REZERVIRAJ
          </Link>

          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="text-brand hover:text-brand-dark transition-colors duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
