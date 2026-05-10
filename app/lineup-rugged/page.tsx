'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bebas_Neue, Old_Standard_TT, Roboto_Mono, Oswald } from 'next/font/google';
import styles from './rugged.module.css';

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
const oswald = Oswald({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-oswald' });

const WOODS = ['Birch', 'Maple'];
const FINISHES = ['Natural', 'Black'];
const LENGTHS = ['30"', '30.5"', '31"', '31.5"', '32"', '32.5"', '33"', '33.5"', '34"'];

export default function LineupRuggedPage() {
  const [wood, setWood] = useState('Birch');
  const [finish, setFinish] = useState('Natural');
  const [length, setLength] = useState('33"');
  const [qty, setQty] = useState(1);
  const [activeThumb, setActiveThumb] = useState(0);

  const thumbs = ['Profile', 'Barrel', 'Knob', 'Stamp', 'Side'];

  return (
    <main className={`${styles.page} ${bebas.variable} ${oldStandard.variable} ${robotoMono.variable} ${oswald.variable}`}>
      <div className={styles.announce}>EST. 2010 <span>★</span> Free Shipping Over $300 <span>★</span> Hand Crafted in the USA</div>

      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoMark}>T</div>
          Trinity Bat Co.
        </div>
        <nav className={styles.nav}>
          <a href="#">Bats</a>
          <a href="#">Custom</a>
          <a href="#">Teams</a>
          <a href="#">Mission</a>
        </nav>
        <button className={styles.cartBtn}>Bag · 0</button>
      </header>

      <nav className={styles.breadcrumb}>
        <Link href="/showcase">Showcase</Link>
        <span className={styles.sep}>→</span>
        <a href="#">Pro Series</a>
        <span className={styles.sep}>→</span>
        <a href="#">Trinity Select</a>
        <span className={styles.sep}>→</span>
        <span className={styles.current}>PS 27:1</span>
      </nav>

      <section className={styles.product}>
        <div className={styles.gallery}>
          <div className={styles.galleryMain}>
            <div className={`${styles.stamp} ${styles.stampTl}`}>SERIES 01</div>
            <div className={`${styles.stamp} ${styles.stampTr}`}>PS 27:1</div>
            <div className={`${styles.stamp} ${styles.stampBl}`}>USA · MADE</div>
            <div className={styles.stampCircle}>
              <div className={styles.num}>27:1</div>
              <div className={styles.lbl}>Trinity</div>
            </div>

            <div className={styles.batDisplay}>
              <Image src="/pro-select-27-1.png" alt="Pro Select PS 27:1" fill priority className={styles.batImage} sizes="(max-width: 900px) 90vw, 50vw" />
            </div>
          </div>

          <div className={styles.galleryThumbs}>
            {thumbs.map((name, idx) => (
              <button
                key={name}
                className={`${styles.thumb} ${activeThumb === idx ? styles.active : ''}`}
                onClick={() => setActiveThumb(idx)}
                aria-label={`Show ${name} view`}
              >
                <Image src="/pro-select-27-1.png" alt={`${name} thumb`} width={70} height={70} className={styles.thumbImage} />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.buyBox}>
          <div className={styles.seriesBadge}>Trinity Select Series · No. 01</div>
          <h1 className={styles.productName}>Pro Select <span className={styles.model}>PS 27:1</span></h1>
          <div className={styles.signatureLine}>The signature bat of Trinity - designed for All-Star Adrian Gonzalez.</div>

          <div className={styles.priceRow}>
            <div className={styles.price}><span className={styles.dollar}>$</span>169</div>
            <div className={styles.shipNote}><strong>Ships 3-5 Days</strong><br />Free Over $300</div>
          </div>

          <div className={styles.specStrip}>
            <div className={styles.specCell}><div className={styles.specLabel}>Handle</div><div className={styles.specValue}>Medium</div></div>
            <div className={styles.specCell}><div className={styles.specLabel}>Barrel</div><div className={styles.specValue}>Med/Large</div></div>
            <div className={styles.specCell}><div className={styles.specLabel}>Knob</div><div className={styles.specValue}>Flare</div></div>
            <div className={styles.specCell}><div className={styles.specLabel}>Feel</div><div className={styles.specValue}>Balanced</div></div>
          </div>

          <div className={styles.variantGroup}>
            <div className={styles.variantHeader}>
              <div className={styles.variantLabel}>Wood Species</div>
              <div className={styles.variantSelected}>{wood} Selected</div>
            </div>
            <div className={styles.chips}>
              {WOODS.map((opt) => (
                <button key={opt} className={`${styles.chip} ${wood === opt ? styles.chipActive : ''}`} onClick={() => setWood(opt)}>{opt}</button>
              ))}
            </div>
          </div>

          <div className={styles.variantGroup}>
            <div className={styles.variantHeader}>
              <div className={styles.variantLabel}>Finish</div>
              <div className={styles.variantSelected}>{finish} Selected</div>
            </div>
            <div className={styles.chips}>
              {FINISHES.map((opt) => (
                <button key={opt} className={`${styles.chip} ${finish === opt ? styles.chipActive : ''}`} onClick={() => setFinish(opt)}>{opt}</button>
              ))}
            </div>
          </div>

          <div className={styles.variantGroup}>
            <div className={styles.variantHeader}>
              <div className={styles.variantLabel}>Length</div>
              <div className={styles.variantSelected}>{length} Selected</div>
            </div>
            <div className={styles.chips}>
              {LENGTHS.map((opt) => (
                <button key={opt} className={`${styles.chip} ${styles.lengthChip} ${length === opt ? styles.chipActive : ''}`} onClick={() => setLength(opt)}>{opt}</button>
              ))}
            </div>
          </div>

          <div className={styles.ctaRow}>
            <div className={styles.qty}>
              <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
              <input readOnly value={qty} aria-label="Quantity" />
              <button onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
            <button className={styles.addCart}>Add to Bag · $169</button>
          </div>

          <div className={styles.trustRow}>
            <div className={styles.trustItem}><div className={styles.trustLabel}>Pro Ink Dot</div></div>
            <div className={styles.trustItem}><div className={styles.trustLabel}>Steel Compressed</div></div>
            <div className={styles.trustItem}><div className={styles.trustLabel}>USA Made</div></div>
          </div>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.storyInner}>
          <div>
            <div className={styles.storyEyebrow}>Built on Craft · Renewed with Purpose</div>
            <h2 className={styles.storyHeadline}>The signature bat <em>of Trinity.</em></h2>
            <p className={styles.storyBody}>Crafted for both <strong>power and balance</strong>, the PS 27:1 was designed for total bat control. A medium handle flows into a medium-to-large barrel.</p>
            <p className={styles.storyBody}>Steel compressed for complete barrel hardness. Pro ink dot tested on every maple and birch billet. Made in the USA, one bat at a time.</p>
            <div className={styles.verseCard}>
              <div className={styles.verseRef}>27 : 1</div>
              <div className={styles.verseText}>"The Lord is my light and my salvation - whom shall I fear?"</div>
            </div>
          </div>

          <div className={styles.playerCard}>
            <div className={styles.playerHeader}>
              <div className={styles.playerTag}>Signature Athlete</div>
              <div className={styles.playerNum}>No. 23</div>
            </div>
            <div className={styles.playerBody}>
              <div className={styles.playerPortraitWrap}>
                <Image src="/player-adrain.jpg" alt="Adrian Gonzalez" width={84} height={84} className={styles.playerPortrait} />
              </div>
              <div className={styles.playerName}>Adrian Gonzalez</div>
              <div className={styles.playerCredit}>5x All-Star · 2x Gold Glove · 4x Silver Slugger</div>
              <p className={styles.playerQuote}>"The PS 27:1 is the perfect combination of wood density, balance, and barrel size. It gives you everything you need at the plate."</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.profileSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>Bat Profile</div>
          <h2 className={styles.sectionTitle}>The anatomy of <em>a PS 27:1</em></h2>
        </div>
        <div className={styles.profileGrid}>
          <div className={styles.diagramCard}>
            <Image src="/pro-select-27-1.png" alt="PS 27:1 bat diagram" width={860} height={280} className={styles.diagramImage} />
          </div>
          <div className={styles.profileList}>
            <div className={styles.profileItem}><div className={styles.profileNum}>01</div><div><div className={styles.profileItemTitle}>Flared Knob</div><div className={styles.profileItemBody}>Promotes a relaxed bottom-hand grip and reduces hamate stress over long swings.</div></div></div>
            <div className={styles.profileItem}><div className={styles.profileNum}>02</div><div><div className={styles.profileItemTitle}>Medium Handle</div><div className={styles.profileItemBody}>A balanced taper controllable enough for contact, substantial enough to drive the ball.</div></div></div>
            <div className={styles.profileItem}><div className={styles.profileNum}>03</div><div><div className={styles.profileItemTitle}>Medium / Large Barrel</div><div className={styles.profileItemBody}>Wide hitting surface with steel-compressed density for a hardened, durable face.</div></div></div>
            <div className={styles.profileItem}><div className={styles.profileNum}>04</div><div><div className={styles.profileItemTitle}>Balanced Feel</div><div className={styles.profileItemBody}>Weight distributed evenly through the barrel for total bat control through the zone.</div></div></div>
          </div>
        </div>
      </section>

      <section className={styles.specsSection}>
        <div className={styles.specsInner}>
          <div>
            <div className={styles.sectionEyebrowLeft}>Specifications</div>
            <h2 className={styles.sectionTitleLeft}>Built for <em>the game.</em></h2>
            <p className={styles.specsIntro}>Every Trinity Select bat is hand-turned from billet to barrel, then tested to professional standards. Below are the construction details for the PS 27:1.</p>
          </div>
          <div className={styles.specsTable}>
            {[
              ['Wood Options', 'Birch · Maple'],
              ['Finish', 'Natural · Black'],
              ['Lengths', '30" - 34" / Half-Inch Increments'],
              ['Knob', 'Flare'],
              ['Handle', 'Medium'],
              ['Barrel', 'Medium / Large'],
              ['Feel', 'Balanced'],
              ['Treatment', 'Steel Compressed Barrel'],
              ['Certification', 'Pro Ink Dot (Maple & Birch)'],
              ['Origin', 'Hand Crafted in the USA'],
            ].map(([label, value]) => (
              <div key={label} className={styles.specRow}>
                <div className={styles.specRowLabel}>{label}</div>
                <div className={styles.specRowValue}>{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.customSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionEyebrow}>Make it Yours</div>
          <h2 className={styles.sectionTitle}>Three ways to <em>swing the 27:1</em></h2>
        </div>
        <div className={styles.customGrid}>
          <div className={styles.customCard}>
            <div className={styles.customCardHeader}><div className={styles.customTier}>Tier One</div><div className={styles.customNum}>01</div></div>
            <div className={styles.customCardBody}><div className={styles.customName}>Pro Select</div><div className={styles.customPrice}>From $169</div><p className={styles.customDesc}>The standard Trinity Select build. Choose your wood, finish, and length.</p><a href="#" className={styles.customLink}>You're Viewing →</a></div>
          </div>
          <div className={`${styles.customCard} ${styles.featured}`}>
            <div className={styles.customCardHeader}><div className={styles.customTier}>Tier Two</div><div className={styles.customNum}>★ Most Popular</div></div>
            <div className={styles.customCardBody}><div className={styles.customName}>Semi-Custom</div><div className={styles.customPrice}>From $189</div><p className={styles.customDesc}>Add engraving, custom logo color, and cup options. The same bat, made for you.</p><a href="#" className={styles.customLink}>Build Semi-Custom →</a></div>
          </div>
          <div className={styles.customCard}>
            <div className={styles.customCardHeader}><div className={styles.customTier}>Tier Three</div><div className={styles.customNum}>03</div></div>
            <div className={styles.customCardBody}><div className={styles.customName}>Fully Custom</div><div className={styles.customPrice}>From $219</div><p className={styles.customDesc}>Total control with custom paint, multi-color logo, and commemorative inlay.</p><a href="#" className={styles.customLink}>Build Fully Custom →</a></div>
          </div>
        </div>
      </section>

      <section className={styles.reviewsSection}>
        <div className={styles.reviewsInner}>
          <div className={styles.sectionHeaderLeft}>
            <div className={styles.sectionEyebrowLeft}>From the Field</div>
            <h2 className={styles.sectionTitleLeft}>What players <em>are saying.</em></h2>
          </div>

          <div className={styles.reviewsSummary}>
            <div>
              <div className={styles.ratingBig}>4.9</div>
              <div className={styles.stars}>★ ★ ★ ★ ★</div>
            </div>
            <div>
              <div className={styles.ratingTitle}>Based on 247 Reviews</div>
              <div className={styles.ratingMeta}>96% would recommend this bat to a teammate</div>
            </div>
          </div>

          <div className={styles.reviewsGrid}>
            <div className={styles.review}><div className={styles.reviewStars}>★ ★ ★ ★ ★</div><p className={styles.reviewQuote}>"Switched from a 271 turn and never looked back. The flare knob makes a real difference at the plate."</p><div className={styles.reviewAuthor}>- Marcus T. / Verified</div></div>
            <div className={styles.review}><div className={styles.reviewStars}>★ ★ ★ ★ ★</div><p className={styles.reviewQuote}>"Balance is perfect. Barrel feels massive without dragging through the zone. Trinity earned a customer for life."</p><div className={styles.reviewAuthor}>- Jordan B. / Verified</div></div>
            <div className={styles.review}><div className={styles.reviewStars}>★ ★ ★ ★ ☆</div><p className={styles.reviewQuote}>"Ordered the birch with black barrel. Looks even better in person and plays like a dream."</p><div className={styles.reviewAuthor}>- Cole R. / Verified</div></div>
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
