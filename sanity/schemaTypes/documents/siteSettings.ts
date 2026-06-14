import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // Singleton — only one document of this type exists
  fields: [
    // ── Navigation ────────────────────────────────────────────────────────────
    defineField({
      name: "nav", title: "Navigation", type: "object",
      fields: [
        defineField({ name: "logoText", title: "Logo Text", type: "string" }),
        defineField({
          name: "logo", title: "Logo Image", type: "image",
          fields: [defineField({ name: "alt", type: "string", title: "Alt Text" })],
        }),
        defineField({
          name: "links", title: "Nav Links", type: "array",
          of: [{ type: "object", fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "href",  type: "string", title: "URL" },
          ]}],
        }),
        defineField({ name: "cta", title: "CTA Button", type: "ctaButton" }),
      ],
    }),

    // ── Newsletter ────────────────────────────────────────────────────────────
    defineField({
      name: "newsletter", title: "Newsletter", type: "object",
      fields: [
        defineField({ name: "headline",    type: "string", title: "Headline" }),
        defineField({ name: "body",        type: "text",   title: "Body" }),
        defineField({ name: "formLabel",   type: "string", title: "Form Label" }),
        defineField({ name: "placeholder", type: "string", title: "Input Placeholder" }),
        defineField({ name: "submitLabel", type: "string", title: "Submit Label" }),
        defineField({
          name: "backgroundImage", title: "Background Image", type: "image",
          fields: [defineField({ name: "alt", type: "string", title: "Alt Text" })],
        }),
      ],
    }),

    // ── Footer ────────────────────────────────────────────────────────────────
    defineField({
      name: "footer", title: "Footer", type: "object",
      fields: [
        defineField({
          name: "logo", title: "Logo", type: "image",
          fields: [defineField({ name: "alt", type: "string", title: "Alt Text" })],
        }),
        defineField({ name: "tagline",   type: "text",       title: "Tagline" }),
        defineField({ name: "cta",       type: "ctaButton",  title: "CTA Button" }),
        defineField({
          name: "linkGroups", title: "Link Groups", type: "array",
          of: [{ type: "object", fields: [
            { name: "heading", type: "string", title: "Heading" },
            { name: "links", type: "array", of: [{ type: "object", fields: [
              { name: "label", type: "string" },
              { name: "href",  type: "string" },
            ]}]},
          ]}],
        }),
        defineField({
          name: "socials", title: "Social Links", type: "array",
          of: [{ type: "object", fields: [
            { name: "platform", type: "string", title: "Platform" },
            { name: "href",     type: "string", title: "URL" },
            { name: "icon",     type: "string", title: "Icon Key" },
          ]}],
        }),
        defineField({
          name: "contactInfo", title: "Contact Info", type: "object",
          fields: [
            { name: "email",    type: "string" },
            { name: "phone",    type: "string" },
            { name: "location", type: "text"   },
          ],
        }),
        defineField({ name: "copyright", type: "string", title: "Copyright" }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
