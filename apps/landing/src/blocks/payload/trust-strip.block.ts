import type { Block } from "payload"

export const TrustStripBlock: Block = {
  slug: "trustStrip",
  interfaceName: "TrustStripBlock",
  labels: {
    singular: "Trust strip",
    plural: "Trust strips"
  },
  admin: {
    group: "Landing"
  },
  fields: [
    {
      name: "items",
      type: "array",
      minRows: 2,
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
