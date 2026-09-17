import type { UpdatesGridProps } from "@hiaka/ui"

import type { UpdatesGridBlock } from "@/payload-types"
import { toOptionalText } from "./shared"

export function adaptUpdatesGridBlock(block: UpdatesGridBlock): UpdatesGridProps {
  return {
    items:
      block.items?.map((item) => ({
        body: toOptionalText(item.body),
        href: toOptionalText(item.href),
        title: item.title
      })) ?? [],
    title: block.title
  }
}
