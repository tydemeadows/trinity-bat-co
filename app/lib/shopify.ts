/**
 * Trinity Bat Co. — Shopify Storefront API Integration
 *
 * This file is a STUB showing where Shopify Storefront API calls would slot in
 * when the customer is ready to wire up live product data.
 *
 * Current state: returns the static featuredBats array from data/products.ts.
 * Future state: replace with live fetch() calls to the Storefront API.
 *
 * Required env vars (when going live):
 *   SHOPIFY_STORE_DOMAIN          (e.g. trinitybatco.myshopify.com)
 *   SHOPIFY_STOREFRONT_ACCESS_TOKEN
 *
 * Docs: https://shopify.dev/docs/api/storefront
 */

import { featuredBats, type Product } from '@/app/data/products';

// =============================================================================
// CURRENT IMPLEMENTATION (static data for the demo)
// =============================================================================

export async function getFeaturedProducts(): Promise<Product[]> {
  // TODO: replace with live Storefront API call when going live.
  // See LIVE IMPLEMENTATION below for the shape.
  return featuredBats;
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  return featuredBats.find((p) => p.handle === handle) ?? null;
}

// =============================================================================
// LIVE IMPLEMENTATION (commented out — turn on when ready)
// =============================================================================

/*
const SHOPIFY_ENDPOINT = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2024-07/graphql.json`;

async function shopifyFetch<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
  const res = await fetch(SHOPIFY_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 }, // cache for 60s
  });
  const json = await res.json();
  if (json.errors) throw new Error(JSON.stringify(json.errors));
  return json.data;
}

const FEATURED_PRODUCTS_QUERY = `
  query FeaturedProducts($first: Int!) {
    products(first: $first, query: "tag:featured") {
      edges {
        node {
          id
          handle
          title
          description
          priceRange {
            minVariantPrice { amount currencyCode }
            maxVariantPrice { amount currencyCode }
          }
          featuredImage { url altText width height }
          tags
          metafields(identifiers: [
            { namespace: "custom", key: "subtitle" },
            { namespace: "custom", key: "series" },
            { namespace: "custom", key: "handle_type" },
            { namespace: "custom", key: "barrel_type" },
            { namespace: "custom", key: "knob_type" },
            { namespace: "custom", key: "feel" },
          ]) {
            key
            value
          }
        }
      }
    }
  }
`;

export async function getFeaturedProductsLive(): Promise<Product[]> {
  const data = await shopifyFetch<{ products: { edges: Array<{ node: any }> } }>(
    FEATURED_PRODUCTS_QUERY,
    { first: 8 }
  );
  return data.products.edges.map(({ node }) => mapShopifyToProduct(node));
}

function mapShopifyToProduct(node: any): Product {
  // Map Shopify response to our Product type
  // ...
}
*/
