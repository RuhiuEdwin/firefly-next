// ─── Shared primitives ──────────────────────────────────────────────────────

export interface CMSImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "outline" | "ghost";
  icon?: "cart" | "tour" | "arrow-right";
}

// Structured headline word — lets CMS drive bold/italic emphasis per word
export interface HeadlineWord {
  text: string;
  bold?: boolean;
  italic?: boolean;
  lineBreakBefore?: boolean;
  logo?: boolean;    // render with var(--font-logo) in amber
  color?: "amber" | "gold";  // override text color
}

export interface HeroStat {
  image: CMSImage;
  label: string;
  value: string;
}

// ─── Navigation ─────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface NavContent {
  logoText: string;   // script text logo e.g. "FireFly Coffee"
  logo?: CMSImage;    // optional image logo override
  links: NavLink[];
  cta: CTAButton;
}

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroContent {
  headline: string;              // plain text for SEO / fallback
  headlineWords: HeadlineWord[]; // structured words for mixed bold/italic rendering
  body: string;
  ctas: CTAButton[];
  backgroundImage?: CMSImage;
  featuredStats?: HeroStat[];    // carousel items (3 = 3 dots)
}

// ─── Heritage ────────────────────────────────────────────────────────────────

export interface HeritageCard {
  number: number;
  title: string;
  subtitle: string;       // gold uppercase tag e.g. "ROOTED SINCE 1926"
  description: string;
  image: CMSImage;
  href: string;           // links to /about#section
}

export interface HeritageContent {
  sectionLabel: string;
  headline: string;                 // plain text fallback
  headlineWords: HeadlineWord[];    // mixed-weight rich rendering
  body?: string;                    // right-side copy block
  bodyAccentWords?: string[];       // words rendered in gold within body
  cards: HeritageCard[];
}

// ─── Brand Story ─────────────────────────────────────────────────────────────

export interface BrandStoryContent {
  headline: string;
  headlineWords: HeadlineWord[];
  body: string;
  body2?: string;
  cta: CTAButton;
  productImage: CMSImage;
}

// ─── CTA Banner ──────────────────────────────────────────────────────────────

export interface CtaBannerContent {
  headline: string;
  body: string;
  cta: CTAButton;
  backgroundImage: CMSImage;  // layer 1 — full-bleed texture
  beansImage: CMSImage;       // layer 2 — scattered beans, right side
  cupImage: CMSImage;         // layer 3 — hero cup, center-right
}

// ─── Flavor Profile ──────────────────────────────────────────────────────────

export interface FlavorNote {
  label: string;
  percentage: number;         // 0–100
}

export interface FlavorProfileStat {
  label: string;              // e.g. "Customers"
  value: string;              // e.g. "85%"
  position: "top-right" | "mid-left" | "bottom-right";
  card?: boolean;             // true = dark frosted card, false = plain text
}

export interface FlavorProfileProduct {
  number: string;             // e.g. "02"
  name: string;               // e.g. "Whole Bean · Light"
  description: string;
  notes: FlavorNote[];
  image: CMSImage;
  stats: FlavorProfileStat[];
}

export interface FlavorProfileContent {
  sectionLabel: string;
  headlineWords: HeadlineWord[];
  products: FlavorProfileProduct[];
  ctas: CTAButton[];
}

// ─── Why Choose ──────────────────────────────────────────────────────────────

export interface FeatureItem {
  iconImage: CMSImage;
  title: string;
  description: string;
}

export interface WhyChooseContent {
  sectionLabel: string;
  headlineWords: HeadlineWord[];
  mascotImage: CMSImage;
  features: FeatureItem[];
}

// ─── Testimonials ────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string;
  date?: string;
  rating: number;             // 1–5
  avatar?: CMSImage;
}

export interface TestimonialsContent {
  sectionLabel: string;
  headline: string;
  headlineWords?: HeadlineWord[];
  backgroundImage?: CMSImage;
  beansImage?: CMSImage;
  items: Testimonial[];
}

// ─── Contact ─────────────────────────────────────────────────────────────────

export interface ContactContent {
  sectionLabel: string;
  headline: string;
  body: string;
  formFields: FormField[];
  submitLabel: string;
  learnMoreLabel?: string;
}

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  placeholder?: string;
  required?: boolean;
  half?: boolean;  // pair with the next half field for side-by-side rendering
}

// ─── Newsletter ──────────────────────────────────────────────────────────────

export interface NewsletterContent {
  headline: string;
  body: string;
  formLabel?: string;
  placeholder: string;
  submitLabel: string;
  backgroundImage?: CMSImage;
}

// ─── Footer ──────────────────────────────────────────────────────────────────

export interface FooterLinkGroup {
  heading: string;
  links: NavLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface FooterContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface FooterContent {
  logo: CMSImage;
  tagline: string;
  cta?: CTAButton;
  linkGroups: FooterLinkGroup[];
  socials: SocialLink[];
  contactInfo?: FooterContactInfo;
  copyright: string;
}

// ─── Shop / Product Carousel ─────────────────────────────────────────────────

export interface ShopProduct {
  id: string;
  slug: string;
  name: string;
  varietal: string;
  scaScore: number;
  process: string;
  flavorNotes: string;
  weight: string;
  priceFrom: number;
  currency: string;
  image: CMSImage;
}

export interface ProductCarouselContent {
  heading: string;
  products: ShopProduct[];
}

// ─── Page-level aggregation ──────────────────────────────────────────────────

export interface HomePageContent {
  nav: NavContent;
  hero: HeroContent;
  heritage: HeritageContent;
  brandStory: BrandStoryContent;
  productCarousel: ProductCarouselContent;
  flavorProfile: FlavorProfileContent;
  whyChoose: WhyChooseContent;
  testimonials: TestimonialsContent;
  contact: ContactContent;
  newsletter: NewsletterContent;
  footer: FooterContent;
}
