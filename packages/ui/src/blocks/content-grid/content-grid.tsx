import { ContentTile } from "../../components/molecules/content-tile"
import { SectionIntro } from "../../components/molecules/section-intro"
import { cn } from "../../lib/utils"
import type { ContentGridProps } from "./content-grid.types"

export function ContentGrid({ intro, items, variant = "cards" }: ContentGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {intro ? <SectionIntro {...intro} className="mb-8" fallbackEyebrow="Explore" /> : null}
      <div className={cn("grid gap-5", variant === "index" ? "md:grid-cols-2" : "md:grid-cols-3")}>
        {items.map((item, index) => (
          <ContentTile
            key={`${item.title}-${index}`}
            className={variant === "index" ? "bg-[oklch(0.96_0.012_95)] p-6" : undefined}
            description={item.body}
            href={item.href}
            marker={item.label}
            title={item.title}
          />
        ))}
      </div>
    </section>
  )
}
