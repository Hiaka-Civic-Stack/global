import type { TextLink } from "../shared"

export type PrincipleItem = {
  body?: string
  link?: TextLink
  title: string
}

export type PrinciplesGridProps = {
  items: PrincipleItem[]
}
