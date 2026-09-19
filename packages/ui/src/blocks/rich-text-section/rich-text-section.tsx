import { SectionIntro } from "../../components/molecules/section-intro"
import type { RichTextSectionProps } from "./rich-text-section.types"

export function RichTextSection({ intro, items }: RichTextSectionProps) {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[0.8fr_1.2fr]">
      {intro ? <SectionIntro {...intro} fallbackEyebrow="Context" /> : <div />}
      <div className="grid gap-5 text-base leading-8 text-muted-foreground">
        {items.map((item, index) => (
          <p key={`${item.slice(0, 24)}-${index}`}>{item}</p>
        ))}
      </div>
    </section>
  )
}
