import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/app/components/Header';
import { Ticker } from '@/app/components/Ticker';
import { Footer } from '@/app/components/Footer';

type VariantLink = {
  name: string;
  route: '/' | '/lineup-modern' | '/lineup-rugged' | '/lineup-refined';
  blurb: string;
  imageSrc: string;
  imageAlt: string;
};

const variants: VariantLink[] = [
  {
    name: '90s Fleer Classic',
    route: '/',
    blurb: 'Original home route with bold retro card styling.',
    imageSrc: '/pro-select-27-1.png',
    imageAlt: '90s Fleer variant preview',
  },
  {
    name: 'Modern DTC',
    route: '/lineup-modern',
    blurb: 'Sleek gradients, glassy surfaces, and direct-response layout.',
    imageSrc: '/pro-model-tb10.png',
    imageAlt: 'Modern variant preview',
  },
  {
    name: 'Rugged Workshop',
    route: '/lineup-rugged',
    blurb: 'Heritage textures with a craft-shop tone and utility feel.',
    imageSrc: '/pro-model-bs165.png',
    imageAlt: 'Rugged variant preview',
  },
  {
    name: 'Refined Editorial',
    route: '/lineup-refined',
    blurb: 'Polished typography-forward presentation with premium spacing.',
    imageSrc: '/pro-model-cs271.png',
    imageAlt: 'Refined variant preview',
  },
];

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_20%,#12315f_0%,#0d1d38_42%,#090f1d_100%)]">
      <Ticker />
      <Header />

      <section className="px-4 py-14 md:px-6 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center md:mb-14">
            <p className="mb-3 font-display text-[12px] tracking-[0.18em] text-gold">
              DESIGN PICKER
            </p>
            <h1 className="font-display text-[42px] leading-[0.95] text-cream md:text-[64px] [text-shadow:3px_3px_0_#0e0e0e]">
              Choose Your Landing Variant
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-cream/80">
              Share one URL, then click into each design during the demo.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {variants.map((variant) => (
              <Link
                key={variant.route}
                href={variant.route}
                className="group block overflow-hidden border border-white/20 bg-[#10233f]/85 transition-transform hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] border-b border-white/20 bg-[linear-gradient(165deg,#1f4f8b_0%,#122b4f_100%)]">
                  <Image
                    src={variant.imageSrc}
                    alt={variant.imageAlt}
                    fill
                    sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 24vw"
                    className="object-contain p-5 transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-2 p-4">
                  <h2 className="font-display text-[24px] leading-none text-cream">
                    {variant.name}
                  </h2>
                  <p className="min-h-[3.2rem] text-[14px] leading-snug text-cream/75">
                    {variant.blurb}
                  </p>
                  <p className="font-display text-[11px] tracking-[0.16em] text-gold">
                    OPEN {variant.route.toUpperCase()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
