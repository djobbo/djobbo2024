import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "resume-shadow":
          "radial-gradient(ellipse at bottom, var(--brand-gray-light), transparent 70%)",
        "button-gradient":
          "linear-gradient(0deg, #6C47FF 0%, #6C47FF 42%, #8661FF 58%, #8661FF 94%, #8F6FFF 96%, #8F6FFF 100%)",
      },
      colors: {
        brand: {
          white: "var(--brand-white)",
          "gray-lightest": "var(--brand-gray-lightest)",
          "gray-lighter": "var(--brand-gray-lighter)",
          "gray-light": "var(--brand-gray-light)",
          gray: "var(--brand-gray)",
          "gray-dark": "var(--brand-gray-dark)",
          accent: "var(--brand-accent)",
          "accent-dark": "var(--brand-accent-dark)",
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
