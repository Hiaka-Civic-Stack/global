import type { Block } from "payload"

import { linkFields } from "../fields"

export const CalloutBandBlock: Block = {
  slug: "calloutBand",
  interfaceName: "CalloutBandBlock",
  labels: {
    singular: "Callout band",
    plural: "Callout bands"
  },
  admin: {
    group: "Editorial"
  },
  fields: [
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
      name: "action",
      type: "group",
      fields: linkFields
    }
  ]
}
