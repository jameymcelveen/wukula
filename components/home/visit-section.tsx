import { MapPin, Phone, Clock3, ExternalLink } from "lucide-react"
import { SHOP } from "@/lib/catalog"

export function VisitSection() {
  return (
    <section id="visit" className="scroll-mt-20 border-b border-hairline">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div className="rounded-lg border border-hairline bg-card p-6 shadow-warm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass small-caps">
            Visit the shop
          </p>
          <dl className="mt-5 space-y-5">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brass" aria-hidden="true" />
              <div>
                <dt className="text-sm font-semibold text-ink">Address</dt>
                <dd className="text-sm text-soft-ink">{SHOP.address}</dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brass" aria-hidden="true" />
              <div>
                <dt className="text-sm font-semibold text-ink">Phone</dt>
                <dd className="text-sm text-soft-ink">
                  <a href={SHOP.phoneHref} className="focus-ring rounded-sm hover:text-ink">
                    {SHOP.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-brass" aria-hidden="true" />
              <div>
                <dt className="text-sm font-semibold text-ink">Hours</dt>
                <dd className="text-sm text-soft-ink">{SHOP.hours}</dd>
              </div>
            </div>
          </dl>
          <a
            href={SHOP.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-7 inline-flex items-center gap-2 rounded-full border border-brass bg-background px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-secondary"
          >
            Open in Google Maps
            <ExternalLink className="h-4 w-4 text-brass" aria-hidden="true" />
          </a>
        </div>

        <div>
          <h2 className="font-serif text-3xl tracking-tight text-ink text-balance sm:text-4xl">
            Since 1977, come in and{" "}
            <span className="italic text-brass">look around.</span>
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-soft-ink text-pretty">
            We are a browsing shop. Take your time, wind a clock, ask a question. There is no online
            checkout here, and that is on purpose: every clock is sold in person, so we can show you
            how it runs and make sure it is right for you.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-soft-ink text-pretty">
            Call ahead if you are making the drive. Inventory turns over, and hours shift around the
            holidays.
          </p>
        </div>
      </div>
    </section>
  )
}
