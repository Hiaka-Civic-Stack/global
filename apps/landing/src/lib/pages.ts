import config from "@payload-config"
import { draftMode } from "next/headers"
import { getPayload } from "payload"

import type { Page } from "@/payload-types"

export type LandingPage = Page
export type LandingBlock = NonNullable<Page["layout"]>[number]

export async function getPageBySlug(slug: string): Promise<LandingPage | null> {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config })

  const page = await payload.find({
    collection: "pages",
    depth: 2,
    draft,
    limit: 1,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug
      }
    }
  })

  return page.docs[0] ?? null
}
