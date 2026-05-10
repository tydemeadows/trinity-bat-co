'use client';

import { useRef, useState, useEffect } from 'react';
import type { ComponentType } from 'react';
import type { Product } from '@/app/data/products';
import { BatCard } from './BatCard';

export type BatCardComponentProps = {
  product: Product;
  position: number;
};

type Props = {
  products: Product[];
  CardComponent?: ComponentType<BatCardComponentProps>;
};

export function BatCollection({ products, CardComponent }: Props) {
  const Card = CardComponent ?? BatCard;
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Update the dot indicator based on scroll position (mobile carousel)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const cardWidth = el.scrollWidth / products.length;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveIdx(Math.min(idx, products.length - 1));
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [products.length]);

  const scrollToCard = (idx: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / products.length;
    el.scrollTo({ left: cardWidth * idx, behavior: 'smooth' });
  };

  return (
    <section className="relative px-4 py-16 md:px-6 md:py-20 lg:py-24">
      {/* Section header */}
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <div className="mb-4 inline-flex items-center gap-2 border-[3px] border-ink bg-gold px-3.5 py-1.5 font-display text-[12px] tracking-[0.18em] text-ink shadow-hard">
            <span className="text-red">★</span>
            THE LINEUP
            <span className="text-red">★</span>
          </div>
          <h2 className="font-display text-[42px] leading-[0.95] tracking-[0.01em] text-cream md:text-[56px] lg:text-[64px] [text-shadow:3px_3px_0_#0e0e0e]">
            Eight bats.{' '}
            <em className="font-serif italic not-italic text-gold" style={{ fontStyle: 'italic' }}>
              One signature.
            </em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl font-body text-[15px] font-medium leading-relaxed text-cream/85 md:text-[16px]">
            Every Trinity bat is hand-turned, steel-compressed, and pro ink dot
            certified. Pick your weapon.
          </p>
        </div>

        {/* DESKTOP / TABLET GRID
            - lg (≥1024px): 4 columns × 2 rows
            - md (≥768px):  2 columns × 4 rows
            - hidden on mobile (carousel takes over) */}
        <div className="hidden grid-cols-2 gap-5 md:grid lg:grid-cols-4 lg:gap-6">
          {products.map((product, idx) => (
            <Card key={product.id} product={product} position={idx} />
          ))}
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="md:hidden">
          <div
            ref={scrollerRef}
            className="snap-x-mandatory scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4"
          >
            {products.map((product, idx) => (
              <div
                key={product.id}
                className="snap-center-card w-[78%] flex-shrink-0 first:ml-2 last:mr-2"
              >
                <Card product={product} position={idx} />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {products.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to bat ${idx + 1}`}
                onClick={() => scrollToCard(idx)}
                className={`h-2.5 transition-all ${
                  idx === activeIdx
                    ? 'w-7 bg-gold'
                    : 'w-2.5 bg-cream/40 hover:bg-cream/60'
                } border border-ink`}
              />
            ))}
          </div>

          {/* Swipe hint */}
          <p className="mt-3 text-center font-display text-[11px] tracking-[0.2em] text-cream/70">
            ← SWIPE TO BROWSE →
          </p>
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center md:mt-16">
          <a
            href="/bats"
            className="inline-block border-[4px] border-ink bg-red px-7 py-4 font-display text-[16px] tracking-[0.1em] text-cream transition-transform hover:-translate-x-px hover:-translate-y-px md:text-[18px]"
            style={{ boxShadow: '5px 5px 0 #d6a82e, 5px 5px 0 4px #0e0e0e' }}
          >
            ★ VIEW ALL BATS ★
          </a>
        </div>
      </div>
    </section>
  );
}
