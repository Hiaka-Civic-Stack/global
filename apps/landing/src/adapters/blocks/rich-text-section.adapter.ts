import type { RichTextSectionProps } from "@hiaka/ui"

import type { RichTextSectionBlock } from "@/payload-types"
import { toSectionIntro } from "./shared"

export function adaptRichTextSectionBlock(block: RichTextSectionBlock): RichTextSectionProps {
  return {
    intro: toSectionIntro(block),
    items: block.items?.map((item) => item.body) ?? []
  }
}
