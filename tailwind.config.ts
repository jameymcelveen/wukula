import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        secondary: "var(--secondary)",
        card: "var(--card)",
        ink: "var(--ink)",
        "soft-ink": "var(--soft-ink)",
        brass: "var(--brass)",
        "brass-bright": "var(--brass-bright)",
        hairline: "var(--hairline)",
        oxblood: "var(--oxblood)",
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
      },
      boxShadow: {
        warm: "0 2px 4px rgba(34, 26, 18, 0.04), 0 8px 24px rgba(34, 26, 18, 0.06)",
        "warm-lg": "0 4px 8px rgba(34, 26, 18, 0.05), 0 16px 40px rgba(34, 26, 18, 0.09)",
      },
    },
  },
  plugins: [],
}

export default config
