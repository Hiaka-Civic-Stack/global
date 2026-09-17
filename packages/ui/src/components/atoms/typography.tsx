import * as React from "react"

import { cn } from "../../lib/utils"

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: "h1" | "h2" | "h3"
  size?: "hero" | "section" | "card"
}

function Eyebrow({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="eyebrow"
      className={cn("text-sm font-semibold text-primary", className)}
      {...props}
    />
  )
}

function Heading({
  as: Comp = "h2",
  className,
  size = "section",
  ...props
}: HeadingProps) {
  return (
    <Comp
      data-slot="heading"
      className={cn(
        "text-balance font-heading font-semibold text-foreground",
        size === "hero" && "text-6xl leading-[0.95] md:text-8xl",
        size === "section" && "text-4xl md:text-5xl",
        size === "card" && "text-xl",
        className
      )}
      {...props}
    />
  )
}

function Lead({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="lead"
      className={cn("text-pretty leading-8 text-muted-foreground", className)}
      {...props}
    />
  )
}

export { Eyebrow, Heading, Lead }
