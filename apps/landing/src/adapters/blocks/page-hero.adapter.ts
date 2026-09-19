import type { PageHeroProps } from "@hiaka/ui"

import type { PageHeroBlock } from "@/payload-types"
import { toOptionalText } from "./shared"

export function adaptPageHeroBlock(block: PageHeroBlock): PageHeroProps {
  return {
    actions:
      block.actions?.map((action) => ({
        href: action.href,
        label: action.label
      })) ?? [],
    body: toOptionalText(block.body),
    eyebrow: toOptionalText(block.eyebrow),
    title: block.title
  }
}
