import Image from 'next/image';
import Link from 'next/link';
import { Bebas_Neue, Old_Standard_TT, Roboto_Mono, Oswald } from 'next/font/google';
import { getFeaturedProducts } from '@/app/lib/shopify';
import styles from './rugged-home.module.css';

const bebas = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--font-bebas' });
const oldStandard = Old_Standard_TT({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-old-standard',
});
const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-roboto-mono',
});
const oswald = Oswald({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-oswald',
});

export default async function RuggedLandingPage() {
  const products = await getFeaturedProducts();

  return (
    <main className={`${styles.page} ${bebas.variable} ${oldStandard.variable} ${robotoMono.variable} ${oswald.variable}`}>
      <div className={styles.announce}>EST. 2010 <span>★</span> Heritage Craft <span>★</span> Hand Crafted in the USA</div>

      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoMark}>T</div>
          Trinity Bat Co.
        </Link>
        <nav className={styles.nav}>
          <a href="#lineup">Lineup</a>
          <a href="#craft">Craft</a>
          <Link href="/lineup-rugged">PS 27:1 Product</Link>
          <Link href="/showcase">Showcase</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div>
            <p className={styles.kicker}>Rugged Home Landing</p>
            <h1 className={styles.heroTitle}>Workshop-built bats for hitters who earn every swing.</h1>
            <p className={styles.heroBody}>
              The Trinity Select and Pro lines are shaped with heritage profiles,
              steel-compressed barrels, and game-day balance. Same precision, harder edge.
            </p>
            <div className={styles.heroCtaRow}>
              <a href="#lineup" className={styles.ctaPrimary}>Browse The Lineup</a>
              <Link href="/lineup-rugged" className={styles.ctaGhost}>View PS 27:1 Product Page</Link>
            </div>
          </div>

          <Link href="/lineup-rugged" className={styles.featureCard}>
            <div className={styles.featureTop}>Featured Build</div>
            <div className={styles.featureImageWrap}>
              <Image
                src="/pro-select-27-1.png"
                alt="Pro Select PS 27:1"
                fill
                priority
                sizes="(max-width: 900px) 90vw, 40vw"
                className={styles.featureImage}
              />
            </div>
            <div className={styles.featureBody}>
              <h2>PS 27:1</h2>
              <p>Balanced profile with medium handle, flared knob, and medium-large barrel authority.</p>
            </div>
          </Link>
        </div>
      </section>

      <section id="lineup" className={styles.lineupSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>The Lineup</p>
          <h2 className={styles.sectionTitle}>Eight models. One workshop standard.</h2>
        </div>

        <div className={styles.grid}>
          {products.map((product) => (
            <a key={product.id} href={`/products/${product.handle}`} className={styles.card}>
              <div className={styles.cardImageWrap}>
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt ?? `${product.title} bat`}
                  fill
                  sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 24vw"
                  className={styles.cardImage}
                />
                <div className={styles.seriesTag}>{product.series}</div>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.subtitle}>{product.subtitle}</p>
                <h3>{product.title}</h3>
                <div className={styles.metaRow}>
                  <span>{product.specs.feel}</span>
                  <strong>${product.priceRange.min}</strong>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="craft" className={styles.story}>
        <div className={styles.storyInner}>
          <div>
            <p className={styles.sectionEyebrow}>Craft Story</p>
            <h2 className={styles.sectionTitle}>Built in grain, finished in fire.</h2>
            <p className={styles.storyText}>
              Each bat starts as billet and ends as an individual instrument.
              We tune taper, profile, and compression to keep the barrel live and the swing confident.
            </p>
            <p className={styles.storyText}>
              This rugged landing keeps the same product data and structure,
              but shifts the voice to a workshop heritage tone.
            </p>
          </div>
          <div className={styles.quoteCard}>
            <div className={styles.quoteRef}>PSALM 27:1</div>
            <p>"The Lord is my light and my salvation; whom shall I fear?"</p>
            <Link href="/lineup-rugged" className={styles.quoteCta}>Open Full PS 27:1 Product Experience →</Link>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerLogo}>TRINITY BAT CO.</div>
        <div className={styles.footerTag}>The Craft Continues <span>★</span> The Standard Rises</div>
      </footer>
    </main>
  );
}
