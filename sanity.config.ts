import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import {
  headlineWord, ctaButton,
  siteSettings, heroSection, heritageSection, brandStorySection,
  product, flavorProfileSection, whyChooseSection, testimonialsSection,
  contactSection,
} from "./sanity/schemaTypes";

export default defineConfig({
  name: "firefly-coffee",
  title: "Firefly Coffee CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singleton pages
            S.listItem().title("Site Settings (Nav / Footer / Newsletter)").id("siteSettings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.listItem().title("Hero Section").id("heroSection")
              .child(S.document().schemaType("heroSection").documentId("heroSection")),
            S.listItem().title("Heritage Section").id("heritageSection")
              .child(S.document().schemaType("heritageSection").documentId("heritageSection")),
            S.listItem().title("Brand Story Section").id("brandStorySection")
              .child(S.document().schemaType("brandStorySection").documentId("brandStorySection")),
            S.listItem().title("Flavor Profile Section").id("flavorProfileSection")
              .child(S.document().schemaType("flavorProfileSection").documentId("flavorProfileSection")),
            S.listItem().title("Why Choose Section").id("whyChooseSection")
              .child(S.document().schemaType("whyChooseSection").documentId("whyChooseSection")),
            S.listItem().title("Testimonials Section").id("testimonialsSection")
              .child(S.document().schemaType("testimonialsSection").documentId("testimonialsSection")),
            S.listItem().title("Contact Section").id("contactSection")
              .child(S.document().schemaType("contactSection").documentId("contactSection")),
            S.divider(),
            // Collections
            S.documentTypeListItem("product").title("Products"),
          ]),
    }),
    visionTool(), // GROQ query playground at /studio — remove in production
  ],

  schema: {
    types: [
      // Objects first (referenced by documents)
      headlineWord, ctaButton,
      // Documents
      siteSettings, heroSection, heritageSection, brandStorySection,
      product, flavorProfileSection, whyChooseSection, testimonialsSection,
      contactSection,
    ],
  },
});
