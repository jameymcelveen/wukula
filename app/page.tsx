import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Hero } from "@/components/home/hero"
import { DepartmentStrip } from "@/components/home/department-strip"
import { Favorites } from "@/components/home/favorites"
import { RepairSection } from "@/components/home/repair-section"
import { VisitSection } from "@/components/home/visit-section"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <DepartmentStrip />
        <Favorites />
        <RepairSection />
        <VisitSection />
      </main>
      <SiteFooter />
    </div>
  )
}
