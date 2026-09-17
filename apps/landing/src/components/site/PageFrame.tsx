import { BlockRenderer } from "@/components/blocks/BlockRenderer"
import type { LandingPage } from "@/lib/pages"

type PageFrameProps = {
  page: LandingPage
}

export function PageFrame({ page }: PageFrameProps) {
  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" className="font-heading text-lg font-semibold">
          Hiaka
        </a>
        {page.navigation?.length ? (
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {page.navigation.map((item) => (
              <a key={`${item.label}-${item.href}`} href={item.href} className="transition-colors hover:text-foreground">
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <BlockRenderer blocks={page.layout} />

      <footer className="bg-[oklch(0.18_0.025_250)] px-6 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="font-heading text-2xl font-semibold">Hiaka</h2>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
              Open-source Civic Stack for transparent, inclusive and interoperable digital participation services.
            </p>
          </div>
          {page.navigation?.length ? (
            <div className="grid gap-3 text-sm sm:grid-cols-3">
              {page.navigation.slice(0, 6).map((item) => (
                <a key={`${item.label}-${item.href}`} href={item.href} className="text-white/75 hover:text-white">
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </footer>
    </main>
  )
}

export function MissingPage({ slug }: { slug: string }) {
  return (
    <main id="main-content" className="min-h-screen bg-background px-6 py-20 text-foreground">
      <section className="mx-auto max-w-3xl rounded-2xl border bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold text-primary">Payload page required</p>
        <h1 className="mt-3 font-heading text-4xl font-semibold">Create the “{slug}” page in Payload</h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          This route is ready, but its content should come from the Payload `pages` collection. Create a page with this
          slug, then compose its `layout` with blocks such as hero, trust strip, layered model and journey.
        </p>
        <a href="/admin" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">
          Open Payload admin
        </a>
      </section>
    </main>
  )
}
