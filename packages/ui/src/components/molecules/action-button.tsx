import * as React from "react"

import { Button } from "../atoms/button"

type ActionLink = {
  href?: string
  label?: string
}

type ActionButtonProps = {
  className?: React.ComponentProps<typeof Button>["className"]
  link?: ActionLink
  size?: React.ComponentProps<typeof Button>["size"]
  variant?: React.ComponentProps<typeof Button>["variant"]
}

function hasLink(link?: ActionLink) {
  return Boolean(link?.href && link?.label)
}

function ActionButton({ className, link, size, variant = "default" }: ActionButtonProps) {
  if (!hasLink(link)) {
    return null
  }

  return (
    <Button asChild className={className} size={size} variant={variant}>
      <a href={link?.href}>{link?.label}</a>
    </Button>
  )
}

export { ActionButton }
export type { ActionLink }
