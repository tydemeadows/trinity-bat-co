'use client';

import type { Product } from '@/app/data/products';
import { BatCollection } from './BatCollection';
import { BatCardModern } from './BatCardModern';
import { BatCardRugged } from './BatCardRugged';
import { BatCardRefined } from './BatCardRefined';

type Variant = 'modern' | 'rugged' | 'refined';

type Props = {
  products: Product[];
  variant: Variant;
};

const variantCards = {
  modern: BatCardModern,
  rugged: BatCardRugged,
  refined: BatCardRefined,
};

export function LineupVariantClient({ products, variant }: Props) {
  const CardComponent = variantCards[variant];
  return <BatCollection products={products} CardComponent={CardComponent} />;
}