import Image from 'next/image';
import type { Product } from '@/app/data/products';

type Props = {
  product: Product;
  position: number;
};

export function BatCardModern({ product }: Props) {
  return (
    <a
      href={`/products/${product.handle}`}
      className="group block overflow-hidden rounded-2xl border border-white/20 bg-[#0f172a]/85 backdrop-blur transition hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-cyan-500/30 via-slate-900 to-slate-950">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt ?? `${product.title} bat`}
          fill
          sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 24vw"
          className="object-contain p-5 transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-3 left-3 rounded-full border border-white/25 bg-black/40 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-cyan-200">
          {product.series.toUpperCase()}
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300/80">
            {product.subtitle}
          </p>
          <h3 className="mt-1 text-2xl font-bold leading-none text-white">
            {product.title}
          </h3>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.15em] text-slate-400">
              Starting at
            </p>
            <p className="text-xl font-bold text-cyan-300">${product.priceRange.min}</p>
          </div>
          <span className="rounded-lg border border-cyan-300/40 bg-cyan-400/10 px-2.5 py-1 text-[11px] font-semibold tracking-[0.12em] text-cyan-200">
            {product.specs.feel}
          </span>
        </div>
      </div>
    </a>
  );
}