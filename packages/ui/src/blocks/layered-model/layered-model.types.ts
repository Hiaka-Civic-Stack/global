import type { SectionIntroContent } from "../shared"

export type LayeredModelLayer = {
  description?: string
  name: string
}

export type LayeredModelProps = {
  anchor?: string
  intro: SectionIntroContent
  layers: LayeredModelLayer[]
}
