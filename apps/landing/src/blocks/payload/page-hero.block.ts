import type { Block } from "payload"

import { linkFields } from "../fields"

export const PageHeroBlock: Block = {
  slug: "pageHero",
  interfaceName: "PageHeroBlock",
  labels: {
    singular: "Page hero",
    plural: "Page heroes"
  },
  admin: {
    group: "Editorial"
  },
  fields: [
    {
      name: "eyebrow",
      type: "text"
    },
    {
      name: "title",
      type: "text",
      required: true
    },
    {
      name: "body",
      type: "textarea"
    },
    {
      name: "actions",
      type: "array",
      maxRows: 2,
      fields: linkFields
    }
  ]
}
