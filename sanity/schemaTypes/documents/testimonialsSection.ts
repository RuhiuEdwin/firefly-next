import { defineType, defineField } from "sanity";

export const testimonialsSection = defineType({
  name: "testimonialsSection",
  title: "Testimonials Section",
  type: "document",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
    defineField({ name: "headline",     title: "Headline (plain)", type: "string" }),
    defineField({
      name: "headlineWords", title: "Headline Words", type: "array",
      of: [{ type: "headlineWord" }],
    }),
    defineField({
      name: "backgroundImage", title: "Background Image", type: "image",
      fields: [defineField({ name: "alt", type: "string", title: "Alt Text" })],
    }),
    defineField({
      name: "beansImage", title: "Beans / Accent Image", type: "image",
      fields: [defineField({ name: "alt", type: "string", title: "Alt Text" })],
    }),
    defineField({
      name: "items", title: "Testimonials", type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "quote",    type: "text",   title: "Quote" },
          { name: "author",   type: "string", title: "Author Name" },
          { name: "location", type: "string", title: "Location (optional)" },
          { name: "date",     type: "string", title: "Date (optional)" },
          { name: "rating",   type: "number", title: "Rating (1–5)" },
        ],
        preview: { select: { title: "author", subtitle: "quote" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "Testimonials Section" }) },
});
