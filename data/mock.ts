import type { HomePageContent } from "@/lib/types";

// ---------------------------------------------------------------------------
// All content is sourced here. To migrate to a CMS:
//   1. Replace the relevant object(s) with an API/SDK call in lib/content.ts
//   2. Keep the same TypeScript shape — no component changes needed
// ---------------------------------------------------------------------------

export const mockContent: HomePageContent = {
  // ── Navigation ────────────────────────────────────────────────────────────
  nav: {
    logoText: "FireFly Coffee",
    logo: { src: "/assets/logo.svg", alt: "FireFly Coffee" },
    links: [
      { label: "Home",     href: "/" },
      { label: "Beans",    href: "/beans" },
      { label: "Tours",    href: "#tours" },
      { label: "About",    href: "/about" },
      { label: "Contacts", href: "/contacts" },
    ],
    cta: { label: "Go to Shop", href: "/shop", variant: "primary", icon: "cart" },
  },

  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    headline: "Kenya's Finest In Every Bean",
    headlineWords: [
      { text: "Kenya's " },
      { text: "Finest",   bold: true, italic: true, lineBreakBefore: false },
      { text: "In Every", bold: true, italic: true, lineBreakBefore: true },
      { text: " Bean" },
    ],
    body: "Single-origin Kenyan coffee grown on one hillside for nearly a century. Traceable, exceptional, and delivered to your door.",
    ctas: [
      { label: "Book a Tour", href: "#tours",  variant: "outline",  icon: "tour" },
      { label: "Go to Shop",  href: "/shop",   variant: "primary",  icon: "cart" },
    ],
    backgroundImage: {
      src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80",
      alt: "Dark roasted coffee beans",
    },
    featuredStats: [
      {
        image: { src: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=400&q=80", alt: "Freshly brewed Firefly coffee" },
        label: "Ruiru II Variety",
        value: "95%",
      },
      {
        image: { src: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=400&q=80", alt: "Batian coffee cherries" },
        label: "Batian Variety",
        value: "87%",
      },
      {
        image: { src: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=400&q=80", alt: "K7 estate roast" },
        label: "K7 Variety",
        value: "91%",
      },
    ],
  },

  // ── Heritage ──────────────────────────────────────────────────────────────
  heritage: {
    sectionLabel: "SIGNATURE BREWS",
    headline: "Nearly a Century on one Kenyan Hillside",
    headlineWords: [
      { text: "Nearly " },
      { text: "a Century", bold: true, italic: true },
      { text: " on" },
      { text: "one Kenyan Hillside", lineBreakBefore: true },
    ],
    body: "Since 1926, the same family soil on the slopes of Mt. Kenya and the Aberdares — one origin, endlessly refined.",
    bodyAccentWords: ["Mt. Kenya", "Aberdares"],
    cards: [
      {
        number: 1,
        title: "Heritage",
        subtitle: "ROOTED SINCE 1926",
        description:
          "Generations of growing on the same Kiambu ground, where altitude, rainfall and rich volcanic soil do most of the work.",
        image: { src: "/assets/image 2.png", alt: "Coffee farm on the hillside", width: 400, height: 300 },
        href: "/about#heritage",
      },
      {
        number: 2,
        title: "Philosophy",
        subtitle: "SHADE-GROWN & ORGANIC",
        description:
          "Cultivated under Cordia, Albizia and Grevillea canopy with rainforest practices — completely chemical-free, fed by a spring-fed dam.",
        image: { src: "/assets/image 3.png", alt: "Coffee philosophy", width: 400, height: 300 },
        href: "/about#philosophy",
      },
      {
        number: 3,
        title: "Origin",
        subtitle: "SINGLE ORIGIN, TRACEABLE",
        description:
          "95% Ruiru II, hand-picked at peak ripeness, wet-processed the same day at our onsite mill and sun-dried on raised beds.",
        image: { src: "/assets/image 5.png", alt: "Coffee origin estate", width: 400, height: 300 },
        href: "/about#origin",
      },
    ],
  },

  // ── Brand Story ───────────────────────────────────────────────────────────
  brandStory: {
    headline: "Kenya's Finest In Every Bean",
    headlineWords: [
      { text: "Kenya's " },
      { text: "Finest",   bold: true, italic: true },
      { text: " In Every", bold: true, italic: true, lineBreakBefore: true },
      { text: " Bean" },
    ],
    body: "Kenya is globally renowned for producing some of the finest coffee in the world. Firefly Coffee beans are cultivated from 95% Ruiru II variety; organically grown, completely chemical-free, and shade grown under Cordia, Albizia, and Grevillea trees with rainforest practices. Every bean is single origin.",
    body2: "The result is a vibrant, fruity flavor profile with notes of plum, citrus, and honey; a rich, refreshing expression of the great Kenyan cup.",
    cta: { label: "Learn More", href: "/about", variant: "primary" },
    productImage: {
      src: "/assets/stylized-cup-coffee-out-coffee-beans-flat-lay 1.png",
      alt: "Stylized coffee cup with coffee beans",
      width: 480,
      height: 480,
    },
  },

  // ── Product Carousel ──────────────────────────────────────────────────────
  productCarousel: {
    heading: "Our Coffee",
    products: [
      {
        id: "p1",
        slug: "mt-kenya-specialty",
        name: "Mt. Kenya Specialty",
        varietal: "Mt. Kenya Coffee",
        scaScore: 89,
        process: "Carbonic Maceration",
        flavorNotes: "Floral aroma, blueberry coffee",
        weight: "250gr",
        priceFrom: 1500,
        currency: "Kes.",
        image: { src: "/assets/coffeeBag.png", alt: "Mt. Kenya Specialty coffee bag", width: 340, height: 400 },
        profile: "Floral aroma, blueberry tea",
        altitude: "1500masl",
        roastProfile: "Espresso",
        farm: "Mt. Kenya, Kiambu County, Kenya",
        category: "ESPRESSO",
        badgeLabel: "SIGNATURE DARK",
        description: "Mt Kenya Roast is a premium single-origin coffee sourced from the slopes of Mount Kenya, one of Africa's most celebrated coffee-growing regions. Grown at elevations between 1,400 and 2,000 metres, the beans benefit from rich volcanic soils, ample rainfall, and cool nights that slow the ripening process and concentrate flavour. Mt Kenya Roast delivers a bright, full-bodied cup with a vibrant acidity reminiscent of blackcurrant and red berry, balanced by a deep, wine-like sweetness. Subtle earthy undertones and a clean, lingering finish make it a favourite among specialty coffee lovers seeking complexity in every sip.",
      },
      {
        id: "p2",
        slug: "kiambu-estate-light",
        name: "Kiambu Estate Light",
        varietal: "Ruiru II Variety",
        scaScore: 87,
        process: "Washed",
        flavorNotes: "Bright citrus, honey finish",
        weight: "250gr",
        priceFrom: 1500,
        currency: "Kes.",
        image: { src: "/assets/coffeeBag.png", alt: "Kiambu Estate Light coffee bag", width: 340, height: 400 },
        profile: "Citrus brightness, floral honey",
        altitude: "1700masl",
        roastProfile: "Filter / Pour-over",
        farm: "Kiambu Estate, Kiambu County, Kenya",
        category: "LIGHT ROAST",
        description: "Kiambu Estate Light is a delicate single-origin coffee grown on the fertile slopes of Kiambu County, just north of Nairobi. At 1,700 metres, the cool altitude and consistent rainfall create conditions for a coffee of exceptional clarity. Expect vibrant citrus acidity — think lemon zest and grapefruit — layered with a gentle honey sweetness and a lingering floral finish. Best enjoyed as a pour-over or filter brew to fully appreciate its brightness and complexity.",
      },
      {
        id: "p3",
        slug: "aberdare-aa-grade",
        name: "Aberdare AA Grade",
        varietal: "Batian Variety",
        scaScore: 91,
        process: "Natural",
        flavorNotes: "Berry, dark caramel, stone fruit",
        weight: "500gr",
        priceFrom: 2800,
        currency: "Kes.",
        image: { src: "/assets/coffeeBag.png", alt: "Aberdare AA Grade coffee bag", width: 340, height: 400 },
        profile: "Berry, dark caramel, stone fruit",
        altitude: "1900masl",
        roastProfile: "Medium-Dark",
        farm: "Aberdare Range, Nyeri County, Kenya",
        category: "DARK",
        badgeLabel: "SIGNATURE DARK",
        description: "Aberdare AA Grade is our flagship naturally processed coffee, sourced from the cloud forest edges of the Aberdare Range at nearly 1,900 metres. The cherries are hand-sorted and sun-dried whole on raised African beds, a process that concentrates the fruit sugars and creates an intensely sweet, wine-like cup. Rich dark caramel and ripe stone fruit dominate the palate, with a lingering berry finish that evolves as the cup cools.",
      },
      {
        id: "p4",
        slug: "firefly-signature",
        name: "FireFly Signature",
        varietal: "K7 Variety",
        scaScore: 88,
        process: "Honey Process",
        flavorNotes: "Chocolate, tropical fruit",
        weight: "250gr",
        priceFrom: 1500,
        currency: "Kes.",
        image: { src: "/assets/coffeeBag.png", alt: "FireFly Signature coffee bag", width: 340, height: 400 },
        profile: "Chocolate, mango, tropical fruit",
        altitude: "1600masl",
        roastProfile: "Medium",
        farm: "FireFly Estate, Mt. Kenya Region, Kenya",
        category: "MEDIUM",
        badgeLabel: "WHOLE BEAN",
        description: "FireFly Signature is our house blend — a honey-processed K7 variety grown on our home farm at 1,600 metres. Honey processing means the cherry mucilage is left on the bean during drying, imparting a silky body and natural sweetness that bridges the gap between washed brightness and natural depth. Expect rich milk chocolate, ripe mango, and a tropical fruit finish with a caramel sweetness that lingers beautifully.",
      },
      {
        id: "p5",
        slug: "single-origin-peaberry",
        name: "Single Origin Peaberry",
        varietal: "Mt. Kenya Coffee",
        scaScore: 92,
        process: "Sun-Dried",
        flavorNotes: "Jasmine, plum, black tea",
        weight: "250gr",
        priceFrom: 1800,
        currency: "Kes.",
        image: { src: "/assets/coffeeBag.png", alt: "Single Origin Peaberry coffee bag", width: 340, height: 400 },
        profile: "Jasmine, plum, black tea",
        altitude: "1800masl",
        roastProfile: "Light",
        farm: "Kirinyaga County, Mt. Kenya Region, Kenya",
        category: "LIGHT ROAST",
        description: "Peaberry coffee is a natural mutation where a single oval bean develops inside the cherry instead of the usual two flat-sided beans. This concentrated structure is said to produce a more intense, rounded cup — and our Kirinyaga peaberry bears that out beautifully. Delicate jasmine florals open the cup, giving way to ripe plum and a long black tea finish. Roasted light to preserve its extraordinary terroir, this is a coffee for quiet mornings and careful attention.",
      },
      {
        id: "p6",
        slug: "green-kenya-raw",
        name: "Green Kenya Raw",
        varietal: "Ruiru II Variety",
        scaScore: 88,
        process: "Sun-Dried",
        flavorNotes: "Grassy, vegetal, clean",
        weight: "500gr",
        priceFrom: 1200,
        currency: "Kes.",
        image: { src: "/assets/coffeeBag.png", alt: "Green Kenya Raw coffee bag", width: 340, height: 400 },
        profile: "Grassy, nutty, clean finish",
        altitude: "1600masl",
        roastProfile: "Unroasted",
        farm: "Mt. Kenya, Kiambu County, Kenya",
        category: "GREEN/UNROASTED",
        description: "Our green, unroasted beans are sun-dried on raised beds straight after wet processing. Perfect for home roasters who want total control over their roast profile. Sourced from the same single-origin estate as all our roasted offerings.",
      },
      {
        id: "p7",
        slug: "firefly-ground-dark",
        name: "FireFly Ground Dark",
        varietal: "K7 Variety",
        scaScore: 87,
        process: "Washed",
        flavorNotes: "Dark chocolate, smoky, bold",
        weight: "250gr",
        priceFrom: 1400,
        currency: "Kes.",
        image: { src: "/assets/coffeeBag.png", alt: "FireFly Ground Dark coffee bag", width: 340, height: 400 },
        profile: "Dark chocolate, smoky depth",
        altitude: "1500masl",
        roastProfile: "Dark",
        farm: "FireFly Estate, Mt. Kenya Region, Kenya",
        category: "GROUND",
        badgeLabel: "SIGNATURE DARK",
        description: "Pre-ground for convenience without sacrificing character. Our darkest roast — a bold, full-bodied cup with notes of dark chocolate and a smoky, lingering finish. Ground to a medium-coarse setting ideal for drip machines and French press.",
      },
      {
        id: "p8",
        slug: "aberdare-whole-bean",
        name: "Aberdare Whole Bean",
        varietal: "Batian Variety",
        scaScore: 90,
        process: "Natural",
        flavorNotes: "Red berry, wine, caramel",
        weight: "500gr",
        priceFrom: 2500,
        currency: "Kes.",
        image: { src: "/assets/coffeeBag.png", alt: "Aberdare Whole Bean coffee bag", width: 340, height: 400 },
        profile: "Red berry, wine notes, caramel",
        altitude: "1900masl",
        roastProfile: "Medium",
        farm: "Aberdare Range, Nyeri County, Kenya",
        category: "WHOLE BEAN",
        description: "The Aberdare Whole Bean lets you grind fresh and dial in exactly the extraction you want. Medium roasted to preserve the natural red berry and wine-like notes unique to this high-altitude Batian variety. A versatile bean for espresso and filter alike.",
      },
    ],
  },

  // ── Flavor Profile ────────────────────────────────────────────────────────
  flavorProfile: {
    sectionLabel: "TASTE THE NOTES",
    headlineWords: [
      { text: "A " },
      { text: "Vibrant Take", bold: true, italic: true },
      { text: " on our " },
      { text: "Flavor Profile", bold: true, italic: true },
    ],
    products: [
      {
        number: "01",
        name: "Whole Bean · Dark",
        description: "Rich and full-bodied with deep chocolate undertones. Built for espresso and the daily ritual.",
        notes: [
          { label: "BRIGHTNESS",  percentage: 45 },
          { label: "BODY",        percentage: 88 },
          { label: "AROMA",       percentage: 82 },
          { label: "COMPLEXITY",  percentage: 70 },
          { label: "BALANCE",     percentage: 75 },
          { label: "SWEETNESS",   percentage: 55 },
        ],
        image: {
          src: "/assets/action-coffee 2.png",
          alt: "Dark roast coffee beans in a sack",
          width: 560,
          height: 560,
        },
        stats: [
          { label: "Customers",    value: "95K",  position: "top-right",    card: true },
          { label: "Success Rate", value: "91%",  position: "mid-left",     card: false },
          { label: "Roast Score",  value: "92M",  position: "bottom-right", card: false },
        ],
      },
      {
        number: "02",
        name: "Whole Bean · Light",
        description: "Bright and floral with citrus lift. Built for filter, pour-over and the cupping table.",
        notes: [
          { label: "BRIGHTNESS",  percentage: 91 },
          { label: "BODY",        percentage: 55 },
          { label: "AROMA",       percentage: 78 },
          { label: "COMPLEXITY",  percentage: 65 },
          { label: "BALANCE",     percentage: 72 },
          { label: "SWEETNESS",   percentage: 60 },
        ],
        image: {
          src: "/assets/action-coffee 2.png",
          alt: "Light roast coffee beans with leaves",
          width: 560,
          height: 560,
        },
        stats: [
          { label: "Customers",    value: "85%",  position: "top-right",    card: true },
          { label: "Success Rate", value: "95K",  position: "mid-left",     card: false },
          { label: "Failure Rate", value: "68M",  position: "bottom-right", card: false },
        ],
      },
      {
        number: "03",
        name: "Ground · Medium",
        description: "Smooth and balanced with a caramel sweetness. Perfect for the everyday drip brewer.",
        notes: [
          { label: "BRIGHTNESS",  percentage: 68 },
          { label: "BODY",        percentage: 72 },
          { label: "AROMA",       percentage: 85 },
          { label: "COMPLEXITY",  percentage: 60 },
          { label: "BALANCE",     percentage: 90 },
          { label: "SWEETNESS",   percentage: 80 },
        ],
        image: {
          src: "/assets/action-coffee 2.png",
          alt: "Medium roast ground coffee",
          width: 560,
          height: 560,
        },
        stats: [
          { label: "Customers",    value: "78K",  position: "top-right",    card: true },
          { label: "Success Rate", value: "88%",  position: "mid-left",     card: false },
          { label: "Blend Score",  value: "74M",  position: "bottom-right", card: false },
        ],
      },
    ],
    ctas: [
      { label: "Learn More", href: "/beans",  variant: "outline" },
      { label: "Go to Shop", href: "/shop",   variant: "primary", icon: "cart" },
    ],
  },

  // ── Why Choose ────────────────────────────────────────────────────────────
  whyChoose: {
    sectionLabel: "ARTISAN CRAFTED BREWS",
    headlineWords: [
      { text: "Why " },
      { text: "Choose", bold: true, italic: true },
      { text: " FireFly", logo: true },
      { text: " ?" },
    ],
    mascotImage: {
      src: "/assets/firefly.png",
      alt: "Firefly Coffee artisan brews",
      width: 480,
      height: 560,
    },
    features: [
      {
        iconImage: { src: "/assets/coffee.png", alt: "Single origin coffee beans", width: 80, height: 80 },
        title: "Single Origin",
        description: "100% from our estate on the slopes of Mt. Kenya; never blended, always traceable.",
      },
      {
        iconImage: { src: "/assets/pick.png", alt: "Hand picked coffee cherries", width: 80, height: 80 },
        title: "Hand Picked",
        description: "Selective, same-day picking and on-site wet processing to preserve every note.",
      },
      {
        iconImage: { src: "/assets/chemicals.png", alt: "Chemical-free coffee", width: 80, height: 80 },
        title: "Chemical-free",
        description: "Organically grown without synthetic pesticides, fungicides, or fertilizers.",
      },
      {
        iconImage: { src: "/assets/sun.png", alt: "Sun dried coffee", width: 80, height: 80 },
        title: "Sun Dried",
        description: "Slow-dried on raised beds under the Kenyan sun for clean, vibrant cup character.",
      },
      {
        iconImage: { src: "/assets/trees.png", alt: "Shade grown coffee", width: 80, height: 80 },
        title: "Shade Grown",
        description: "Cultivated under native canopy with rainforest practices that protect biodiversity.",
      },
      {
        iconImage: { src: "/assets/certified.png", alt: "Certified coffee", width: 80, height: 80 },
        title: "Certified",
        description: "Kilimohai Organic and Rainforest certified; independently verified, every harvest.",
      },
    ],
  },

  // ── Testimonials ──────────────────────────────────────────────────────────
  testimonials: {
    sectionLabel: "TESTIMONIALS",
    headline: "They tasted Our Passion",
    headlineWords: [
      { text: "They " },
      { text: "tasted", italic: true },
      { text: " Our" },
      { text: "Passion", bold: true, italic: true, lineBreakBefore: true },
    ],
    backgroundImage: {
      src: "/assets/about-bg 1.png",
      alt: "Testimonials background",
    },
    beansImage: {
      src: "/assets/action-coffee 2.png",
      alt: "Firefly coffee action shot",
      width: 720,
      height: 620,
    },
    items: [
      {
        id: "t1",
        quote: "Just had my first taste of the Kenya organic firefly coffee. It was roasted to city + and dropped at 430O. First, to get a proper shot(espresso) I had to grind MUCH coarser that others i've  roasted. My first taste (in an Americano) was CITRUS...I could almost smell orange. Then after a few sips I began to notice a berry flavor. So, I logged on to see the cupping for it and YES...citrus and strawberry with a sweet taste. I don't really care for fruity notes BUT...This one is interesting and I can actually see myself enjoying it on occasion.",
        author: "Timothy",
        date: "March 28,2026",
        rating: 5,
      },
      {
        id: "t2",
        quote: "I've been buying specialty coffee for years. Firefly is the only one I reorder without trying anything else first. The single-origin quality is unlike anything else on the market — you can taste the hillside in every cup.",
        author: "Sarah",
        date: "February 14,2026",
        rating: 5,
      },
      {
        id: "t3",
        quote: "The story behind every bag makes the coffee taste even better. Truly farm-to-cup. You can taste the care that goes into every harvest on the Kenyan hillside. Nothing else comes close.",
        author: "David",
        date: "January 5,2026",
        rating: 5,
      },
    ],
  },

  // ── Contact ───────────────────────────────────────────────────────────────
  contact: {
    sectionLabel: "CONTACT US",
    headline: "Let's Connect Over\nCoffee",
    body: "Have a question, planning a visit, or simply craving your next cup? We'd love to hear from you. Reach out to Deli for reservations, inquiries, or collaborations — and let's make you something special.",
    submitLabel: "Submit",
    learnMoreLabel: "Learn More",
    formFields: [
      { name: "firstName", label: "First Name",              type: "text",  placeholder: "*First Name",              required: true,  half: true },
      { name: "lastName",  label: "Last Name",               type: "text",  placeholder: "*Last Name",               required: true,  half: true },
      { name: "email",     label: "Email Address",           type: "email", placeholder: "*Email Address",           required: true },
      { name: "phone",     label: "Phone Number (Optional)", type: "tel",   placeholder: "Phone Number (Optional)" },
      { name: "country",   label: "Country (Optional)",      type: "text",  placeholder: "Country (Optional)" },
    ],
  },

  // ── Newsletter ────────────────────────────────────────────────────────────
  newsletter: {
    headline: "Brewed News Just For You!",
    body: "Harvest Drops ☕ Restock Alerts ☕ Roasting Notes\nstraight from the farm to your inbox.",
    formLabel: "Subscribe Our Newsletter",
    placeholder: "Enter Your Email",
    submitLabel: "Submit",
    backgroundImage: {
      src: "/assets/testimonial-bg 1.png",
      alt: "Newsletter background",
    },
  },

  // ── Footer ────────────────────────────────────────────────────────────────
  footer: {
    logo: { src: "/assets/logo.svg", alt: "Firefly Coffee" },
    tagline: "Single origin Kenyan coffee, grown organically and chemical-free on the slopes of Mt. Kenya since 1926.",
    cta: { label: "Go to Shop", href: "/shop", variant: "primary", icon: "cart" },
    linkGroups: [
      {
        heading: "Essential Links",
        links: [
          { label: "About Us",     href: "/about" },
          { label: "Our Story",    href: "#story" },
          { label: "Our Coffee",   href: "#products" },
          { label: "Farm Tours",   href: "#tours" },
          { label: "Blog",         href: "#blog" },
          { label: "Get in Touch", href: "#contact" },
        ],
      },
    ],
    socials: [
      { platform: "Dribbble",  href: "#", icon: "dribbble" },
      { platform: "Behance",   href: "#", icon: "behance" },
      { platform: "Instagram", href: "#", icon: "instagram" },
      { platform: "Twitter",   href: "#", icon: "twitter" },
    ],
    contactInfo: {
      email: "hello@firefly.coffee",
      phone: "(+254) 722 208 787",
      location: "Slopes of Mt. Kenya Kiambu County, Kenya\n1,600 M.A.S.L",
    },
    copyright: `© ${new Date().getFullYear()} Firefly Coffee. All rights reserved.`,
  },
};
