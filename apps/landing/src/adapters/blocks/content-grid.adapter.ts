import type { ContentGridProps } from "@hiaka/ui"

import type { ContentGridBlock } from "@/payload-types"
import { toOptionalText, toSectionIntro } from "./shared"

export function adaptContentGridBlock(block: ContentGridBlock): ContentGridProps {
  return {
    intro: toSectionIntro(block),
    items:
      block.items?.map((item) => ({
        body: toOptionalText(item.body),
        href: toOptionalText(item.href),
        label: toOptionalText(item.label),
        title: item.title
      })) ?? [],
    variant: block.variant || "cards"
  }
}
