/**
 * Trinity Bat Co. — Product Data
 *
 * This data structure mirrors the Shopify Storefront API Product type.
 * When the customer wires up their live Shopify store, this file can be
 * replaced with a fetch from the Storefront API:
 *
 *   import { getProducts } from '@/app/lib/shopify';
 *   const products = await getProducts({ collection: 'featured-bats' });
 *
 * Field mapping to Shopify:
 *   id           -> product.id (gid://shopify/Product/...)
 *   handle       -> product.handle (URL slug)
 *   title        -> product.title
 *   subtitle     -> product.metafields.custom.subtitle
 *   priceRange   -> product.priceRange.minVariantPrice
 *   featuredImage-> product.featuredImage
 *   tags         -> product.tags
 *   specs        -> product.metafields (custom namespace)
 */

export type Product = {
  id: string;
  handle: string;
  title: string;
  subtitle: string;
  series: string;
  imageSrc: string;
  imageAlt?: string;
  priceRange: {
    min: number;
    max: number;
    currencyCode: string;
  };
  available: boolean;
  badge?: 'NEW' | 'HOT' | 'POPULAR' | 'PRO';
  signatureAthlete?: {
    initials: string;
    name: string;
    position: string;
  };
  specs: {
    handle: string;
    barrel: string;
    knob: string;
    feel: string;
  };
  woodOptions: string[];
  finishOptions: string[];
  tags: string[];
};

export const featuredBats: Product[] = [
  {
    id: 'gid://shopify/Product/1001',
    handle: 'pro-select-ps-27-1',
    title: 'PS 27:1',
    subtitle: 'Pro Select',
    series: 'Trinity Select',
    imageSrc: '/pro-select-27-1.png',
    imageAlt: 'Pro Select PS 27:1 bat',
    priceRange: { min: 169, max: 219, currencyCode: 'USD' },
    available: true,
    badge: 'POPULAR',
    signatureAthlete: {
      initials: 'AG',
      name: 'Adrian Gonzalez',
      position: 'First Base',
    },
    specs: {
      handle: 'Medium',
      barrel: 'Med / Large',
      knob: 'Flare',
      feel: 'Balanced',
    },
    woodOptions: ['Birch', 'Maple'],
    finishOptions: ['Natural', 'Black'],
    tags: ['signature', 'balanced', 'pro'],
  },
  {
    id: 'gid://shopify/Product/1002',
    handle: 'pro-select-ts-110',
    title: 'TS 110',
    subtitle: 'Power Driver',
    series: 'Trinity Select',
    imageSrc: '/pro-model-tb10.png',
    imageAlt: 'Pro model TS 110 bat',
    priceRange: { min: 169, max: 219, currencyCode: 'USD' },
    available: true,
    badge: 'HOT',
    specs: {
      handle: 'Thin',
      barrel: 'Large',
      knob: 'Standard',
      feel: 'End-Loaded',
    },
    woodOptions: ['Maple'],
    finishOptions: ['Natural', 'Black', 'Two-Tone'],
    tags: ['power', 'end-loaded'],
  },
  {
    id: 'gid://shopify/Product/1003',
    handle: 'pro-select-ck-243',
    title: 'CK 243',
    subtitle: 'Contact Hitter',
    series: 'Trinity Select',
    imageSrc: '/pro-model-tb43.png',
    imageAlt: 'Pro model CK 243 bat',
    priceRange: { min: 159, max: 209, currencyCode: 'USD' },
    available: true,
    specs: {
      handle: 'Medium',
      barrel: 'Medium',
      knob: 'Standard',
      feel: 'Balanced',
    },
    woodOptions: ['Birch', 'Maple', 'Ash'],
    finishOptions: ['Natural', 'Two-Tone'],
    tags: ['contact', 'balanced'],
  },
  {
    id: 'gid://shopify/Product/1004',
    handle: 'pro-select-rb-271',
    title: 'RB 271',
    subtitle: 'The Classic',
    series: 'Trinity Select',
    imageSrc: '/pro-model-cs271.png',
    imageAlt: 'Pro model RB 271 bat',
    priceRange: { min: 159, max: 209, currencyCode: 'USD' },
    available: true,
    badge: 'PRO',
    specs: {
      handle: 'Medium',
      barrel: 'Medium',
      knob: 'Standard',
      feel: 'Slightly End-Loaded',
    },
    woodOptions: ['Maple', 'Birch'],
    finishOptions: ['Natural', 'Black'],
    tags: ['classic', 'versatile'],
  },
  {
    id: 'gid://shopify/Product/1005',
    handle: 'pro-select-ji-13',
    title: 'JI 13',
    subtitle: 'The Cannon',
    series: 'Trinity Pro',
    imageSrc: '/pro-select-jm14.png',
    imageAlt: 'Pro select JI 13 bat',
    priceRange: { min: 189, max: 239, currencyCode: 'USD' },
    available: true,
    badge: 'NEW',
    signatureAthlete: {
      initials: 'JI',
      name: 'Jose Iglesias',
      position: 'Shortstop',
    },
    specs: {
      handle: 'Thin',
      barrel: 'Large',
      knob: 'Flare',
      feel: 'End-Loaded',
    },
    woodOptions: ['Maple'],
    finishOptions: ['Natural', 'Black'],
    tags: ['signature', 'power'],
  },
  {
    id: 'gid://shopify/Product/1006',
    handle: 'pro-select-mt-7',
    title: 'MT 7',
    subtitle: 'The Workhorse',
    series: 'Trinity Pro',
    imageSrc: '/pro-model-tgjr.png',
    imageAlt: 'Pro model MT 7 bat',
    priceRange: { min: 169, max: 219, currencyCode: 'USD' },
    available: true,
    specs: {
      handle: 'Thick',
      barrel: 'Medium',
      knob: 'Standard',
      feel: 'Balanced',
    },
    woodOptions: ['Maple', 'Birch', 'Ash'],
    finishOptions: ['Natural', 'Black', 'Two-Tone'],
    tags: ['versatile', 'balanced'],
  },
  {
    id: 'gid://shopify/Product/1007',
    handle: 'pro-select-bc-15',
    title: 'BC 15',
    subtitle: 'The Slasher',
    series: 'Trinity Pro',
    imageSrc: '/pro-model-bs165.png',
    imageAlt: 'Pro model BC 15 bat',
    priceRange: { min: 169, max: 219, currencyCode: 'USD' },
    available: true,
    specs: {
      handle: 'Medium',
      barrel: 'Med / Large',
      knob: 'Tapered',
      feel: 'Balanced',
    },
    woodOptions: ['Birch', 'Maple'],
    finishOptions: ['Natural', 'Two-Tone'],
    tags: ['contact', 'balanced'],
  },
  {
    id: 'gid://shopify/Product/1008',
    handle: 'pro-select-fa-44',
    title: 'FA 44',
    subtitle: 'Big Stick',
    series: 'Trinity Pro',
    imageSrc: '/pro-model.vg27.png',
    imageAlt: 'Pro model FA 44 bat',
    priceRange: { min: 189, max: 239, currencyCode: 'USD' },
    available: true,
    badge: 'HOT',
    specs: {
      handle: 'Thin',
      barrel: 'Extra Large',
      knob: 'Flare',
      feel: 'End-Loaded',
    },
    woodOptions: ['Maple'],
    finishOptions: ['Natural', 'Black'],
    tags: ['power', 'end-loaded'],
  },
];

// Color rotation for the bat photo backgrounds — one per card position
// Pulls from the Fleer 90 palette
export const cardPhotoBackgrounds = [
  'linear-gradient(160deg, #5fc1ea 0%, #2ba6dc 50%, #1d8bbf 100%)', // sky
  'linear-gradient(160deg, #1a3866 0%, #2ba6dc 100%)',              // navy-sky
  'linear-gradient(160deg, #d8232a 0%, #a8181d 100%)',              // red
  'linear-gradient(160deg, #d6a82e 0%, #a8801f 100%)',              // gold
  'linear-gradient(160deg, #2ba6dc 0%, #1a3866 100%)',              // sky-navy
  'linear-gradient(160deg, #d6a82e 0%, #d8232a 100%)',              // gold-red
  'linear-gradient(160deg, #5fc1ea 0%, #d8232a 100%)',              // sky-red
  'linear-gradient(160deg, #0e0e0e 0%, #1a3866 100%)',              // ink-navy
];
