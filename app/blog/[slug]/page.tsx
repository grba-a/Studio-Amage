import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// ── Shared style helpers ───────────────────────────────────────────────────────
const h2Style: React.CSSProperties = {
  fontFamily:   'Playfair Display, serif',
  fontSize:     '28px',
  fontWeight:    700,
  color:        '#935638',
  lineHeight:    1.3,
  marginTop:    '40px',
  marginBottom: '16px',
}

const pStyle: React.CSSProperties = {
  fontFamily:  'Poppins, sans-serif',
  fontSize:    '16px',
  lineHeight:   1.9,
  color:       '#4a3728',
  marginBottom: '0',
}

// ── Post content per slug ──────────────────────────────────────────────────────
function NjegaBoje() {
  return (
    <>
      <h2 style={h2Style}>Pranje kose — manje je više</h2>
      <p style={pStyle}>Svako pranje ispire pigment. Ako pereš kosu svaki dan, boja će izblijediti dvostruko brže nego kod žena koje peru svaka dva do tri dana. Suhi šampon između pranja nije kompromis, to je navika koju koriste žene s najljepšom bojom.</p>
      <p style={{ ...pStyle, marginTop: '16px' }}>Uvijek perite hladnijom vodom. Topla voda otvara kutikulu i pušta pigment da izlazi. Hladna voda zatvara kutikulu, zaključava boju i daje prirodni sjaj.</p>

      <h2 style={h2Style}>Šampon i regenerator za obojenu kosu</h2>
      <p style={pStyle}>Ovo nije marketinška priča, šamponi za obojenu kosu imaju niži pH koji čuva strukturu kose i pigment. Ako koristiš isti šampon kao prije bojanja, bacaš novac od termina u vodu.</p>
      <p style={{ ...pStyle, marginTop: '16px' }}>Jednom tjedno, umjesto regeneratora stavi masku. Pet minuta razlike, a kosa ostaje mekša i boja življa tjednima dulje.</p>

      <h2 style={h2Style}>Toplina je neprijatelj broj jedan</h2>
      <p style={pStyle}>Ravnalo i uvijači na 230 stupnjeva svaki dan direktno oštećuju obojenu kosu. Ako ne možeš bez toplinskih alata, termoprotektivni sprej nije opcija, to je obaveza. Nanosi ga na svaki dio kose koji ćeš zagrijati, ne samo na vrhove.</p>

      <h2 style={h2Style}>Kada je pravo vrijeme za osvježenje boje?</h2>
      <ul style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', lineHeight: 1.9, color: '#4a3728', paddingLeft: '24px', marginBottom: '16px' }}>
        <li>Kod balayagea — svakih 10 do 14 tjedana</li>
        <li>Kod punog bojanja — svakih 6 do 8 tjedana</li>
      </ul>
      <p style={pStyle}>Ako primijetiš da boja postaje ravna i bez dubine, to je signal da je vrijeme za termin, a ne za novi šampon.</p>
      <p style={{ ...pStyle, marginTop: '16px' }}>Ako nisi sigurna što tvoja kosa treba, najlakše je da se javiš i zajedno ćemo procijeniti stanje i preporučiti pravi tretman.</p>
    </>
  )
}

function NoviTretmani() {
  return (
    <>
      <h2 style={h2Style}>Hydra Repair — za suhu i oštećenu kosu</h2>
      <p style={pStyle}>Ako ti kosa puca na vrhovima, osjeća se suho i bez života ili je prošla kroz intenzivno bojanje ili toplinsku obradu, Hydra Repair je tretman koji tebi treba. Intenzivna hidratacija prodire u strukturu vlasi i obnavlja je iznutra.</p>
      <p style={{ ...pStyle, marginTop: '16px' }}>Rezultat je odmah vidljiv: kosa je mekša, lakše se češlja i sjaji.</p>
      <p style={{ ...pStyle, marginTop: '16px' }}>Trajanje: 1 sat. Preporučuje se jednom mjesečno za kosu koja prolazi kroz redovno bojanje.</p>

      <h2 style={h2Style}>Rekonstrukcijski tretman — za kosu bez sjaja</h2>
      <p style={pStyle}>Ovaj tretman ne obnavlja strukturu nego zatvara kutikulu i reflektira svjetlo. Efekt je kosa koja izgleda kao da je upravo iz salona — glatka, sjajna i bez nabujalosti. Idealan kao nadopuna bojanju ili kao standalone tretman pred poseban događaj.</p>
      <p style={{ ...pStyle, marginTop: '16px' }}>Trajanje: 1 sat. Efekt traje četiri do šest tjedana.</p>

      <h2 style={h2Style}>Detox vlasišta — za osjetljivo vlasište</h2>
      <p style={pStyle}>Suho, osjetljivo ili masno vlasište direktno utječe na kvalitetu kose. Detox vlasišta je tretman koji regulira masnoću vlasišta, smiruje iritaciju i potiče zdraviji rast kose. Ako ti se kosa brzo masti pri korijenu, a suši na duljini onda je ovo tretman koji rješava tvoj problem.</p>
      <p style={{ ...pStyle, marginTop: '16px' }}>Trajanje: 1 sat.</p>

      <h2 style={h2Style}>Kako odabrati pravi tretman?</h2>
      <p style={pStyle}>Ako nisi sigurna koji je tretman najbolji za tebe, javi se. Zajedno ćemo procijeniti stanje i pronaći idealno rješenje za zdravlje vlasišta i kose.</p>
    </>
  )
}

function TrenDoviSezone() {
  return (
    <>
      <h2 style={h2Style}>&quot;Lived in balayage&quot; — prirodnost kao luksuz</h2>
      <p style={pStyle}>Nije slučajno što je balayage već godinama najpopularnija tehnika bojanja. Razlog je jednostavan: izgleda kao da je kosa prirodno takva. Nema oštre linije odrastanja i nema rigidnog održavanja svaka četiri tjedna.</p>
      <p style={{ ...pStyle, marginTop: '16px' }}>Ove sezone dominiraju topli tonovi poput: karamele, meda i tople smeđe. Hladni plavljeni tonovi ustupaju mjesto toplijoj paleti koja odgovara mediteranskom tenu. Rezultat je kosa koja izgleda zdravo i skupo čak i kad nije tek napravljena.</p>

      <h2 style={h2Style}>Blowout kao završni touch</h2>
      <p style={pStyle}>Sama boja nije dovoljna ako kosa nema volumen i oblik. Završni styling s četkom i fenilom koji naglašava prirodni pad kose postaje standard, a ne opcija. Klijentica izlazi iz salona s kompletnim lookom, a ne samo bojom.</p>

      <h2 style={h2Style}>Tretmani kao osnova svega</h2>
      <p style={pStyle}>Trend koji se pojavio u zadnje dvije godine je fokus na zdravlje kose kao preduvjet za lijepu boju. Kosa koja je hidratizirana i zdrava prima boju bolje, sjaji više i dulje zadržava pigment. Zato sve više klijentica kombinira bojanje s tretmanom u istom terminu.</p>

      <h2 style={h2Style}>Što odabrati za sebe?</h2>
      <p style={pStyle}>Odgovor ovisi o stanju tvoje kose, prirodnoj boji i koliko vremena želiš posvetiti održavanju. Ako nisi sigurna, konzultacija je uvijek najbolji prvi korak za tebe.</p>
    </>
  )
}

// ── Static posts registry ──────────────────────────────────────────────────────
const POSTS: Record<string, {
  title:     string
  metaTitle: string
  date:      string
  category:  string
  readTime:  string
  excerpt:   string
  ogImage:   string
  Content:   () => React.JSX.Element
}> = {
  'njega-boje': {
    title:     'Kako održavati sjaj i boju kose između dva termina?',
    metaTitle: 'Kako održavati sjaj i boju kose između dva termina?',
    date:      '03.03.2026.',
    category:  'NJEGA',
    readTime:  '5 min čitanja',
    excerpt:   'Uložila si vrijeme i novac u savršenu boju i zaslužuješ da traje što dulje. Problem je što većina žena nesvjesno radi stvari koje ubrzavaju blijeđenje i suše kosu. Evo što stvarno funkcionira.',
    ogImage:   '/images/blog/blog-njega-boje.webp',
    Content:   NjegaBoje,
  },
  'novi-tretmani': {
    title:     'Novi tretmani u Studiju Amage — što su i kome odgovaraju',
    metaTitle: 'Novi tretmani u Studiju Amage — što su i kome odgovaraju',
    date:      '28.02.2026.',
    category:  'NOVOSTI',
    readTime:  '4 min čitanja',
    excerpt:   'Proširili smo ponudu s tri tretmana koja ciljaju konkretne probleme kao što su suha kosa, nedostatak sjaja i osjetljivo vlasište. Evo kratkog pregleda što svaki tretman čini i kako znati koji je pravi za tebe.',
    ogImage:   '/images/blog/blog-novi-tretmani.webp',
    Content:   NoviTretmani,
  },
  'trendovi-sezone': {
    title:     'Frizure i tehnike bojanja koje dominiraju u 2026.',
    metaTitle: 'Frizure i tehnike bojanja koje dominiraju u 2026.',
    date:      '01.03.2026.',
    category:  'TRENDOVI',
    readTime:  '4 min čitanja',
    excerpt:   'Svaka sezona donosi nove trendove, ali neke tehnike ostaju tražene jer jednostavno funkcioniraju na svakom tipu kose. Evo što klijentice u studiju najčešće traže ove sezone i zašto.',
    ogImage:   '/images/blog/blog-trendovi-sezone.webp',
    Content:   TrenDoviSezone,
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
    title:       post.metaTitle,
    description: post.excerpt,
    alternates:  { canonical: `https://studioamage.com/blog/${slug}` },
    openGraph: {
      images: [{ url: `https://studioamage.com${post.ogImage}`, width: 1200, height: 630, alt: post.title }],
    },
  }
}

// ── Page ───────────────────────────────────────────────────────────────────────
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = POSTS[slug]

  if (!post) notFound()

  const { title, date, category, readTime, excerpt, Content } = post

  return (
    <main>

      {/* ══ ARTICLE HERO ════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          paddingTop:      'calc(80px + 3rem)',
          paddingBottom:   '2.5rem',
        }}
      >
        <div className="mx-auto px-6" style={{ maxWidth: '720px' }}>

          {/* Back link */}
          <Link
            href="/blog"
            style={{
              fontFamily:     'Poppins, sans-serif',
              fontSize:       '13px',
              fontWeight:      500,
              color:          '#935638',
              textDecoration: 'none',
              letterSpacing:  '0.04em',
              display:        'inline-block',
              marginBottom:   '2rem',
            }}
          >
            ← Natrag na blog
          </Link>

          {/* Category + date */}
          <p
            style={{
              fontFamily:    'Poppins, sans-serif',
              fontSize:      '11px',
              fontWeight:     500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color:         '#935638',
              marginBottom:  '0.75rem',
            }}
          >
            {category} · {date} · {readTime}
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily:   'Playfair Display, serif',
              fontSize:     'clamp(32px, 5vw, 48px)',
              fontWeight:    700,
              color:        '#935638',
              lineHeight:    1.2,
              marginBottom: '1.5rem',
            }}
          >
            {title}
          </h1>

          {/* Excerpt / lead */}
          <p
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize:   '18px',
              fontStyle:  'italic',
              lineHeight:  1.75,
              color:      '#6b4c3b',
            }}
          >
            {excerpt}
          </p>
        </div>
      </section>

      {/* ══ THUMBNAIL IMAGE ═════════════════════════════════════════════════ */}
      <div style={{ position: 'relative', width: '100%', maxHeight: '500px', overflow: 'hidden', aspectRatio: '16/9' }}>
        <Image
          src={`/images/blog/blog-${slug}.webp`}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* ══ ARTICLE BODY ════════════════════════════════════════════════════ */}
      <section
        aria-label="Sadržaj članka"
        style={{ backgroundColor: 'var(--bg)', padding: '60px 0 80px' }}
      >
        <div style={{ maxWidth: '740px', margin: '0 auto', padding: '0 24px' }}>
          <Content />
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
