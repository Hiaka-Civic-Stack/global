import type { Block } from "payload"

import { linkFields } from "../fields"

export const HeroBlock: Block = {
  slug: "hero",
  interfaceName: "HeroBlock",
  labels: {
    singular: "Hero",
    plural: "Heroes"
  },
  admin: {
    group: "Landing"
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
      type: "textarea",
      required: true
    },
    {
      name: "primaryLink",
      type: "group",
      fields: linkFields
    },
    {
      name: "secondaryLink",
      type: "group",
      fields: linkFields
    },
    {
      name: "asideTitle",
      type: "text"
    },
    {
      name: "asideLabel",
      type: "text"
    },
    {
      name: "asideItems",
      type: "array",
      fields: [
        {
          name: "label",
          type: "text",
          required: true
        }
      ]
    }
  ]
}
