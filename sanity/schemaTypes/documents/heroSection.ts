import { defineType, defineField } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({ name: "headline", title: "Headline (plain, for SEO)", type: "string" }),
    defineField({
      name: "headlineWords", title: "Headline Words", type: "array",
      of: [{ type: "headlineWord" }],
    }),
    defineField({ name: "body", title: "Body Text", type: "text" }),
    defineField({
      name: "ctas", title: "CTA Buttons", type: "array",
      of: [{ type: "ctaButton" }],
    }),
    defineField({
      name: "backgroundImage", title: "Background Image", type: "image",
      fields: [defineField({ name: "alt", type: "string", title: "Alt Text" })],
    }),
    defineField({
      name: "featuredStats", title: "Featured Stats", type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "image",  type: "image", title: "Stat Image",
            fields: [{ name: "alt", type: "string" }] },
          { name: "label", type: "string", title: "Label" },
          { name: "value", type: "string", title: "Value (e.g. 95%)" },
        ],
      }],
    }),
  ],
  preview: { select: { title: "headline" } },
});
