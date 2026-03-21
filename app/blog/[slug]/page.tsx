import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// ── Static posts registry ──────────────────────────────────────────────────────
const POSTS: Record<string, {
  title:    string
  date:     string
  category: string
  excerpt:  string
  bg:       string
}> = {
  'njega-boje': {
    title:    'Kako održavati balayage između salona',
    date:     '15. siječnja 2025.',
    category: 'NJEGA KOSE',
    excerpt:  'Balayage je investicija — evo kako ga zaštititi i produžiti sjaj između termina.',
    bg:       '#8B6355',
  },
  'novi-tretmani': {
    title:    'Novi tretmani u studiju — što je novo u 2025.',
    date:     '3. veljače 2025.',
    category: 'NOVOSTI',
    excerpt:  'Proširili smo ponudu tretmana njege kose. Pogledaj što je novo i zakaži konzultaciju.',
    bg:       '#6B7B5A',
  },
  'trendovi-sezone': {
    title:    'Frizurni trendovi proljeće/ljeto 2025.',
    date:     '20. veljače 2025.',
    category: 'TRENDOVI',
    excerpt:  'Prirodni tonovi, teksturirani valovi i lived-in boja — ovo su trendovi koji dominiraju sezoni.',
    bg:       '#7B6B8B',
  },
}

// ── Static params ──────────────────────────────────────────────────────────────
export function generateStaticParams() {
  return Object.keys(POSTS).map(slug => ({ slug }))
}

// ── Metadata ───────────────────────────────────────────────────────────────────
type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = POSTS[slug]
  if (!post) return { title: 'Članak nije pronađen' }

  return {
    title:       post.title,
    description: post.excerpt,
    alternates:  { canonical: `https://studioamage.com/blog/${slug}` },
  }
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = POSTS[slug]

  if (!post) notFound()

  const { title, date, category, excerpt, bg } = post

  return (
    <main>

      {/* ══ ARTICLE HERO ════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: '#2c1810',
          paddingTop:      'calc(80px + 3.5rem)',
          paddingBottom:   '3.5rem',
          textAlign:       'center',
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '800px' }}>
          <p
            style={{
              fontFamily:    'Poppins, sans-serif',
              fontSize:      '11px',
              fontWeight:     500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color:         'rgba(255,255,255,0.55)',
              marginBottom:  '1rem',
            }}
          >
            {category}
          </p>

          <h1
            style={{
              fontFamily:   'Playfair Display, serif',
              fontSize:     'clamp(28px, 4vw, 48px)',
              fontWeight:    700,
              color:        '#ffffff',
              lineHeight:    1.2,
              marginBottom: '1.25rem',
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize:   '14px',
              color:      'rgba(255,255,255,0.45)',
            }}
          >
            {date}
          </p>
        </div>
      </section>

      {/* ══ COVER IMAGE ═════════════════════════════════════════════════════ */}
      <div style={{ backgroundColor: 'var(--bg)', padding: '48px 0 0' }}>
        <div className="mx-auto px-6" style={{ maxWidth: '860px' }}>
          <div
            role="img"
            aria-label={title}
            style={{
              backgroundColor:    bg,
              backgroundImage:    `url(/images/blog/${slug}.jpg)`,
              backgroundSize:     'cover',
              backgroundPosition: 'center',
              aspectRatio:        '16 / 7',
              borderRadius:       '16px',
              boxShadow:          '0 12px 40px rgba(44, 24, 16, 0.12)',
            }}
          />
        </div>
      </div>

      {/* ══ ARTICLE BODY ════════════════════════════════════════════════════ */}
      <section
        aria-label="Sadržaj članka"
        style={{ backgroundColor: 'var(--bg)', padding: '56px 0 80px' }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '720px' }}>

          {/* Lead / excerpt */}
          <p
            style={{
              fontFamily:   'Playfair Display, serif',
              fontSize:     '20px',
              fontStyle:    'italic',
              lineHeight:    1.7,
              color:        '#935638',
              marginBottom: '2rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid rgba(147, 86, 56, 0.2)',
            }}
          >
            {excerpt}
          </p>

          {/* Coming soon placeholder */}
          <div
            style={{
              backgroundColor: '#ede3db',
              borderRadius:    '12px',
              padding:         '48px 40px',
              textAlign:       'center',
            }}
          >
            <p
              style={{
                fontFamily:   'Playfair Display, serif',
                fontSize:     '22px',
                fontWeight:    700,
                color:        '#935638',
                marginBottom: '12px',
              }}
            >
              Sadržaj članka dolazi uskoro
            </p>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize:   '14px',
                lineHeight:  1.7,
                color:      '#6b4c3b',
              }}
            >
              Ovaj članak je u pripremi. Pratite nas na Instagramu{' '}
              <a
                href="https://www.instagram.com/studio.amage"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#935638' }}
              >
                @studio.amage
              </a>{' '}
              za najnovije savjete i novosti.
            </p>
          </div>

          {/* Back to blog */}
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <Link
              href="/blog"
              style={{
                fontFamily:     'Poppins, sans-serif',
                fontSize:       '13px',
                fontWeight:      500,
                color:          '#935638',
                textDecoration: 'none',
                letterSpacing:  '0.06em',
              }}
            >
              ← Natrag na Blog
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: '#ede3db',
          padding:         '80px 0',
          textAlign:       'center',
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '560px' }}>
          <h2
            style={{
              fontFamily:   'Playfair Display, serif',
              fontSize:     'clamp(24px, 3vw, 32px)',
              fontWeight:    700,
              color:        '#935638',
              lineHeight:    1.2,
              marginBottom: '1rem',
            }}
          >
            Spreman/na za promjenu?
          </h2>
          <p
            style={{
              fontFamily:   'Poppins, sans-serif',
              fontSize:     '15px',
              lineHeight:    1.75,
              color:        '#6b4c3b',
              marginBottom: '2rem',
            }}
          >
            Rezerviraj termin i zajedno kreiramo rezultat koji traje.
          </p>
          <Link href="/#rezervacija" className="hero-cta">
            Rezerviraj termin
          </Link>
        </div>
      </section>

    </main>
  )
}
