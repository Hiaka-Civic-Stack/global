import type { JourneyProps } from "@hiaka/ui"

import type { JourneyBlock } from "@/payload-types"
import { toOptionalText, toSectionIntro } from "./shared"

export function adaptJourneyBlock(block: JourneyBlock): JourneyProps {
  return {
    anchor: toOptionalText(block.anchor),
    intro: toSectionIntro(block),
    steps: block.steps?.map((step) => ({ label: step.label })) ?? []
  }
}
