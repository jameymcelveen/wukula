import { Check, Phone } from "lucide-react"
import { SHOP, type Department } from "@/lib/catalog"

export function DepartmentCard({ department }: { department: Department }) {
  return (
    <article className="flex flex-col rounded-lg border border-hairline bg-card p-6 shadow-warm sm:p-8">
      <div className="flex items-center gap-3">
        <span className="rounded-full border border-brass px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brass small-caps">
          {department.label}
        </span>
        <span className="h-px flex-1 bg-hairline" aria-hidden="true" />
      </div>

      <h3 className="mt-4 font-serif text-2xl leading-tight tracking-tight text-ink text-balance">
        {department.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-soft-ink">{department.blurb}</p>

      <ul className="mt-5 grid gap-2.5 border-t border-hairline pt-5 sm:grid-cols-2">
        {department.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brass" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>

      <a
        href={SHOP.phoneHref}
        className="focus-ring mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-brass bg-background px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-secondary"
      >
        <Phone className="h-4 w-4 text-brass" aria-hidden="true" />
        Ask what&apos;s in
      </a>
    </article>
  )
}
