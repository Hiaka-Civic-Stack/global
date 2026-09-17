import type { Block } from "payload"

export const UpdatesGridBlock: Block = {
  slug: "updatesGrid",
  interfaceName: "UpdatesGridBlock",
  labels: {
    singular: "Updates grid",
    plural: "Updates grids"
  },
  admin: {
    group: "Landing"
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true
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
        }
      ]
    }
  ]
}
