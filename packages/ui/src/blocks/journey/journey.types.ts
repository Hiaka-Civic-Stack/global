import type { SectionIntroContent } from "../shared"

export type JourneyStep = {
  label: string
}

export type JourneyProps = {
  anchor?: string
  intro: SectionIntroContent
  steps: JourneyStep[]
}
