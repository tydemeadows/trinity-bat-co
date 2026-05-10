import { Header } from '@/app/components/Header';
import { Ticker } from '@/app/components/Ticker';
import { Footer } from '@/app/components/Footer';
import { LineupVariantClient } from '@/app/components/LineupVariantClient';
import { getFeaturedProducts } from '@/app/lib/shopify';

export default async function LineupModernPage() {
  const products = await getFeaturedProducts();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#0f766e_0%,#0b1120_45%,#020617_100%)]">
      <Ticker />
      <Header />
      <LineupVariantClient products={products} variant="modern" />
      <Footer />
    </main>
  );
}