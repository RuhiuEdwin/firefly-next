import { defineType, defineField } from "sanity";

export const contactSection = defineType({
  name: "contactSection",
  title: "Contact Section",
  type: "document",
  fields: [
    defineField({ name: "sectionLabel",    title: "Section Label",    type: "string" }),
    defineField({ name: "headline",        title: "Headline",         type: "string" }),
    defineField({ name: "body",            title: "Body",             type: "text" }),
    defineField({ name: "submitLabel",     title: "Submit Label",     type: "string" }),
    defineField({ name: "learnMoreLabel",  title: "Learn More Label", type: "string" }),
    defineField({
      name: "formFields", title: "Form Fields", type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "name",        type: "string",  title: "Field Name (key)" },
          { name: "label",       type: "string",  title: "Label" },
          { name: "type",        type: "string",  title: "Input Type",
            options: { list: ["text","email","tel","textarea"] } },
          { name: "placeholder", type: "string",  title: "Placeholder" },
          { name: "required",    type: "boolean", title: "Required" },
          { name: "half",        type: "boolean", title: "Half Width (pairs with next)" },
        ],
        preview: { select: { title: "label" } },
      }],
    }),
  ],
  preview: { prepare: () => ({ title: "Contact Section" }) },
});
