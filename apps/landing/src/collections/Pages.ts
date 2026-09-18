import type { CollectionConfig } from "payload"

import { landingBlocks } from "../blocks/landing"

export const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    read: () => true
  },
  admin: {
    defaultColumns: ["title", "slug", "_status", "updatedAt"],
    preview: ({ slug }) => {
      const path = slug === "home" ? "/" : `/${slug}`
      const encodedParams = new URLSearchParams({
        collection: "pages",
        path,
        slug: String(slug || "")
      })

      return `/preview?${encodedParams.toString()}`
    },
    useAsTitle: "title"
  },
  versions: {
    drafts: true
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        description: "Use 'home' for the homepage. Nested slugs like 'blueprints/public-consultation-v0' are supported."
      }
    },
    {
      name: "summary",
      type: "textarea",
      admin: {
        description: "Short internal and SEO summary for this page."
      }
    },
    {
      name: "navigation",
      type: "array",
      admin: {
        description: "Optional page-level navigation for this page."
      },
      fields: [
        {
          name: "label",
          type: "text",
          required: true
        },
        {
          name: "href",
          type: "text",
          required: true
        }
      ]
    },
    {
      name: "layout",
      type: "blocks",
      blocks: landingBlocks,
      minRows: 1,
      admin: {
        initCollapsed: true
      }
    },
    {
      name: "meta",
      type: "group",
      fields: [
        {
          name: "title",
          type: "text"
        },
        {
          name: "description",
          type: "textarea"
        }
      ]
    }
  ]
}
