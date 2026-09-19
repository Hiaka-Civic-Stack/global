import {
  CalloutBand,
  ContentGrid,
  EcosystemGrid,
  HeroSection,
  Journey,
  LayeredModel,
  ModuleExplorer,
  PageHero,
  PrinciplesGrid,
  RichTextSection,
  StatementBand,
  TrustStrip,
  UpdatesGrid
} from "@hiaka/ui"

import { adaptCalloutBandBlock } from "@/adapters/blocks/callout-band.adapter"
import { adaptContentGridBlock } from "@/adapters/blocks/content-grid.adapter"
import { adaptEcosystemGridBlock } from "@/adapters/blocks/ecosystem-grid.adapter"
import { adaptHeroBlock } from "@/adapters/blocks/hero.adapter"
import { adaptJourneyBlock } from "@/adapters/blocks/journey.adapter"
import { adaptLayeredModelBlock } from "@/adapters/blocks/layered-model.adapter"
import { adaptModuleExplorerBlock } from "@/adapters/blocks/module-explorer.adapter"
import { adaptPageHeroBlock } from "@/adapters/blocks/page-hero.adapter"
import { adaptPrinciplesGridBlock } from "@/adapters/blocks/principles-grid.adapter"
import { adaptRichTextSectionBlock } from "@/adapters/blocks/rich-text-section.adapter"
import { adaptStatementBandBlock } from "@/adapters/blocks/statement-band.adapter"
import { adaptTrustStripBlock } from "@/adapters/blocks/trust-strip.adapter"
import { adaptUpdatesGridBlock } from "@/adapters/blocks/updates-grid.adapter"
import type { LandingBlock } from "@/lib/pages"

type BlocksProps = {
  blocks?: LandingBlock[] | null
}

function UnsupportedBlock({ block }: { block: LandingBlock }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="rounded-md border border-dashed p-4 text-sm text-muted-foreground">
        Unsupported block: {block.blockType || "unknown"}
      </div>
    </section>
  )
}

export function BlockRenderer({ blocks }: BlocksProps) {
  return (
    <>
      {blocks?.map((block, index) => {
        const key = `${block.blockType || "block"}-${index}`

        switch (block.blockType) {
          case "pageHero":
            return <PageHero key={key} {...adaptPageHeroBlock(block)} />
          case "richTextSection":
            return <RichTextSection key={key} {...adaptRichTextSectionBlock(block)} />
          case "contentGrid":
            return <ContentGrid key={key} {...adaptContentGridBlock(block)} />
          case "calloutBand":
            return <CalloutBand key={key} {...adaptCalloutBandBlock(block)} />
          case "hero":
            return <HeroSection key={key} {...adaptHeroBlock(block)} />
          case "trustStrip":
            return <TrustStrip key={key} {...adaptTrustStripBlock(block)} />
          case "layeredModel":
            return <LayeredModel key={key} {...adaptLayeredModelBlock(block)} />
          case "moduleExplorer":
            return <ModuleExplorer key={key} {...adaptModuleExplorerBlock(block)} />
          case "statementBand":
            return <StatementBand key={key} {...adaptStatementBandBlock(block)} />
          case "journey":
            return <Journey key={key} {...adaptJourneyBlock(block)} />
          case "principlesGrid":
            return <PrinciplesGrid key={key} {...adaptPrinciplesGridBlock(block)} />
          case "ecosystemGrid":
            return <EcosystemGrid key={key} {...adaptEcosystemGridBlock(block)} />
          case "updatesGrid":
            return <UpdatesGrid key={key} {...adaptUpdatesGridBlock(block)} />
          default:
            return <UnsupportedBlock key={key} block={block} />
        }
      })}
    </>
  )
}
