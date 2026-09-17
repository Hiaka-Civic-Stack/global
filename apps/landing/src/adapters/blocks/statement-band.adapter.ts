import type { StatementBandProps } from "@hiaka/ui"

import type { StatementBandBlock } from "@/payload-types"

export function adaptStatementBandBlock(block: StatementBandBlock): StatementBandProps {
  return {
    statement: block.statement
  }
}
