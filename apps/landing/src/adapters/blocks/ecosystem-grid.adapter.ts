import type { EcosystemGridProps } from "@hiaka/ui"

import type { EcosystemGridBlock } from "@/payload-types"
import { toSectionIntro } from "./shared"

export function adaptEcosystemGridBlock(block: EcosystemGridBlock): EcosystemGridProps {
  return {
    intro: toSectionIntro(block),
    items: block.items?.map((item) => ({ label: item.label })) ?? []
  }
}
