import { Header } from '@/app/components/Header';
import { Ticker } from '@/app/components/Ticker';
import { Hero } from '@/app/components/Hero';
import { PlayerProfile } from '@/app/components/PlayerProfile';
import { TrustStrip } from '@/app/components/TrustStrip';
import { BatCollection } from '@/app/components/BatCollection';
import { Footer } from '@/app/components/Footer';
import { getFeaturedProducts } from '@/app/lib/shopify';

export default async function Lineup90Page() {
  const products = await getFeaturedProducts();

  return (
    <main>
      <Ticker />
      <Header />
      <Hero />
      <PlayerProfile />
      <TrustStrip />
      <div id="lineup">
        <BatCollection products={products} />
      </div>
      <Footer />
    </main>
  );
}