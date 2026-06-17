import type { Metadata } from "next"
import { Fraunces, Hanken_Grotesk } from "next/font/google"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
})

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Wukela's House of Clocks | Florence, SC since 1977",
  description:
    "A family-owned shop in Florence, South Carolina. Four stores in one: clocks, clock repair, home decor and gifts, and a year-round Christmas department. Quality merchandise at affordable prices.",
  keywords: [
    "clocks",
    "clock repair",
    "Howard Miller",
    "Hermle",
    "Florence SC",
    "grandfather clocks",
    "Christmas department",
  ],
  openGraph: {
    title: "Wukela's House of Clocks",
    description: "Time, kept beautifully. Florence, South Carolina, established 1977.",
    type: "website",
  },
}

export const viewport = {
  themeColor: "#f4efe3",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
