"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, Phone, X } from "lucide-react"
import { SHOP } from "@/lib/catalog"
import { cn } from "@/lib/utils"

const NAV = [
  { label: "Home", href: "/" },
  { label: "Catalog", href: "/catalog" },
  { label: "Repair", href: "/#repair" },
  { label: "Visit", href: "/#visit" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="focus-ring rounded-sm" aria-label="Wukela's House of Clocks, home">
          <span className="block font-serif text-lg leading-none tracking-tight text-ink sm:text-xl">
            Wukela&apos;s
          </span>
          <span className="block text-[11px] uppercase tracking-[0.22em] text-brass small-caps">
            House of Clocks
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="focus-ring rounded-sm text-sm font-medium text-soft-ink transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SHOP.phoneHref}
            className="focus-ring hidden items-center gap-2 rounded-full border border-brass bg-card px-4 py-2 text-sm font-semibold text-ink shadow-warm transition-colors hover:bg-secondary sm:inline-flex"
          >
            <Phone className="h-4 w-4 text-brass" aria-hidden="true" />
            {SHOP.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-card text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-t border-hairline bg-background md:hidden",
          open ? "max-h-96" : "max-h-0",
        )}
        style={{ transition: "max-height 0.3s ease" }}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded-md px-3 py-2.5 text-base font-medium text-soft-ink hover:bg-secondary hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SHOP.phoneHref}
            className="focus-ring mt-1 inline-flex items-center gap-2 rounded-md border border-brass px-3 py-2.5 text-base font-semibold text-ink"
          >
            <Phone className="h-4 w-4 text-brass" aria-hidden="true" />
            {SHOP.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  )
}
