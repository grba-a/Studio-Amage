import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

// ── SEO ────────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Blog — savjeti za njegu kose',
  description:
    'Savjeti za njegu kose, trendovi i stručni tekstovi iz Studio Amage frizerskog studija u Splitu.',
  alternates: { canonical: 'https://studioamage.com/blog' },
  openGraph: {
    images: [{ url: 'https://studioamage.com/images/blog/blog-njega-boje.jpg', width: 1200, height: 630, alt: 'Blog — Studio Amage' }],
  },
}

// ── Posts ──────────────────────────────────────────────────────────────────────
const POSTS = [
  {
    slug:     'njega-boje',
    title:    'Kako održavati balayage između salona',
    date:     '15. siječnja 2025.',
    category: 'NJEGA KOSE',
    excerpt:  'Balayage je investicija — evo kako ga zaštititi i produžiti sjaj između termina.',
    bg:       '#8B6355',
  },
  {
    slug:     'novi-tretmani',
    title:    'Novi tretmani u studiju — što je novo u 2025.',
    date:     '3. veljače 2025.',
    category: 'NOVOSTI',
    excerpt:  'Proširili smo ponudu tretmana njege kose. Pogledaj što je novo i zakaži konzultaciju.',
    bg:       '#6B7B5A',
  },
  {
    slug:     'trendovi-sezone',
    title:    'Frizurni trendovi proljeće/ljeto 2025.',
    date:     '20. veljače 2025.',
    category: 'TRENDOVI',
    excerpt:  'Prirodni tonovi, teksturirani valovi i lived-in boja — ovo su trendovi koji dominiraju sezoni.',
    bg:       '#7B6B8B',
  },
] as const

// ── Page ───────────────────────────────────────────────────────────────────────
export default function BlogPage() {
  return (
    <main>

      {/* ══ 1. PAGE HERO ════════════════════════════════════════════════════ */}
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
            BLOG
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
            Blog
          </h1>

        </div>
      </section>

      {/* ══ 2. BLOG KARTICE ═════════════════════════════════════════════════ */}
      <section
        aria-label="Svi članci"
        style={{ backgroundColor: 'var(--bg)', padding: '80px 0' }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '1200px' }}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {POSTS.map(({ slug, title, date, category, excerpt, bg }) => (
              <article key={slug} className="service-card">

                {/* Cover image */}
                <Link href={`/blog/${slug}`} tabIndex={-1} aria-hidden="true">
                  <div style={{ position: 'relative', aspectRatio: '16 / 9', overflow: 'hidden' }}>
                    <Image
                      src={`/images/blog/blog-${slug}.jpg`}
                      alt={title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </Link>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <p
                    style={{
                      fontFamily:    'Poppins, sans-serif',
                      fontSize:      '10px',
                      fontWeight:     500,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color:         '#935638',
                      marginBottom:  '8px',
                    }}
                  >
                    {category}
                  </p>

                  <h2
                    style={{
                      fontFamily:   'Playfair Display, serif',
                      fontSize:     '20px',
                      fontWeight:    700,
                      color:        '#935638',
                      lineHeight:    1.3,
                      marginBottom: '8px',
                    }}
                  >
                    <Link
                      href={`/blog/${slug}`}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                      className="blog-title-link"
                    >
                      {title}
                    </Link>
                  </h2>

                  <p
                    style={{
                      fontFamily:   'Poppins, sans-serif',
                      fontSize:     '12px',
                      color:        '#a08b7a',
                      marginBottom: '12px',
                    }}
                  >
                    {date}
                  </p>

                  <p
                    style={{
                      fontFamily:   'Poppins, sans-serif',
                      fontSize:     '14px',
                      lineHeight:    1.7,
                      color:        '#6b4c3b',
                      marginBottom: '16px',
                    }}
                  >
                    {excerpt}
                  </p>

                  <Link href={`/blog/${slug}`} className="service-card-cta">
                    Čitaj više →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
