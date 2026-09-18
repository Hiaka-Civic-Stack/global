import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { MissingPage, PageFrame } from "@/components/site/PageFrame"
import { getPageBySlug } from "@/lib/pages"
import { getSiteSettings } from "@/lib/site-settings"

type PageProps = {
  params: Promise<{
    slug: string[]
  }>
}

function resolveSlug(slug: string[]) {
  return slug.join("/")
}

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(resolveSlug(slug))

  return {
    title: page?.meta?.title || page?.title || "Hiaka Civic Stack",
    description: page?.meta?.description || page?.summary
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const pageSlug = resolveSlug(slug)
  const reservedSegment = slug[0]

  if (reservedSegment === "admin" || reservedSegment === "api" || reservedSegment === "preview") {
    notFound()
  }

  const [page, siteSettings] = await Promise.all([getPageBySlug(pageSlug), getSiteSettings()])

  if (!page) {
    return <MissingPage slug={pageSlug} />
  }

  return <PageFrame page={page} siteSettings={siteSettings} />
}
