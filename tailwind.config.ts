import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#0A0D14",
          surface: "#0F1420",
          card: "#121826",
          border: "#1E293B",
          lime: "#B4F000",
          "lime-glow": "#C2F826",
          "lime-dim": "#8BC200",
        },
        brand: {
          orange: "#FF6B00",
          "orange-hover": "#E85D00",
          "orange-light": "#FFF3EB",
          lime: "#B4F000",
          "lime-glow": "#C2F826",
          "lime-light": "#E4FFA0",
          "lime-dim": "#8BC200",
          dark: "#0A0D14",
          card: "#0F1420",
          border: "#1E293B",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-raleway, 'Raleway')",
          "'Raleway'",
          "var(--font-inter, 'Inter')",
          "'Inter'",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        raleway: [
          "var(--font-raleway, 'Raleway')",
          "'Raleway'",
          "var(--font-inter, 'Inter')",
          "'Inter'",
          "system-ui",
          "sans-serif",
        ],
        logo: [
          "'Bagel Fat One'",
          "var(--font-inter, 'Inter')",
          "'Inter'",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        tagline: [
          "var(--font-raleway, 'Raleway')",
          "'Raleway'",
          "var(--font-inter, 'Inter')",
          "'Inter'",
          "system-ui",
          "sans-serif",
        ],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-slow": "glow 4s ease-in-out infinite alternate",
        "float-slow": "float 5s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        glow: {
          "0%": { opacity: "0.4", transform: "scale(0.98)" },
          "100%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
