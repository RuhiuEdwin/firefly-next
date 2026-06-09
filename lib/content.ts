// ─── Content fetching layer ───────────────────────────────────────────────────
//
// This is the single seam between the app and the CMS.
// Every section uses a typed async function from this file.
//
// To switch to a CMS (Contentful, Sanity, Hygraph, etc.):
//   1. Replace the mock import with your CMS SDK client
//   2. Re-implement each function body — return the same TypeScript shape
//   3. No component code changes required
//
// ─────────────────────────────────────────────────────────────────────────────

import { mockContent } from "@/data/mock";
import type {
  NavContent,
  HeroContent,
  HeritageContent,
  BrandStoryContent,
  ProductCarouselContent,
  ShopProduct,
  FlavorProfileContent,
  WhyChooseContent,
  TestimonialsContent,
  ContactContent,
  NewsletterContent,
  FooterContent,
} from "@/lib/types";

export async function getNavContent(): Promise<NavContent> {
  return mockContent.nav;
}

export async function getHeroContent(): Promise<HeroContent> {
  return mockContent.hero;
}

export async function getHeritageContent(): Promise<HeritageContent> {
  return mockContent.heritage;
}

export async function getBrandStoryContent(): Promise<BrandStoryContent> {
  return mockContent.brandStory;
}

export async function getProductCarouselContent(): Promise<ProductCarouselContent> {
  return mockContent.productCarousel;
}

export async function getProductBySlug(slug: string): Promise<ShopProduct | null> {
  return mockContent.productCarousel.products.find(p => p.slug === slug) ?? null;
}

export async function getFlavorProfileContent(): Promise<FlavorProfileContent> {
  return mockContent.flavorProfile;
}

export async function getWhyChooseContent(): Promise<WhyChooseContent> {
  return mockContent.whyChoose;
}

export async function getTestimonialsContent(): Promise<TestimonialsContent> {
  return mockContent.testimonials;
}

export async function getContactContent(): Promise<ContactContent> {
  return mockContent.contact;
}

export async function getNewsletterContent(): Promise<NewsletterContent> {
  return mockContent.newsletter;
}

export async function getFooterContent(): Promise<FooterContent> {
  return mockContent.footer;
}
