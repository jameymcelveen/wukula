import Image from "next/image"
import { Phone } from "lucide-react"
import { SHOP, formatPrice, type Product } from "@/lib/catalog"

export function ProductCard({ product }: { product: Product }) {
  const onSale = typeof product.originalPrice === "number"
  const tagIsSale = product.tag === "Special Sale"

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-hairline bg-card shadow-warm transition-shadow hover:shadow-warm-lg">
      {/* 4:5 portrait image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
        <span
          className={
            "absolute left-3 top-3 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide small-caps " +
            (tagIsSale ? "bg-oxblood text-card" : "bg-ink text-card")
          }
        >
          {product.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-brass small-caps">
          {product.brand}
        </span>
        <h3 className="mt-1 font-serif text-xl leading-snug tracking-tight text-ink text-balance">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-soft-ink">{product.description}</p>

        {/* Specs */}
        <dl className="mt-4 space-y-1.5 border-t border-hairline pt-4 text-sm">
          {product.specs.map((spec) => (
            <div key={spec.key} className="flex gap-2">
              <dt className="shrink-0 font-medium text-brass small-caps">{spec.key}:</dt>
              <dd className="text-soft-ink">{spec.value}</dd>
            </div>
          ))}
        </dl>

        {/* Price row */}
        <div className="mt-auto flex items-baseline gap-3 pt-5">
          <span className="font-serif text-2xl tracking-tight text-ink">
            {formatPrice(product.price)}
          </span>
          {onSale && (
            <span className="text-sm text-soft-ink line-through">
              {formatPrice(product.originalPrice as number)}
            </span>
          )}
        </div>

        <a
          href={SHOP.phoneHref}
          className="focus-ring mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-brass bg-background px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-secondary"
        >
          <Phone className="h-4 w-4 text-brass" aria-hidden="true" />
          Call about this clock
        </a>
      </div>
    </article>
  )
}
