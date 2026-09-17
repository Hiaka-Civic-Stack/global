import type { LayeredModelProps } from "@hiaka/ui"

import type { LayeredModelBlock } from "@/payload-types"
import { toOptionalText, toSectionIntro } from "./shared"

export function adaptLayeredModelBlock(block: LayeredModelBlock): LayeredModelProps {
  return {
    anchor: toOptionalText(block.anchor),
    intro: toSectionIntro(block),
    layers:
      block.layers?.map((layer) => ({
        description: toOptionalText(layer.description),
        name: layer.name
      })) ?? []
  }
}
