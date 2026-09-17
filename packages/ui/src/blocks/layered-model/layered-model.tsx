import { ContentTile } from "../../components/molecules/content-tile"
import { SectionIntro } from "../../components/molecules/section-intro"
import type { LayeredModelProps } from "./layered-model.types"

export function LayeredModel({ anchor, intro, layers }: LayeredModelProps) {
  return (
    <section id={anchor} className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.9fr_1.1fr]">
      <SectionIntro {...intro} fallbackEyebrow="Stack model" />
      <div className="grid gap-3">
        {layers.map((layer, index) => (
          <ContentTile
            key={`${layer.name}-${index}`}
            className="grid gap-4 md:grid-cols-[3rem_1fr]"
            description={layer.description}
            marker={index + 1}
            title={layer.name}
          />
        ))}
      </div>
    </section>
  )
}
