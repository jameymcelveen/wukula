import Link from "next/link"
import { AnalogClock } from "@/components/analog-clock"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-hairline">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass small-caps">
            Florence, South Carolina &middot; Established 1977
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] tracking-tight text-ink text-balance sm:text-6xl">
            Time, kept{" "}
            <span className="italic text-brass">beautifully.</span>
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-soft-ink text-pretty">
            A family-run shop with four stores under one roof: clocks, clock repair, home decor and
            gifts, and a year-round Christmas department.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/catalog"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-card shadow-warm transition-colors hover:bg-[#352a1c]"
            >
              Browse the catalog
            </Link>
            <Link
              href="/#visit"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-brass bg-card px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-secondary"
            >
              Plan a visit
            </Link>
          </div>

          <dl className="mt-9 grid gap-4 border-t border-hairline pt-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-brass small-caps">
                Sales &amp; Service
              </dt>
              <dd className="mt-1 text-sm text-soft-ink">Howard Miller, Hermle and more</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-brass small-caps">
                Repairs
              </dt>
              <dd className="mt-1 text-sm text-soft-ink">In-shop and house calls</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-brass small-caps">
                Open
              </dt>
              <dd className="mt-1 text-sm text-soft-ink">Mon to Sat, call for hours</dd>
            </div>
          </dl>
        </div>

        <div className="flex justify-center lg:justify-end">
          <AnalogClock />
        </div>
      </div>
    </section>
  )
}
