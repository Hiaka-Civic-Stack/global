import { ContentTile } from "../../components/molecules/content-tile"
import { SectionIntro } from "../../components/molecules/section-intro"
import type { ModuleExplorerProps } from "./module-explorer.types"

export function ModuleExplorer({ anchor, intro, modules, previewLabel }: ModuleExplorerProps) {
  return (
    <section id={anchor} className="bg-[oklch(0.96_0.018_95)]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="rounded-lg bg-[oklch(0.985_0.006_95)] p-5">
            {previewLabel ? <span className="text-xs font-semibold text-primary">{previewLabel}</span> : null}
            <div className="mt-5 grid gap-3">
              {modules.map((module, index) => (
                <ContentTile
                  key={`${module.name}-${index}`}
                  description={module.description}
                  title={module.name}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <SectionIntro {...intro} fallbackEyebrow="Modules" />
        </div>
      </div>
    </section>
  )
}
