import { Phone, Clock, Hammer, Sparkles, Home } from "lucide-react"
import { SHOP } from "@/lib/catalog"

const REPAIR_TYPES = [
  { icon: Clock, label: "Grandfather clocks" },
  { icon: Hammer, label: "Mantel & wall clocks" },
  { icon: Sparkles, label: "Antique restoration" },
  { icon: Home, label: "House calls" },
]

export function RepairSection() {
  return (
    <section id="repair" className="scroll-mt-20 border-b border-hairline bg-secondary">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass small-caps">
            Clock repair
          </p>
          <h2 className="mt-2 font-serif text-3xl tracking-tight text-ink text-balance sm:text-4xl">
            Repairs done in-house, by the family.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-soft-ink text-pretty">
            Grandfather, mantel, and wall clocks, plus antique restoration done with patience and
            care. If a clock is too large to move, we offer house calls and will come to you.
          </p>
          <a
            href={SHOP.phoneHref}
            className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-card shadow-warm transition-colors hover:bg-[#352a1c]"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call about a repair
          </a>
        </div>

        <div className="rounded-lg border border-hairline bg-card p-6 shadow-warm sm:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-brass small-caps">
            What we service
          </h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {REPAIR_TYPES.map((r) => (
              <li
                key={r.label}
                className="flex items-center gap-3 rounded-md border border-hairline bg-background px-4 py-3.5"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brass bg-card">
                  <r.icon className="h-4 w-4 text-brass" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium text-ink">{r.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
