import type { SectionIntroContent } from "@hiaka/ui"

function optionalText(value?: string | null) {
  return value || undefined
}

export function toOptionalText(value?: string | null) {
  return optionalText(value)
}

export function toSectionIntro(input: {
  body?: string | null
  eyebrow?: string | null
  title: string
}): SectionIntroContent {
  return {
    body: optionalText(input.body),
    eyebrow: optionalText(input.eyebrow),
    title: input.title
  }
}
