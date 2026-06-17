import { Clock, Wrench, Gift, TreePine } from "lucide-react"

const DEPARTMENTS = [
  {
    icon: Clock,
    title: "Clocks",
    line: "Wall, mantel, and grandfather clocks from trusted makers.",
  },
  {
    icon: Wrench,
    title: "Clock Repair",
    line: "Family repairs in-house, with house calls available.",
  },
  {
    icon: Gift,
    title: "Home & Gifts",
    line: "Lamps, jewelry, scarves, and gifts for every occasion.",
  },
  {
    icon: TreePine,
    title: "Christmas",
    line: "A full Christmas department, open all year round.",
  },
]

export function DepartmentStrip() {
  return (
    <section className="border-b border-hairline bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="text-center">
          <h2 className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
            Four stores in <span className="italic text-brass">one</span>
          </h2>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {DEPARTMENTS.map((d) => (
            <div key={d.title} className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brass bg-card">
                <d.icon className="h-5 w-5 text-brass" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-xl tracking-tight text-ink">{d.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-soft-ink">{d.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
