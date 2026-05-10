import type { Product } from '@/app/data/products';
import { cardPhotoBackgrounds } from '@/app/data/products';
import Image from 'next/image';

type Props = {
  product: Product;
  position: number;
};

export function BatCard({ product, position }: Props) {
  const photoBg = cardPhotoBackgrounds[position % cardPhotoBackgrounds.length];

  const badgeColors: Record<NonNullable<Product['badge']>, string> = {
    NEW: 'bg-sky text-cream',
    HOT: 'bg-red text-cream',
    POPULAR: 'bg-gold text-ink',
    PRO: 'bg-ink text-gold',
  };

  return (
    <a
      href={`/products/${product.handle}`}
      className="group relative block bg-cream p-2.5 transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
      style={{
        boxShadow: '8px 8px 0 #0e0e0e, 8px 8px 0 4px #d6a82e',
        border: '1px solid #0e0e0e',
      }}
    >
      <div className="relative border-[3px] border-ink bg-cream">
        {/* Inner gold pinstripe */}
        <div className="pointer-events-none absolute inset-1 z-[5] border border-gold" />

        {/* Corner flag (TRINITY '26) */}
        <div className="absolute -left-1 top-3 z-[6] rotate-[-2deg] border-2 border-ink bg-red px-2.5 py-1 pr-3.5 font-display text-[11px] tracking-[0.12em] text-cream shadow-[2px_2px_0_#0e0e0e]">
          TRINITY <span className="ml-1 text-gold">'26</span>
        </div>

        {/* Badge (HOT, NEW, POPULAR, PRO) - top right */}
        {product.badge && (
          <div
            className={`absolute right-2 top-2 z-[6] rotate-[3deg] border-[3px] border-ink ${badgeColors[product.badge]} px-2 py-1 font-display text-[10px] tracking-[0.15em] shadow-[2px_2px_0_#0e0e0e]`}
          >
            {product.badge}
          </div>
        )}

        {/* Card "photo" area */}
        <div
          className="relative m-2 flex aspect-[4/5] items-center justify-center overflow-hidden border border-gold-deep"
          style={{ background: photoBg }}
        >
          {/* Light streak overlays */}
          <div className="pointer-events-none absolute left-[28%] top-0 z-[1] h-full w-[60px] -skew-x-[15deg] bg-gradient-to-b from-white/30 to-transparent" />
          <div className="pointer-events-none absolute right-[22%] top-0 z-[1] h-full w-[44px] skew-x-[10deg] bg-gradient-to-b from-white/20 to-transparent" />

          {/* Field shadow at bottom */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[1] h-[38%] bg-gradient-to-t from-black/30 to-transparent" />

          {/* The bat itself */}
          <div className="relative z-[2] h-full w-full">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt ?? `${product.title} bat`}
              fill
              sizes="(max-width: 768px) 70vw, (max-width: 1200px) 40vw, 20vw"
              priority={position < 2}
              className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* Photo bottom band */}
          <div className="absolute bottom-0 left-0 right-0 z-[4] flex items-center justify-between border-t-2 border-ink bg-red px-3 py-1">
            <span className="font-display text-[9px] tracking-[0.18em] text-cream">
              {product.series.toUpperCase()}
            </span>
            <span className="font-display text-[9px] tracking-[0.18em] text-gold">
              ★ USA ★
            </span>
          </div>
        </div>

        {/* Swallowtail ribbon banner with bat name */}
        <div className="relative z-[7] mx-4 mt-3 text-center">
          <div className="ribbon-banner-clip relative border-2 border-ink bg-red px-4 py-2.5 pb-3 font-serif text-[20px] italic leading-none text-cream shadow-[0_3px_0_#0e0e0e] [text-shadow:1px_1px_0_#0e0e0e]">
            {product.subtitle}
          </div>
        </div>

        {/* Position label — model number */}
        <div className="mb-2.5 mt-4 text-center">
          <div className="inline-block border border-gold bg-ink px-4 py-1.5 pl-5 font-display text-[10px] tracking-[0.35em] text-cream">
            {product.title}
          </div>
        </div>

        {/* Price strip */}
        <div className="border-t-2 border-ink bg-cream px-3 py-2.5 flex items-center justify-between">
          <div>
            <div className="font-display text-[9px] tracking-[0.2em] text-ink/60">
              FROM
            </div>
            <div className="font-display text-[22px] leading-none text-ink">
              <span className="text-red text-[15px] align-top mr-px">$</span>
              {product.priceRange.min}
            </div>
          </div>
          <div className="text-right">
            <div className="font-display text-[9px] tracking-[0.2em] text-ink/60">
              FEEL
            </div>
            <div className="font-serif text-[13px] italic text-ink leading-tight">
              {product.specs.feel}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
