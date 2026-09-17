import type { HeroSectionProps } from "@hiaka/ui"

import type { HeroBlock } from "@/payload-types"
import { toOptionalText } from "./shared"

export function adaptHeroBlock(block: HeroBlock): HeroSectionProps {
  return {
    actions: [
      {
        href: block.primaryLink.href,
        label: block.primaryLink.label,
        variant: "primary"
      },
      {
        href: block.secondaryLink.href,
        label: block.secondaryLink.label,
        variant: "secondary"
      }
    ],
    aside: block.asideItems?.length
      ? {
          items: block.asideItems.map((item) => ({
            label: item.label
          })),
          label: toOptionalText(block.asideLabel),
          title: toOptionalText(block.asideTitle)
        }
      : undefined,
    body: block.body,
    eyebrow: toOptionalText(block.eyebrow),
    title: block.title
  }
}
