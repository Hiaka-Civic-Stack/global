import type { GlobalConfig } from "payload"

const navigationFields: GlobalConfig["fields"] = [
  {
    name: "label",
    type: "text",
    required: true
  },
  {
    name: "href",
    type: "text",
    required: true
  }
]

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  access: {
    read: () => true
  },
  admin: {
    group: "Site"
  },
  fields: [
    {
      name: "siteName",
      type: "text",
      defaultValue: "Hiaka",
      required: true
    },
    {
      name: "footerSummary",
      type: "textarea",
      defaultValue: "Open-source Civic Stack for transparent, inclusive and interoperable digital participation services."
    },
    {
      name: "specsBaseUrl",
      type: "text",
      defaultValue: "http://localhost:3001",
      required: true,
      admin: {
        description: "Base URL for the Mintlify specifications portal. Use the local URL in development."
      }
    },
    {
      name: "headerNavigation",
      type: "array",
      fields: navigationFields
    },
    {
      name: "footerNavigation",
      type: "array",
      fields: navigationFields
    }
  ]
}
