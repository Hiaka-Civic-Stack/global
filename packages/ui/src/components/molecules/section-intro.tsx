import * as React from "react"

import { cn } from "../../lib/utils"
import { Eyebrow, Heading, Lead } from "../atoms/typography"

type SectionIntroProps = React.ComponentProps<"div"> & {
  body?: string
  eyebrow?: string
  fallbackEyebrow: string
  title?: string
}

function SectionIntro({
  body,
  className,
  eyebrow,
  fallbackEyebrow,
  title,
  ...props
}: SectionIntroProps) {
  return (
    <div data-slot="section-intro" className={cn("max-w-xl", className)} {...props}>
      <Eyebrow>{eyebrow || fallbackEyebrow}</Eyebrow>
      {title ? (
        <Heading className="mt-3" size="section">
          {title}
        </Heading>
      ) : null}
      {body ? <Lead className="mt-5">{body}</Lead> : null}
    </div>
  )
}

export { SectionIntro }
