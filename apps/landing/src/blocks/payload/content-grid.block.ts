import type { Block } from "payload"

import { sectionIntroFields } from "../fields"

export const ContentGridBlock: Block = {
  slug: "contentGrid",
  interfaceName: "ContentGridBlock",
  labels: {
    singular: "Content grid",
    plural: "Content grids"
  },
  admin: {
    group: "Editorial"
  },
  fields: [
    ...sectionIntroFields,
    {
      name: "variant",
      type: "select",
      defaultValue: "cards",
      options: [
        {
          label: "Cards",
          value: "cards"
        },
        {
          label: "Index",
          value: "index"
        }
      ]
    },
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
          name: "href",
          type: "text"
        },
        {
          name: "label",
          type: "text",
          admin: {
            description: "Optional compact marker shown before the item title."
          }
        }
      ]
    }
  ]
}
