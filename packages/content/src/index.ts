export const siteConfig = {
  name: "Hiaka Civic Stack",
  description:
    "An open-source Civic Stack for transparent, inclusive and interoperable digital participation services.",
  links: {
    specs: "/docs",
    repository: "https://github.com/hiaka/hiaka-civic-stack"
  }
} as const

export const civicModel = [
  "Civic Blueprints",
  "Civic Patterns",
  "Civic Modules",
  "Shared Digital Services"
] as const

export { default as landingContentDesign } from "./landing-content-design.json"
