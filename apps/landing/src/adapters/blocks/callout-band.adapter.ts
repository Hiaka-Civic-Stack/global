import type { CalloutBandProps } from "@hiaka/ui"

import type { CalloutBandBlock } from "@/payload-types"
import { toOptionalText } from "./shared"

export function adaptCalloutBandBlock(block: CalloutBandBlock): CalloutBandProps {
  return {
    action:
      block.action?.href && block.action.label
        ? {
            href: block.action.href,
            label: block.action.label
          }
        : undefined,
    body: toOptionalText(block.body),
    title: block.title
  }
}
