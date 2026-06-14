import { defineType, defineField } from "sanity";

export const heritageSection = defineType({
  name: "heritageSection",
  title: "Heritage Section",
  type: "document",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
    defineField({ name: "headline",     title: "Headline (plain)", type: "string" }),
    defineField({
      name: "headlineWords", title: "Headline Words", type: "array",
      of: [{ type: "headlineWord" }],
    }),
    defineField({ name: "body", title: "Body Copy", type: "text" }),
    defineField({
      name: "bodyAccentWords", title: "Body Accent Words (gold highlight)", type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "cards", title: "Heritage Cards", type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "number",      type: "number", title: "Number" },
          { name: "title",       type: "string", title: "Title" },
          { name: "subtitle",    type: "string", title: "Subtitle Tag" },
          { name: "description", type: "text",   title: "Description" },
          { name: "href",        type: "string", title: "Link URL" },
          { name: "image",       type: "image",  title: "Card Image",
            fields: [{ name: "alt", type: "string" }] },
        ],
        preview: { select: { title: "title", subtitle: "subtitle" } },
      }],
    }),
  ],
  preview: { select: { title: "sectionLabel" } },
});
