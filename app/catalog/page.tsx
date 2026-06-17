import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CatalogGrid } from "@/components/catalog/catalog-grid"

export const metadata: Metadata = {
  title: "Catalog | Wukela's House of Clocks",
  description:
    "What's on the wall right now at Wukela's House of Clocks in Florence, SC. Howard Miller and Hermle wall clocks, refurbished antiques, home gifts, and a year-round Christmas department.",
}

export default function CatalogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-hairline">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            <header className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass small-caps">
                The catalog
              </p>
              <h1 className="mt-3 font-serif text-4xl leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl">
                What&apos;s on the wall <span className="italic text-brass">right now.</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-soft-ink text-pretty">
                Inventory turns over, so this is a snapshot, not a promise. Please call to confirm a
                piece is still here before you make the drive.
              </p>
            </header>

            <div className="mt-10">
              <CatalogGrid />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
