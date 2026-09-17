import type { PrinciplesGridProps } from "@hiaka/ui"

import type { PrinciplesGridBlock } from "@/payload-types"
import { toOptionalText } from "./shared"

export function adaptPrinciplesGridBlock(block: PrinciplesGridBlock): PrinciplesGridProps {
  return {
    items:
      block.items?.map((item) => ({
        body: toOptionalText(item.body),
        link: item.link?.href
          ? {
              href: item.link.href,
              label: item.link.label
            }
          : undefined,
        title: item.title
      })) ?? []
  }
}
