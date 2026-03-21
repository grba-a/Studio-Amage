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
      <h2 style={h2Style}>Zašto je njega boje važna?</h2>
      <p style={pStyle}>Balayage je jedna od najtraženijih tehnika bojanja upravo zato što izgleda prirodno i raspoređeno — ali i zato što uz pravu njegu može izgledati sjajno tjednima, pa čak i mjesecima nakon termina.</p>

      <h2 style={h2Style}>1. Šampon i regenerator za obojenu kosu</h2>
      <p style={pStyle}>Koristite isključivo šampone i regeneratore formulirane za obojenu ili kemijski tretiranu kosu. Sulfati u klasičnim šamponima izvlače boju i ubrzavaju bljeđenje. Tražite proizvode s oznakom "color safe" ili "za obojenu kosu".</p>

      <h2 style={h2Style}>2. Hladna ili mlaka voda za ispiranje</h2>
      <p style={pStyle}>Vruća voda otvara kutikulu vlasi i potiče gubitak pigmenta. Ispirajte kosu hladnom ili mlakom vodom — razlika u trajnosti boje može biti dramatična.</p>

      <h2 style={h2Style}>3. Maska jednom tjedno</h2>
      <p style={pStyle}>Balayage uključuje osvijetljavanje, što može isušiti kosu. Jednom tjedno koristite dubinsku masku ili hair mask za dubinsku hidrataciju. To će kosi vratiti elastičnost i sjaj.</p>

      <h2 style={h2Style}>4. Zaštita od sunca i topline</h2>
      <p style={pStyle}>UV zrake i toplinski stilizatori (ravnalice, uvijači) mogu izbljedjeti boju i oštetiti strukturu vlasi. Koristite sprej za zaštitu od topline prije stiliziranja i sprej za zaštitu od UV-a ljeti.</p>

      <h2 style={h2Style}>5. Intervali između termina</h2>
      <p style={pStyle}>Jedna od prednosti balayagea je taj što nema oštrih korijenova — što znači da možete duže čekati između termina. Uz dobru njegu, termin za osvježavanje možete planirati svaka 3-4 mjeseca.</p>

      <h2 style={h2Style}>Zaključak</h2>
      <p style={pStyle}>Investicija u balayage ne završava u salonu. Pravi šampon, hladna voda i tjedna maska mogu produžiti vijek vaše boje za tjedne. Ako imate pitanja o njezi vaše specifične boje, slobodno nas kontaktirajte — tu smo za sve savjete.</p>
    </>
  )
}

function NoviTretmani() {
  return (
    <>
      <h2 style={h2Style}>Studio Amage raste</h2>
      <p style={pStyle}>Nakon što smo proveli nekoliko mjeseci edukacija i istraživanja, ponosni smo predstaviti proširenu ponudu tretmana njege kose koji su dostupni od 2025. godine.</p>

      <h2 style={h2Style}>Rekonstrukcijski tretman Olaplex</h2>
      <p style={pStyle}>Olaplex protokol koji popravlja unutarnje veze vlasi oštećene kemijskim procesima. Idealno za kosu koja je prošla kroz intenzivno bojanje ili posvijetljivanje. Rezultat: mekana, elastična i otpornija kosa već nakon jednog tretmana.</p>

      <h2 style={h2Style}>Keratinski tretman</h2>
      <p style={pStyle}>Profesionalni keratinski tretman koji disciplinira kovrče, eliminira krep-efekt i dodaje intenzivan sjaj. Rezultati traju 3-4 mjeseca uz pravilnu njegu.</p>

      <h2 style={h2Style}>Tretman s hijaluronskom kiselinom</h2>
      <p style={pStyle}>Novi hidratacijski tretman koji prodire duboko u strukturu vlasi i vraća vlazi isušenoj i tankoj kosi. Vidljiva razlika već nakon prvog tretmana — kosa izgleda punija i zdravije.</p>

      <h2 style={h2Style}>Kako rezervirati?</h2>
      <p style={pStyle}>Svi novi tretmani dostupni su uz prethodnu konzultaciju. Kontaktirajte nas putem obrasca, telefona ili Instagrama i zajedno ćemo odabrati pravi tretman za vaše potrebe.</p>
    </>
  )
}

function TrenDoviSezone() {
  return (
    <>
      <h2 style={h2Style}>Prirodni tonovi dominiraju</h2>
      <p style={pStyle}>Proljeće/ljeto 2025. donosi povratak prirodnim, toplim tonovima kose. Karamela, med i zlatno smeđa su boje sezone — nijanse koje izgledaju kao da su nastale od sunca, a ne iz boce.</p>

      <h2 style={h2Style}>Lived-in boja</h2>
      <p style={pStyle}>Trend "lived-in" boje — koja izgleda kao da je kosa prirodno posvjetljela — i dalje dominira. Ova tehnika zahtijeva manje odlazaka u salon jer rast korijenova nije uočljiv, što je praktično i ekonomično.</p>

      <h2 style={h2Style}>Teksturirani valovi</h2>
      <p style={pStyle}>Effortless, rahli valovi koji izgledaju kao da su nastali sami od sebe. Ključ je u rezanju — struktura reza koja podržava val bez previše stiliziranja. Perfekcija bez pretjeranog truda.</p>

      <h2 style={h2Style}>Bob — svevremenski trend</h2>
      <p style={pStyle}>Bob frizura u svim varijantama — od klasičnog do asimetričnog — ostaje jedan od najpopularnijih rezova. Prilagodljiv svim oblicima lica i stilovima, bob je uvijek dobar izbor.</p>

      <h2 style={h2Style}>Zdrava kosa kao stilska izjava</h2>
      <p style={pStyle}>Iznad svega, trend ove sezone je zdrava, sjajna kosa. Više nije dovoljno samo izgledati dobro odmah nakon salona — klijenti traže tretmane koji dugoročno poboljšavaju strukturu i sjaj kose. To je upravo ono što nudimo u Studio Amage.</p>
    </>
  )
}

// ── Static posts registry ──────────────────────────────────────────────────────
const POSTS: Record<string, {
  title:    string
  date:     string
  category: string
  excerpt:  string
  Content:  () => React.JSX.Element
}> = {
  'njega-boje': {
    title:    'Kako održavati balayage između salona',
    date:     '15. siječnja 2025.',
    category: 'NJEGA KOSE',
    excerpt:  'Balayage je investicija — evo kako ga zaštititi i produžiti sjaj između termina.',
    Content:  NjegaBoje,
  },
  'novi-tretmani': {
    title:    'Novi tretmani u studiju — što je novo u 2025.',
    date:     '3. veljače 2025.',
    category: 'NOVOSTI',
    excerpt:  'Proširili smo ponudu tretmana njege kose. Pogledaj što je novo i zakaži konzultaciju.',
    Content:  NoviTretmani,
  },
  'trendovi-sezone': {
    title:    'Frizurni trendovi proljeće/ljeto 2025.',
    date:     '20. veljače 2025.',
    category: 'TRENDOVI',
    excerpt:  'Prirodni tonovi, teksturirani valovi i lived-in boja — ovo su trendovi koji dominiraju sezoni.',
    Content:  TrenDoviSezone,
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

  const { title, date, category, excerpt, Content } = post

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
            {category} · {date}
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
          src={`/images/blog/blog-${slug}.jpg`}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* ══ ARTICLE BODY ════════════════════════════════════════════════════ */}
      <section
        aria-label="Sadržaj članka"
        style={{ backgroundColor: 'var(--bg)', padding: '60px 24px 80px' }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
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
