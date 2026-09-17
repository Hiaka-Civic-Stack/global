import type { Block } from "payload"

import { sectionIntroFields } from "../fields"

export const JourneyBlock: Block = {
  slug: "journey",
  interfaceName: "JourneyBlock",
  labels: {
    singular: "Journey",
    plural: "Journeys"
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
      name: "steps",
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
