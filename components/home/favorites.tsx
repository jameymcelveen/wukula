import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PRODUCTS } from "@/lib/catalog"
import { ProductCard } from "@/components/product-card"

export function Favorites() {
  const featured = PRODUCTS.slice(0, 3)

  return (
    <section className="border-b border-hairline">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass small-caps">
              From the floor
            </p>
            <h2 className="mt-2 font-serif text-3xl tracking-tight text-ink sm:text-4xl">
              A few favorites
            </h2>
          </div>
          <Link
            href="/catalog"
            className="focus-ring group inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-ink hover:text-brass"
          >
            See the full catalog
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
