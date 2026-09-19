import { ActionButton } from "../../components/molecules/action-button"
import { Heading, Lead } from "../../components/atoms/typography"
import type { CalloutBandProps } from "./callout-band.types"

export function CalloutBand({ action, body, title }: CalloutBandProps) {
  return (
    <section className="bg-primary px-6 py-14 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <Heading as="h2" className="text-primary-foreground" size="section">
            {title}
          </Heading>
          {body ? <Lead className="mt-4 text-primary-foreground/75">{body}</Lead> : null}
        </div>
        {action ? (
          <ActionButton
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-primary shadow-xs transition-colors hover:bg-white/90"
            link={action}
          />
        ) : null}
      </div>
    </section>
  )
}
