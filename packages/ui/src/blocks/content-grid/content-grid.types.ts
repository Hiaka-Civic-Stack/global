import type { SectionIntroContent } from "../shared"

export type ContentGridItem = {
  body?: string
  href?: string
  label?: string
  title: string
}

export type ContentGridProps = {
  intro?: SectionIntroContent
  items: ContentGridItem[]
  variant?: "cards" | "index"
}
