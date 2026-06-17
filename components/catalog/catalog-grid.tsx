"use client"

import { useState } from "react"
import { CATEGORIES, PRODUCTS, DEPARTMENTS } from "@/lib/catalog"
import { ProductCard } from "@/components/product-card"
import { DepartmentCard } from "@/components/department-card"
import { cn } from "@/lib/utils"

type Category = (typeof CATEGORIES)[number]

export function CatalogGrid() {
  const [active, setActive] = useState<Category>("All")

  const showProducts =
    active === "All" || active === "Wall Clocks" || active === "Antique & Refurbished"
  const visibleProducts = PRODUCTS.filter(
    (p) => active === "All" || p.category === active,
  )

  const visibleDepartments = DEPARTMENTS.filter(
    (d) => active === "All" || d.category === active,
  )

  return (
    <div>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter catalog by category">
        {CATEGORIES.map((cat) => {
          const isActive = cat === active
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={isActive}
              className={cn(
                "focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "border-ink bg-ink text-card"
                  : "border-hairline bg-card text-soft-ink hover:border-brass hover:text-ink",
              )}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Clocks grid */}
      {showProducts && visibleProducts.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Department cards */}
      {visibleDepartments.length > 0 && (
        <div
          className={cn(
            "grid gap-6 lg:grid-cols-2",
            showProducts && visibleProducts.length > 0 ? "mt-6" : "mt-8",
          )}
        >
          {visibleDepartments.map((department) => (
            <DepartmentCard key={department.id} department={department} />
          ))}
        </div>
      )}
    </div>
  )
}
