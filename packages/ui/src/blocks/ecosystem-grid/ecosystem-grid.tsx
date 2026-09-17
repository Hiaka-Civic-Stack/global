import { SectionIntro } from "../../components/molecules/section-intro"
import type { EcosystemGridProps } from "./ecosystem-grid.types"

export function EcosystemGrid({ intro, items }: EcosystemGridProps) {
  return (
    <section className="bg-[oklch(0.96_0.018_170)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[0.85fr_1.15fr]">
        <SectionIntro {...intro} fallbackEyebrow="Ecosystem" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {items.map((item, index) => (
            <div key={`${item.label}-${index}`} className="rounded-lg bg-background px-4 py-5 text-sm font-semibold shadow-sm">
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
