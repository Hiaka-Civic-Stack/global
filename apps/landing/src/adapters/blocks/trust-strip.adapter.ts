import type { TrustStripProps } from "@hiaka/ui"

import type { TrustStripBlock } from "@/payload-types"

export function adaptTrustStripBlock(block: TrustStripBlock): TrustStripProps {
  return {
    items: block.items?.map((item) => ({ label: item.label })) ?? []
  }
}
