// ─── Content fetching layer ───────────────────────────────────────────────────
//
// Single seam between the app and Sanity CMS.
// Every section uses a typed async function; components never call Sanity directly.
// Fallback to mockContent when the CMS document doesn't exist yet so local
// development works before content is entered in Studio.
//
// ─────────────────────────────────────────────────────────────────────────────

import { sanityClient, urlFor } from "@/lib/sanity";
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
  CMSImage,
} from "@/lib/types";

// ── Image projection helper ───────────────────────────────────────────────────
// Converts a Sanity image asset reference into the CMSImage shape the app uses.

const IMG = `{
  "src": asset->url,
  "alt": coalesce(alt, ""),
  "width": asset->metadata.dimensions.width,
  "height": asset->metadata.dimensions.height
}`;

// Helper: turn a Sanity raw image object into CMSImage using the URL builder.
// Used as a fallback when the GROQ projection isn't available.
function toImg(raw: { asset?: { _ref?: string }; alt?: string } | null | undefined, fallback: CMSImage): CMSImage {
  if (!raw?.asset) return fallback;
  try {
    return {
      src: urlFor(raw).url(),
      alt: raw.alt ?? "",
      width: undefined,
      height: undefined,
    };
  } catch {
    return fallback;
  }
}

// ── Navigation ────────────────────────────────────────────────────────────────

export async function getNavContent(): Promise<NavContent> {
  const data = await sanityClient.fetch(
    `*[_type == "siteSettings" && _id == "siteSettings"][0].nav {
      logoText,
      "logo": logo ${IMG},
      links[] { label, href },
      cta { label, href, variant, icon }
    }`,
    {},
    { next: { revalidate: 300 } }
  );
  return data ?? mockContent.nav;
}

// ── Hero ──────────────────────────────────────────────────────────────────────

export async function getHeroContent(): Promise<HeroContent> {
  const data = await sanityClient.fetch(
    `*[_type == "heroSection" && _id == "heroSection"][0] {
      headline,
      headlineWords[] { text, bold, italic, lineBreakBefore, logo, color },
      body,
      ctas[] { label, href, variant, icon },
      "backgroundImage": backgroundImage ${IMG},
      featuredStats[] {
        "image": image ${IMG},
        label,
        value
      }
    }`,
    {},
    { next: { revalidate: 300 } }
  );
  return data ?? mockContent.hero;
}

// ── Heritage ──────────────────────────────────────────────────────────────────

export async function getHeritageContent(): Promise<HeritageContent> {
  const data = await sanityClient.fetch(
    `*[_type == "heritageSection" && _id == "heritageSection"][0] {
      sectionLabel,
      headline,
      headlineWords[] { text, bold, italic, lineBreakBefore, logo, color },
      body,
      bodyAccentWords,
      cards[] {
        number,
        title,
        subtitle,
        description,
        href,
        "image": image ${IMG}
      }
    }`,
    {},
    { next: { revalidate: 300 } }
  );
  return data ?? mockContent.heritage;
}

// ── Brand Story ───────────────────────────────────────────────────────────────

export async function getBrandStoryContent(): Promise<BrandStoryContent> {
  const data = await sanityClient.fetch(
    `*[_type == "brandStorySection" && _id == "brandStorySection"][0] {
      headline,
      headlineWords[] { text, bold, italic, lineBreakBefore, logo, color },
      body,
      body2,
      cta { label, href, variant, icon },
      "productImage": productImage ${IMG}
    }`,
    {},
    { next: { revalidate: 300 } }
  );
  return data ?? mockContent.brandStory;
}

// ── Products ──────────────────────────────────────────────────────────────────

export async function getProductCarouselContent(): Promise<ProductCarouselContent> {
  const products = await sanityClient.fetch<ShopProduct[]>(
    `*[_type == "product"] | order(order asc, _createdAt asc) {
      "id": _id,
      "slug": slug.current,
      name,
      category,
      badgeLabel,
      varietal,
      scaScore,
      process,
      flavorNotes,
      weight,
      priceFrom,
      currency,
      "image": image ${IMG},
      "backImage": backImage ${IMG},
      profile,
      altitude,
      roastProfile,
      farm,
      description
    }`,
    {},
    { next: { revalidate: 60 } }
  );

  if (!products?.length) {
    return mockContent.productCarousel;
  }
  return { heading: "Our Coffee", products };
}

export async function getProductBySlug(slug: string): Promise<ShopProduct | null> {
  const product = await sanityClient.fetch<ShopProduct | null>(
    `*[_type == "product" && slug.current == $slug][0] {
      "id": _id,
      "slug": slug.current,
      name,
      category,
      badgeLabel,
      varietal,
      scaScore,
      process,
      flavorNotes,
      weight,
      priceFrom,
      currency,
      "image": image ${IMG},
      "backImage": backImage ${IMG},
      profile,
      altitude,
      roastProfile,
      farm,
      description
    }`,
    { slug },
    { next: { revalidate: 60 } }
  );

  if (!product) {
    return mockContent.productCarousel.products.find(p => p.slug === slug) ?? null;
  }
  return product;
}

// ── Flavor Profile ────────────────────────────────────────────────────────────

export async function getFlavorProfileContent(): Promise<FlavorProfileContent> {
  const data = await sanityClient.fetch(
    `*[_type == "flavorProfileSection" && _id == "flavorProfileSection"][0] {
      sectionLabel,
      headlineWords[] { text, bold, italic, lineBreakBefore, logo, color },
      ctas[] { label, href, variant, icon },
      products[] {
        number,
        name,
        description,
        "image": image ${IMG},
        notes[] { label, percentage },
        stats[] { label, value, position, card }
      }
    }`,
    {},
    { next: { revalidate: 300 } }
  );
  return data ?? mockContent.flavorProfile;
}

// ── Why Choose ────────────────────────────────────────────────────────────────

export async function getWhyChooseContent(): Promise<WhyChooseContent> {
  const data = await sanityClient.fetch(
    `*[_type == "whyChooseSection" && _id == "whyChooseSection"][0] {
      sectionLabel,
      headlineWords[] { text, bold, italic, lineBreakBefore, logo, color },
      "mascotImage": mascotImage ${IMG},
      features[] {
        title,
        description,
        "iconImage": iconImage ${IMG}
      }
    }`,
    {},
    { next: { revalidate: 300 } }
  );
  return data ?? mockContent.whyChoose;
}

// ── Testimonials ──────────────────────────────────────────────────────────────

export async function getTestimonialsContent(): Promise<TestimonialsContent> {
  const data = await sanityClient.fetch(
    `*[_type == "testimonialsSection" && _id == "testimonialsSection"][0] {
      sectionLabel,
      headline,
      headlineWords[] { text, bold, italic, lineBreakBefore, logo, color },
      "backgroundImage": backgroundImage ${IMG},
      "beansImage": beansImage ${IMG},
      items[] {
        "id": _key,
        quote,
        author,
        location,
        date,
        rating
      }
    }`,
    {},
    { next: { revalidate: 300 } }
  );
  return data ?? mockContent.testimonials;
}

// ── Contact ───────────────────────────────────────────────────────────────────

export async function getContactContent(): Promise<ContactContent> {
  const data = await sanityClient.fetch(
    `*[_type == "contactSection" && _id == "contactSection"][0] {
      sectionLabel,
      headline,
      body,
      submitLabel,
      learnMoreLabel,
      formFields[] { name, label, type, placeholder, required, half }
    }`,
    {},
    { next: { revalidate: 300 } }
  );
  return data ?? mockContent.contact;
}

// ── Newsletter ────────────────────────────────────────────────────────────────

export async function getNewsletterContent(): Promise<NewsletterContent> {
  const data = await sanityClient.fetch(
    `*[_type == "siteSettings" && _id == "siteSettings"][0].newsletter {
      headline,
      body,
      formLabel,
      placeholder,
      submitLabel,
      "backgroundImage": backgroundImage ${IMG}
    }`,
    {},
    { next: { revalidate: 300 } }
  );
  return data ?? mockContent.newsletter;
}

// ── Footer ────────────────────────────────────────────────────────────────────

export async function getFooterContent(): Promise<FooterContent> {
  const data = await sanityClient.fetch(
    `*[_type == "siteSettings" && _id == "siteSettings"][0].footer {
      "logo": logo ${IMG},
      tagline,
      cta { label, href, variant, icon },
      linkGroups[] {
        heading,
        links[] { label, href }
      },
      socials[] { platform, href, icon },
      contactInfo { email, phone, location },
      copyright
    }`,
    {},
    { next: { revalidate: 300 } }
  );
  return data ?? mockContent.footer;
}
