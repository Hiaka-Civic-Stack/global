import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { MissingPage, PageFrame } from "@/components/site/PageFrame"
import { getPageBySlug } from "@/lib/pages"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  return {
    title: page?.meta?.title || page?.title || "Hiaka Civic Stack",
    description: page?.meta?.description || page?.summary
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params

  if (slug === "admin" || slug === "api" || slug === "preview") {
    notFound()
  }

  const page = await getPageBySlug(slug)

  if (!page) {
    return <MissingPage slug={slug} />
  }

  return <PageFrame page={page} />
}
