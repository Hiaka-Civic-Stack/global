import { ContentTile } from "../../components/molecules/content-tile"
import { SectionIntro } from "../../components/molecules/section-intro"
import type { JourneyProps } from "./journey.types"

function formatMarker(index: number) {
  return String(index + 1).padStart(2, "0")
}

export function Journey({ anchor, intro, steps }: JourneyProps) {
  return (
    <section id={anchor} className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
        <SectionIntro {...intro} fallbackEyebrow="Blueprint" />
        <div className="grid gap-3 sm:grid-cols-2">
          {steps.map((step, index) => (
            <ContentTile key={`${step.label}-${index}`} marker={formatMarker(index)} title={step.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
