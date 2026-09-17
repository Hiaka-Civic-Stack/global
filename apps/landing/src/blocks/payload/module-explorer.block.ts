import type { Block } from "payload"

import { sectionIntroFields } from "../fields"

export const ModuleExplorerBlock: Block = {
  slug: "moduleExplorer",
  interfaceName: "ModuleExplorerBlock",
  labels: {
    singular: "Module explorer",
    plural: "Module explorers"
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
      name: "previewLabel",
      type: "text"
    },
    {
      name: "modules",
      type: "array",
      minRows: 1,
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
