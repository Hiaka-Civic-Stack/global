import type { Metadata } from "next"

import { MissingPage, PageFrame } from "@/components/site/PageFrame"
import { getPageBySlug } from "@/lib/pages"

export const dynamic = "force-dynamic"

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageBySlug("home")

  return {
    title: page?.meta?.title || page?.title || "Hiaka Civic Stack",
    description:
      page?.meta?.description ||
      page?.summary ||
      "An open-source Civic Stack for transparent, inclusive and interoperable digital participation services."
  }
}

export default async function HomePage() {
  const page = await getPageBySlug("home")

  if (!page) {
    return <MissingPage slug="home" />
  }

  return <PageFrame page={page} />
}
