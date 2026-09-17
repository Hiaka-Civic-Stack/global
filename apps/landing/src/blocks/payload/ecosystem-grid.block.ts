import type { Block } from "payload"

import { sectionIntroFields } from "../fields"

export const EcosystemGridBlock: Block = {
  slug: "ecosystemGrid",
  interfaceName: "EcosystemGridBlock",
  labels: {
    singular: "Ecosystem grid",
    plural: "Ecosystem grids"
  },
  admin: {
    group: "Landing"
  },
  fields: [
    ...sectionIntroFields,
    {
      name: "items",
      type: "array",
      minRows: 1,
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
