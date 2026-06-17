import Link from "next/link"
import { MapPin, Phone } from "lucide-react"
import { SHOP } from "@/lib/catalog"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hairline bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <span className="block font-serif text-xl tracking-tight text-ink">Wukela&apos;s</span>
          <span className="block text-[11px] uppercase tracking-[0.22em] text-brass small-caps">
            House of Clocks
          </span>
          <p className="mt-3 max-w-xs font-serif text-base italic text-soft-ink">
            {SHOP.tagline}
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brass small-caps">
            Visit
          </h2>
          <address className="mt-3 space-y-2 text-sm not-italic text-soft-ink">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
              {SHOP.address}
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
              <a href={SHOP.phoneHref} className="focus-ring rounded-sm hover:text-ink">
                {SHOP.phoneDisplay}
              </a>
            </p>
            <p>Monday to Saturday, call for hours.</p>
          </address>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-brass small-caps">
            Explore
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-soft-ink">
            <li>
              <Link href="/" className="focus-ring rounded-sm hover:text-ink">
                Home
              </Link>
            </li>
            <li>
              <Link href="/catalog" className="focus-ring rounded-sm hover:text-ink">
                Catalog
              </Link>
            </li>
            <li>
              <Link href="/#repair" className="focus-ring rounded-sm hover:text-ink">
                Clock Repair
              </Link>
            </li>
            <li>
              <Link href="/#visit" className="focus-ring rounded-sm hover:text-ink">
                Visit the shop
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-5 text-xs text-soft-ink sm:px-6">
          <p>
            &copy; {year} {SHOP.fullName}. Established {SHOP.established}.
          </p>
          <p>Prices and availability subject to change. Please call to confirm.</p>
        </div>
      </div>
    </footer>
  )
}
