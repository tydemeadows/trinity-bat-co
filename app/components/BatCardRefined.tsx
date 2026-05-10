import Image from 'next/image';
import type { Product } from '@/app/data/products';

type Props = {
  product: Product;
  position: number;
};

export function BatCardRefined({ product, position }: Props) {
  return (
    <a
      href={`/products/${product.handle}`}
      className="group block rounded-xl border border-[#1a1a1a]/10 bg-white p-3 shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
    >
      <div className="relative aspect-[5/4] overflow-hidden rounded-lg border border-[#1a1a1a]/10 bg-[linear-gradient(160deg,#f5f6f8_0%,#eceff3_50%,#e8edf4_100%)]">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt ?? `${product.title} bat`}
          fill
          sizes="(max-width: 768px) 88vw, (max-width: 1200px) 42vw, 24vw"
          priority={position < 1}
          className="object-contain p-5 transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="pt-4">
        <p className="text-[11px] uppercase tracking-[0.16em] text-[#6e6f73]">{product.series}</p>
        <h3 className="mt-1 font-serif text-[28px] leading-none text-[#161719]">{product.title}</h3>
        <p className="mt-2 text-[14px] text-[#46484d]">{product.subtitle}</p>
        <div className="mt-4 flex items-center justify-between border-t border-[#1a1a1a]/10 pt-3">
          <span className="text-[12px] uppercase tracking-[0.12em] text-[#6e6f73]">{product.specs.feel}</span>
          <span className="font-display text-[20px] text-[#161719]">${product.priceRange.min}</span>
        </div>
      </div>
    </a>
  );
}