import { Header } from '@/app/components/Header';
import { Ticker } from '@/app/components/Ticker';
import { Footer } from '@/app/components/Footer';
import { LineupVariantClient } from '@/app/components/LineupVariantClient';
import { getFeaturedProducts } from '@/app/lib/shopify';

export default async function LineupRefinedPage() {
  const products = await getFeaturedProducts();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_15%,#374151_0%,#1f2937_45%,#111827_100%)]">
      <Ticker />
      <Header />
      <LineupVariantClient products={products} variant="refined" />
      <Footer />
    </main>
  );
}
