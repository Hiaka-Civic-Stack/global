import type { SectionIntroContent } from "../shared"

export type EcosystemGridItem = {
  label: string
}

export type EcosystemGridProps = {
  intro: SectionIntroContent
  items: EcosystemGridItem[]
}
