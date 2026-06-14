import { defineType, defineField } from "sanity";

export const ctaButton = defineType({
  name: "ctaButton",
  title: "CTA Button",
  type: "object",
  fields: [
    defineField({ name: "label",   title: "Label",   type: "string" }),
    defineField({ name: "href",    title: "URL",     type: "string" }),
    defineField({
      name: "variant", title: "Variant", type: "string",
      options: { list: ["primary", "outline", "ghost"] },
    }),
    defineField({
      name: "icon", title: "Icon", type: "string",
      options: { list: ["cart", "tour", "arrow-right"] },
    }),
  ],
  preview: { select: { title: "label", subtitle: "href" } },
});
