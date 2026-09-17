import * as React from "react"

import { Button } from "../atoms/button"

type ActionLink = {
  href?: string
  label?: string
}

type ActionButtonProps = {
  link?: ActionLink
  variant?: React.ComponentProps<typeof Button>["variant"]
}

function hasLink(link?: ActionLink) {
  return Boolean(link?.href && link?.label)
}

function ActionButton({ link, variant = "default" }: ActionButtonProps) {
  if (!hasLink(link)) {
    return null
  }

  return (
    <Button asChild variant={variant}>
      <a href={link?.href}>{link?.label}</a>
    </Button>
  )
}

export { ActionButton }
export type { ActionLink }
