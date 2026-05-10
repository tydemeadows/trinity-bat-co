import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { PlayerProfile } from '@/app/components/PlayerProfile';
import { TrustStrip } from '@/app/components/TrustStrip';
import { Footer } from '@/app/components/Footer';
import { LineupVariantClient } from '@/app/components/LineupVariantClient';
import { VariantTopBanner } from '@/app/components/VariantTopBanner';
import { getFeaturedProducts } from '@/app/lib/shopify';

export default async function LineupModernPage() {
  const products = await getFeaturedProducts();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,#0f766e_0%,#0b1120_45%,#020617_100%)]">
      <VariantTopBanner variant="modern" />
      <Header />
      <Hero />
      <PlayerProfile />
      <TrustStrip />
      <div id="lineup">
        <LineupVariantClient products={products} variant="modern" />
      </div>
      <Footer />
    </main>
  );
}