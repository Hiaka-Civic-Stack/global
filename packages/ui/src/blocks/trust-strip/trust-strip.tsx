import type { TrustStripProps } from "./trust-strip.types"

export function TrustStrip({ items }: TrustStripProps) {
  if (!items.length) {
    return null
  }

  return (
    <section className="border-y bg-[oklch(0.97_0.012_170)]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-6 py-6 text-sm font-medium text-foreground sm:grid-cols-3 md:grid-cols-6">
        {items.map((item, index) => (
          <div key={`${item.label}-${index}`} className="rounded-full bg-background px-4 py-2 text-center shadow-sm">
            {item.label}
          </div>
        ))}
      </div>
    </section>
  )
}
