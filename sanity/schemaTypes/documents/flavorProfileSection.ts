import { defineType, defineField } from "sanity";

export const flavorProfileSection = defineType({
  name: "flavorProfileSection",
  title: "Flavor Profile Section",
  type: "document",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
    defineField({
      name: "headlineWords", title: "Headline Words", type: "array",
      of: [{ type: "headlineWord" }],
    }),
    defineField({
      name: "ctas", title: "CTA Buttons", type: "array",
      of: [{ type: "ctaButton" }],
    }),
    defineField({
      name: "products", title: "Flavor Products", type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "number",      type: "string", title: "Number (e.g. 01)" },
          { name: "name",        type: "string", title: "Display Name" },
          { name: "description", type: "text",   title: "Description" },
          { name: "image",       type: "image",  title: "Image",
            fields: [{ name: "alt", type: "string" }] },
          { name: "notes", type: "array", title: "Flavor Notes", of: [{
            type: "object",
            fields: [
              { name: "label",      type: "string", title: "Label (e.g. BRIGHTNESS)" },
              { name: "percentage", type: "number", title: "Percentage (0–100)" },
            ],
          }]},
          { name: "stats", type: "array", title: "Floating Stats", of: [{
            type: "object",
            fields: [
              { name: "label",    type: "string",  title: "Label" },
              { name: "value",    type: "string",  title: "Value" },
              { name: "position", type: "string",  title: "Position",
                options: { list: ["top-right","mid-left","bottom-right"] } },
              { name: "card",     type: "boolean", title: "Show as Card" },
            ],
          }]},
        ],
        preview: { select: { title: "name" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "Flavor Profile Section" }) },
});
