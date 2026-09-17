import type { StatementBandProps } from "./statement-band.types"

export function StatementBand({ statement }: StatementBandProps) {
  return (
    <section className="bg-primary px-6 py-14 text-primary-foreground">
      <p className="mx-auto max-w-5xl text-center font-heading text-3xl font-semibold leading-tight md:text-5xl">
        {statement}
      </p>
    </section>
  )
}
