import * as React from "react"

import { cn } from "../../lib/utils"

type NumberMarkerProps = React.ComponentProps<"span"> & {
  value: number | string
}

function NumberMarker({ className, value, ...props }: NumberMarkerProps) {
  return (
    <span
      data-slot="number-marker"
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground",
        className
      )}
      {...props}
    >
      {value}
    </span>
  )
}

export { NumberMarker }
