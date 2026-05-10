import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { PlayerProfile } from '@/app/components/PlayerProfile';
import { TrustStrip } from '@/app/components/TrustStrip';
import { Footer } from '@/app/components/Footer';
import { LineupVariantClient } from '@/app/components/LineupVariantClient';
import { VariantTopBanner } from '@/app/components/VariantTopBanner';
import { getFeaturedProducts } from '@/app/lib/shopify';

export default async function LineupRefinedPage() {
  const products = await getFeaturedProducts();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_20%_15%,#374151_0%,#1f2937_45%,#111827_100%)]">
      <VariantTopBanner variant="refined" />
      <Header />
      <Hero />
      <PlayerProfile />
      <TrustStrip />
      <div id="lineup">
        <LineupVariantClient products={products} variant="refined" />
      </div>
      <Footer />
    </main>
  );
}
