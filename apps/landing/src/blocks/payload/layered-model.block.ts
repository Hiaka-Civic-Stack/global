import type { Block } from "payload"

import { sectionIntroFields } from "../fields"

export const LayeredModelBlock: Block = {
  slug: "layeredModel",
  interfaceName: "LayeredModelBlock",
  labels: {
    singular: "Layered model",
    plural: "Layered models"
  },
  admin: {
    group: "Civic stack"
  },
  fields: [
    ...sectionIntroFields,
    {
      name: "anchor",
      type: "text"
    },
    {
      name: "layers",
      type: "array",
      minRows: 2,
      fields: [
        {
          name: "name",
          type: "text",
          required: true
        },
        {
          name: "description",
          type: "textarea"
        }
      ]
    }
  ]
}
