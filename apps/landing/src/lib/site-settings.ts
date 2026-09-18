import config from "@payload-config"
import { getPayload } from "payload"

import type { SiteSetting } from "@/payload-types"

export type SiteSettings = SiteSetting

export async function getSiteSettings(): Promise<SiteSettings> {
  const payload = await getPayload({ config })

  return payload.findGlobal({
    slug: "site-settings",
    depth: 1
  })
}
