export type HeroAction = {
  href: string
  label: string
  variant?: "primary" | "secondary"
}

export type HeroAsideItem = {
  label: string
}

export type HeroAside = {
  items: HeroAsideItem[]
  label?: string
  title?: string
}

export type HeroSectionProps = {
  actions?: HeroAction[]
  aside?: HeroAside
  body: string
  eyebrow?: string
  title: string
}
