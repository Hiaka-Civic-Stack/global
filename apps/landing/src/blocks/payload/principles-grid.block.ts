import type { Block } from "payload"

import { linkFields } from "../fields"

export const PrinciplesGridBlock: Block = {
  slug: "principlesGrid",
  interfaceName: "PrinciplesGridBlock",
  labels: {
    singular: "Principles grid",
    plural: "Principles grids"
  },
  admin: {
    group: "Landing"
  },
  fields: [
    {
      name: "items",
      type: "array",
      minRows: 1,
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
          name: "link",
          type: "group",
          fields: linkFields
        }
      ]
    }
  ]
}
