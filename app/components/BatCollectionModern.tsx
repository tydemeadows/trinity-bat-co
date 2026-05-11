import type { Product } from '@/app/data/products';
import { BatCardModern } from './BatCardModern';

type Props = {
  products: Product[];
};

export function BatCollectionModern({ products }: Props) {
  return (
    <section className="px-4 pb-16 pt-10 md:px-6 md:pb-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center md:mb-12">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-200/90">
            Landing Variant
          </p>
          <h2 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Trinity Lineup Modern
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Same bats, new presentation. This route reuses shared product data
            with an alternate card design.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <BatCardModern key={product.id} product={product} position={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}