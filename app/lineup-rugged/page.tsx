import { Header } from '@/app/components/Header';
import { Ticker } from '@/app/components/Ticker';
import { Footer } from '@/app/components/Footer';
import { LineupVariantClient } from '@/app/components/LineupVariantClient';
import { getFeaturedProducts } from '@/app/lib/shopify';

export default async function LineupRuggedPage() {
  const products = await getFeaturedProducts();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_15%_25%,#9b7f61_0%,#6b523e_42%,#2b2119_100%)]">
      <Ticker />
      <Header />
      <LineupVariantClient products={products} variant="rugged" />
      <Footer />
    </main>
  );
}
