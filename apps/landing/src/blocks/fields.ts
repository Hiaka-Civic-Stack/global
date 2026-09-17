import type { Block } from "payload"

export const linkFields = [
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
] satisfies NonNullable<Block["fields"]>

export const sectionIntroFields = [
  {
    name: "eyebrow",
    type: "text"
  },
  {
    name: "title",
    type: "text",
    required: true
  },
  {
    name: "body",
    type: "textarea"
  }
] satisfies NonNullable<Block["fields"]>
