import type { Block } from "payload"

import { sectionIntroFields } from "../fields"

export const RichTextSectionBlock: Block = {
  slug: "richTextSection",
  interfaceName: "RichTextSectionBlock",
  labels: {
    singular: "Rich text section",
    plural: "Rich text sections"
  },
  admin: {
    group: "Editorial"
  },
  fields: [
    ...sectionIntroFields,
    {
      name: "items",
      type: "array",
      minRows: 1,
      fields: [
        {
          name: "body",
          type: "textarea",
          required: true
        }
      ]
    }
  ]
}
