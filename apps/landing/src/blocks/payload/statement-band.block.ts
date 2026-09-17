import type { Block } from "payload"

export const StatementBandBlock: Block = {
  slug: "statementBand",
  interfaceName: "StatementBandBlock",
  labels: {
    singular: "Statement band",
    plural: "Statement bands"
  },
  admin: {
    group: "Landing"
  },
  fields: [
    {
      name: "statement",
      type: "textarea",
      required: true
    }
  ]
}
