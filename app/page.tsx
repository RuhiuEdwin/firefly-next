import { Navbar }           from "@/components/layout/Navbar";
import { Footer }           from "@/components/layout/Footer";
import { Hero }             from "@/components/sections/Hero";
import { Heritage }         from "@/components/sections/Heritage";
import { BrandStory }       from "@/components/sections/BrandStory";
import { ProductCarousel }  from "@/components/sections/ProductCarousel";
import { FlavorProfile }    from "@/components/sections/FlavorProfile";
import { WhyChoose }        from "@/components/sections/WhyChoose";
import { Testimonials }     from "@/components/sections/Testimonials";
import { Contact }          from "@/components/sections/Contact";
import { Newsletter }       from "@/components/sections/Newsletter";

import {
  getNavContent,
  getHeroContent,
  getHeritageContent,
  getBrandStoryContent,
  getProductCarouselContent,
  getFlavorProfileContent,
  getWhyChooseContent,
  getTestimonialsContent,
  getContactContent,
  getNewsletterContent,
  getFooterContent,
} from "@/lib/content";

export default async function HomePage() {
  const [
    nav,
    hero,
    heritage,
    brandStory,
    productCarousel,
    flavorProfile,
    whyChoose,
    testimonials,
    contact,
    newsletter,
    footer,
  ] = await Promise.all([
    getNavContent(),
    getHeroContent(),
    getHeritageContent(),
    getBrandStoryContent(),
    getProductCarouselContent(),
    getFlavorProfileContent(),
    getWhyChooseContent(),
    getTestimonialsContent(),
    getContactContent(),
    getNewsletterContent(),
    getFooterContent(),
  ]);

  return (
    <>
      <Navbar           content={nav} />
      <main>
        <Hero           content={hero} />
        <Heritage       content={heritage} />
        <BrandStory     content={brandStory} />
        <ProductCarousel content={productCarousel} />
        <FlavorProfile  content={flavorProfile} />
        <WhyChoose      content={whyChoose} />
        <Testimonials   content={testimonials} />
        <Contact        content={contact} />
        <Newsletter     content={newsletter} />
      </main>
      <Footer           content={footer} />
    </>
  );
}
