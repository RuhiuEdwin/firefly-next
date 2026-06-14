import { defineType, defineField } from "sanity";

export const brandStorySection = defineType({
  name: "brandStorySection",
  title: "Brand Story Section",
  type: "document",
  fields: [
    defineField({ name: "headline", title: "Headline (plain)", type: "string" }),
    defineField({
      name: "headlineWords", title: "Headline Words", type: "array",
      of: [{ type: "headlineWord" }],
    }),
    defineField({ name: "body",  title: "Body Paragraph 1", type: "text" }),
    defineField({ name: "body2", title: "Body Paragraph 2 (optional)", type: "text" }),
    defineField({ name: "cta",   title: "CTA Button", type: "ctaButton" }),
    defineField({
      name: "productImage", title: "Product Image", type: "image",
      fields: [defineField({ name: "alt", type: "string", title: "Alt Text" })],
    }),
  ],
  preview: { select: { title: "headline" } },
});
