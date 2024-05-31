import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: "var(--brand-white)",
          "gray-lightest": "var(--brand-gray-lightest)",
          "gray-lighter": "var(--brand-gray-lighter)",
          "gray-light": "var(--brand-gray-light)",
          gray: "var(--brand-gray)",
          "gray-dark": "var(--brand-gray-dark)",
          accent: "var(--brand-accent)",
        },
        foreground: "var(--foreground)",
        "foreground-alt": "var(--foreground-alt)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
}
export default config
