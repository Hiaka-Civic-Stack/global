import type { ModuleExplorerProps } from "@hiaka/ui"

import type { ModuleExplorerBlock } from "@/payload-types"
import { toOptionalText, toSectionIntro } from "./shared"

export function adaptModuleExplorerBlock(block: ModuleExplorerBlock): ModuleExplorerProps {
  return {
    anchor: toOptionalText(block.anchor),
    intro: toSectionIntro(block),
    modules:
      block.modules?.map((module) => ({
        description: toOptionalText(module.description),
        name: module.name
      })) ?? [],
    previewLabel: toOptionalText(block.previewLabel)
  }
}
