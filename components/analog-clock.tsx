"use client"

import { useEffect, useState } from "react"

export function AnalogClock() {
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    setTime(new Date())
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  // Until mounted, render a neutral 10:10 dial to avoid hydration mismatch.
  const hours = time ? time.getHours() % 12 : 10
  const minutes = time ? time.getMinutes() : 10
  const seconds = time ? time.getSeconds() : 0

  const secondDeg = seconds * 6
  const minuteDeg = minutes * 6 + seconds * 0.1
  const hourDeg = hours * 30 + minutes * 0.5

  // Hour tick marks
  const ticks = Array.from({ length: 12 }, (_, i) => i)

  return (
    <div className="flex flex-col items-center" aria-hidden="true">
      {/* Dial with brass bezel */}
      <div
        className="relative aspect-square w-[240px] rounded-full p-3 shadow-warm-lg sm:w-[300px]"
        style={{
          background: "linear-gradient(145deg, #d8bd6f, #9a7b2e 55%, #7c6224)",
        }}
      >
        {/* Inner bezel ring */}
        <div
          className="relative h-full w-full rounded-full p-2"
          style={{ background: "linear-gradient(145deg, #c2a14e, #8a6d28)" }}
        >
          {/* Parchment dial face */}
          <div
            className="relative h-full w-full rounded-full"
            style={{
              background: "radial-gradient(circle at 50% 42%, #fdfaf2, #f1e9d6)",
              boxShadow: "inset 0 2px 8px rgba(34,26,18,0.12)",
            }}
          >
            {/* Maker's mark */}
            <div className="absolute left-1/2 top-[18%] -translate-x-1/2 text-center">
              <span className="font-serif text-[10px] tracking-[0.2em] text-brass small-caps sm:text-xs">
                Wukela&apos;s
              </span>
            </div>

            {/* Hour ticks and numerals */}
            {ticks.map((i) => {
              const angle = i * 30
              return (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-[44%] w-[2px] origin-top"
                  style={{
                    transform: `translate(-50%, 0) rotate(${angle}deg)`,
                  }}
                >
                  <span
                    className="absolute left-1/2 top-0 h-2 w-[2px] -translate-x-1/2 rounded-full"
                    style={{ backgroundColor: i % 3 === 0 ? "#221a12" : "#9a7b2e" }}
                  />
                </div>
              )
            })}

            {/* Westminster label */}
            <div className="absolute left-1/2 top-[62%] -translate-x-1/2">
              <span className="font-serif text-[10px] italic text-soft-ink sm:text-xs">
                Westminster
              </span>
            </div>

            {/* Hour hand */}
            <div
              className="absolute bottom-1/2 left-1/2 origin-bottom rounded-full"
              style={{
                width: "5px",
                height: "26%",
                transform: `translateX(-50%) rotate(${hourDeg}deg)`,
                backgroundColor: "#3a2c1c",
                transition: time ? "transform 0.3s cubic-bezier(0.4,2,0.5,1)" : "none",
              }}
            />
            {/* Minute hand */}
            <div
              className="absolute bottom-1/2 left-1/2 origin-bottom rounded-full"
              style={{
                width: "3px",
                height: "36%",
                transform: `translateX(-50%) rotate(${minuteDeg}deg)`,
                backgroundColor: "#3a2c1c",
                transition: time ? "transform 0.3s cubic-bezier(0.4,2,0.5,1)" : "none",
              }}
            />
            {/* Second hand (oxblood) */}
            <div
              className="absolute bottom-1/2 left-1/2 origin-bottom rounded-full"
              style={{
                width: "1.5px",
                height: "40%",
                transform: `translateX(-50%) rotate(${secondDeg}deg)`,
                backgroundColor: "#9c3b2e",
                transition:
                  time && seconds !== 0 ? "transform 0.2s cubic-bezier(0.4,2,0.5,1)" : "none",
              }}
            />
            {/* Center cap */}
            <div
              className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: "linear-gradient(145deg, #c2a14e, #7c6224)" }}
            />
          </div>
        </div>
      </div>

      {/* Pendulum */}
      <div className="relative h-24 w-full sm:h-28">
        <div className="animate-pendulum absolute left-1/2 top-0 -translate-x-1/2">
          {/* Rod */}
          <div
            className="mx-auto w-[2px] origin-top"
            style={{ height: "72px", backgroundColor: "#9a7b2e" }}
          />
          {/* Bob */}
          <div
            className="mx-auto -mt-1 h-10 w-10 rounded-full shadow-warm sm:h-12 sm:w-12"
            style={{
              background: "radial-gradient(circle at 38% 35%, #d8bd6f, #9a7b2e 60%, #7c6224)",
            }}
          />
        </div>
      </div>
    </div>
  )
}
