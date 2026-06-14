import { defineType, defineField } from "sanity";

export const whyChooseSection = defineType({
  name: "whyChooseSection",
  title: "Why Choose Section",
  type: "document",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
    defineField({
      name: "headlineWords", title: "Headline Words", type: "array",
      of: [{ type: "headlineWord" }],
    }),
    defineField({
      name: "mascotImage", title: "Mascot / Feature Image", type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", title: "Alt Text" })],
    }),
    defineField({
      name: "features", title: "Feature Cards", type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "title",       type: "string", title: "Title" },
          { name: "description", type: "text",   title: "Description" },
          { name: "iconImage",   type: "image",  title: "Icon Image",
            fields: [{ name: "alt", type: "string" }] },
        ],
        preview: { select: { title: "title" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "Why Choose Section" }) },
});
