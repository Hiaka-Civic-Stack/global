import { ActionButton } from "../../components/molecules/action-button"
import { Badge } from "../../components/atoms/badge"
import { Heading, Lead } from "../../components/atoms/typography"
import type { PageHeroProps } from "./page-hero.types"

export function PageHero({ actions, body, eyebrow, title }: PageHeroProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-12 pt-12 md:pb-16 md:pt-20">
      <div className="max-w-4xl">
        {eyebrow ? <Badge variant="secondary">{eyebrow}</Badge> : null}
        <Heading as="h1" className="mt-6" size="hero">
          {title}
        </Heading>
        {body ? <Lead className="mt-7 max-w-3xl text-lg">{body}</Lead> : null}
        {actions?.length ? (
          <div className="mt-9 flex flex-wrap gap-3">
            {actions.map((action, index) => (
              <ActionButton
                key={`${action.label}-${action.href}`}
                link={action}
                variant={index === 0 ? "default" : "outline"}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
