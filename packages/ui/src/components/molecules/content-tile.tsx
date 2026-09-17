import * as React from "react"

import { cn } from "../../lib/utils"
import { NumberMarker } from "../atoms/number-marker"
import { Heading, Lead } from "../atoms/typography"

type ContentTileProps = React.ComponentProps<"div"> & {
  description?: string
  href?: string
  marker?: number | string
  title: string
}

function ContentTile({
  className,
  description,
  href,
  marker,
  title,
  ...props
}: ContentTileProps) {
  return (
    <div
      data-slot="content-tile"
      className={cn("rounded-lg bg-white p-5 shadow-sm", className)}
      {...props}
    >
      {marker ? <NumberMarker className="mb-4" value={marker} /> : null}
      <Heading as="h3" size="card">
        {title}
      </Heading>
      {description ? <Lead className="mt-2 text-sm leading-6">{description}</Lead> : null}
      {href ? (
        <a href={href} className="mt-5 inline-block text-sm font-semibold text-primary hover:underline">
          Open
        </a>
      ) : null}
    </div>
  )
}

export { ContentTile }
