# Trinity Bat Co. — Landing Page Mockup

A Next.js 14 landing page mockup for Trinity Bat Co. Built to demo three different design directions before committing to a final design and wiring up the live Shopify store.

## What's in the box

- **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS**
- **Single home landing page** with the 1990 Fleer baseball-card aesthetic
- **Eight featured bats** rendered as trading-card tiles
  - Desktop (≥1024px): 4 columns × 2 rows
  - Tablet (768–1023px): 2 columns × 4 rows
  - Mobile (<768px): horizontal swipe carousel with snap-scroll + dot indicators
- **Shopify-ready data structure** — `app/data/products.ts` mirrors the Storefront API product schema, so the customer's dev team can swap the static array for live API calls with minimal refactoring
- **Component-based** — every section is its own file, easy to swap, restyle, or duplicate for the next design variant

## Get it running

```bash
# 1. Install deps
npm install

# 2. Run dev server
npm run dev

# 3. Open the page
# http://localhost:3000
```

That's it. No env vars needed for the demo — all product data is local.

## Project structure

```
app/
  components/         # All UI pieces, one per file
    Ticker.tsx        # Top scrolling marquee
    Header.tsx        # Sticky header with mobile menu
    Hero.tsx          # Big trading-card hero
    TrustStrip.tsx    # 3-up brand-pillar callout
    BatCollection.tsx # The 4×2 grid / mobile carousel
    BatCard.tsx       # Individual bat trading-card tile
    BatSvg.tsx        # Reusable bat illustration
    Footer.tsx
  data/
    products.ts       # Static product data (mirrors Shopify schema)
  lib/
    shopify.ts        # Storefront API integration STUB
  globals.css         # Tailwind + custom utilities
  layout.tsx          # Root layout
  page.tsx            # Home landing page
tailwind.config.ts    # Design tokens (colors, shadows, fonts)
```

## Adding more landing page variants

This is set up so you can drop in additional pages without touching the home page:

```bash
# Create a new route — no other config needed
mkdir -p app/lineup-modern
touch app/lineup-modern/page.tsx
```

Each new page can pull from the same components and data. To use a different aesthetic per variant, either:
1. Duplicate `BatCard.tsx` → `BatCardModern.tsx` and import the variant in the new page
2. Or extract a `theme` prop on `BatCard` if the variants share structure

## Wiring up live Shopify

When the customer is ready to swap in their live store data:

1. Add Shopify env vars (`.env.local`):
   ```
   SHOPIFY_STORE_DOMAIN=trinitybatco.myshopify.com
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=<token from Shopify admin>
   ```

2. Open `app/lib/shopify.ts` and uncomment the live implementation block at the bottom

3. The product data type (`app/data/products.ts`) already mirrors the Shopify schema — `priceRange`, `handle`, `tags`, `metafields` are named the same on purpose

4. Custom fields the customer will need to set up as **Shopify metafields** (namespace `custom`):
   - `subtitle` — e.g. "Pro Select"
   - `series` — e.g. "Trinity Select"
   - `handle_type`, `barrel_type`, `knob_type`, `feel` — the four spec strip values
   - `signature_athlete_initials`, `signature_athlete_name`, `signature_athlete_position`
   - `badge` — `NEW`, `HOT`, `POPULAR`, or `PRO`

## Deploy to Vercel for client demo

```bash
npm install -g vercel
vercel
```

Vercel auto-detects Next.js. Free tier handles client demos fine.

## Design direction

Aesthetic: **1990 Fleer baseball card** — sky blue with red and gold accents, swallowtail ribbon name banners, white-bordered card frames with offset hard shadows, condensed display type (Anton) paired with italic serif (Yeseva One).

If the customer wants a different direction for variants 2 and 3, the foundation (data, components, responsive grid/carousel logic) is reusable. Only the styling layer needs to change.
