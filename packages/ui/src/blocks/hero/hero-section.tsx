import { ActionButton } from "../../components/molecules/action-button"
import { Badge } from "../../components/atoms/badge"
import { Heading, Lead } from "../../components/atoms/typography"
import { NumberMarker } from "../../components/atoms/number-marker"
import type { HeroAction, HeroSectionProps } from "./hero-section.types"

function buttonVariant(action: HeroAction) {
  return action.variant === "secondary" ? "outline" : "default"
}

function HeroAside({ aside }: Pick<HeroSectionProps, "aside">) {
  if (!aside?.items.length) {
    return null
  }

  return (
    <aside className="rounded-lg bg-[oklch(0.94_0.035_170)] p-4 shadow-[0_24px_80px_rgba(15,78,70,0.12)]">
      <div className="rounded-lg bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between gap-4">
          {aside.title ? <span className="text-xs font-semibold text-primary">{aside.title}</span> : null}
          {aside.label ? (
            <span className="rounded-full bg-[oklch(0.9_0.06_85)] px-3 py-1 text-xs font-medium text-foreground">
              {aside.label}
            </span>
          ) : null}
        </div>
        <ol className="grid gap-2">
          {aside.items.map((item, index) => (
            <li
              key={`${item.label}-${index}`}
              className="flex items-center gap-3 rounded-lg bg-[oklch(0.98_0.008_95)] px-3 py-3 text-sm"
            >
              <NumberMarker className="size-7 text-xs" value={index + 1} />
              <span>{item.label}</span>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  )
}

export function HeroSection({ actions, aside, body, eyebrow, title }: HeroSectionProps) {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-16 pt-12 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-20">
      <div>
        {eyebrow ? <Badge variant="secondary">{eyebrow}</Badge> : null}
        <Heading as="h1" className="mt-6 max-w-4xl" size="hero">
          {title}
        </Heading>
        <Lead className="mt-7 max-w-2xl text-lg">{body}</Lead>
        {actions?.length ? (
          <div className="mt-9 flex flex-wrap gap-3">
            {actions.map((action) => (
              <ActionButton key={`${action.label}-${action.href}`} link={action} variant={buttonVariant(action)} />
            ))}
          </div>
        ) : null}
      </div>

      <HeroAside aside={aside} />
    </section>
  )
}
