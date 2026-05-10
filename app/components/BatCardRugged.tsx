import Image from 'next/image';
import type { Product } from '@/app/data/products';

type Props = {
  product: Product;
  position: number;
};

export function BatCardRugged({ product, position }: Props) {
  return (
    <a
      href={`/products/${product.handle}`}
      className="group block border-2 border-[#3a2a1e] bg-[#e9dcc8] p-2 shadow-[6px_6px_0_#3a2a1e] transition-transform hover:-translate-y-0.5"
    >
      <div className="border border-[#7d5f3f] bg-[#f6ecdd]">
        <div className="relative m-2 aspect-[4/5] overflow-hidden border border-[#7d5f3f] bg-[linear-gradient(155deg,#8f6a47_0%,#5f4632_45%,#3b2b1f_100%)]">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt ?? `${product.title} bat`}
            fill
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 22vw"
            priority={position < 1}
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute bottom-0 left-0 right-0 border-t border-[#7d5f3f] bg-[#3a2a1e]/85 px-2 py-1 text-[10px] font-semibold tracking-[0.14em] text-[#f2dfc3]">
            HERITAGE WORKSHOP
          </div>
        </div>

        <div className="px-3 pb-3 pt-1">
          <p className="text-[11px] uppercase tracking-[0.14em] text-[#5c4733]">{product.subtitle}</p>
          <h3 className="font-display text-[24px] leading-none text-[#2e2118]">{product.title}</h3>
          <div className="mt-2 flex items-center justify-between text-[#2e2118]">
            <span className="text-[12px] uppercase tracking-[0.1em]">{product.specs.feel}</span>
            <span className="font-display text-[20px]">${product.priceRange.min}</span>
          </div>
        </div>
      </div>
    </a>
  );
}