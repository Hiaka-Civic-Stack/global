import type { SectionIntroContent } from "../shared"

export type ModuleExplorerItem = {
  description?: string
  name: string
}

export type ModuleExplorerProps = {
  anchor?: string
  intro: SectionIntroContent
  modules: ModuleExplorerItem[]
  previewLabel?: string
}
