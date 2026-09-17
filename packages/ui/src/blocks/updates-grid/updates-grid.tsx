import { ContentTile } from "../../components/molecules/content-tile"
import type { UpdatesGridProps } from "./updates-grid.types"

export function UpdatesGrid({ items, title }: UpdatesGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-6 flex items-end gap-2">
        <h2 className="rounded-lg bg-primary px-4 py-2 font-heading text-lg font-semibold text-primary-foreground">
          {title}
        </h2>
        <span className="size-4 rounded-full bg-primary" />
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item, index) => (
          <ContentTile
            key={`${item.title}-${index}`}
            className="bg-[oklch(0.96_0.012_95)] p-6"
            description={item.body}
            href={item.href}
            title={item.title}
          />
        ))}
      </div>
    </section>
  )
}
