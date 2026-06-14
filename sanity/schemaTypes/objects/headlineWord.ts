import { defineType, defineField } from "sanity";

export const headlineWord = defineType({
  name: "headlineWord",
  title: "Headline Word",
  type: "object",
  fields: [
    defineField({ name: "text",            title: "Text",           type: "string" }),
    defineField({ name: "bold",            title: "Bold",           type: "boolean" }),
    defineField({ name: "italic",          title: "Italic",         type: "boolean" }),
    defineField({ name: "lineBreakBefore", title: "New Line Before",type: "boolean" }),
    defineField({ name: "logo",            title: "Logo Font",      type: "boolean" }),
    defineField({
      name: "color", title: "Color Override", type: "string",
      options: { list: [{ title: "Amber", value: "amber" }, { title: "Gold", value: "gold" }] },
    }),
  ],
  preview: { select: { title: "text" } },
});
