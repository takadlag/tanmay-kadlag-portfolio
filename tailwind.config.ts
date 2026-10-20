import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["'Cinzel'", "'Cormorant Garamond'", "Georgia", "serif"],
        mono: ["'JetBrains Mono'", "var(--font-geist-mono)", "monospace"],
      },
      colors: {
        obsidian: {
          DEFAULT: "#050811",
          50: "#f8fafc",
          800: "#0f172a",
          900: "#0a0f1e",
          950: "#050811",
        },
        sacred: {
          gold: "#f59e0b",
          amber: "#d97706",
          saffron: "#f97316",
          bronze: "#b45309",
          ivory: "#fcfaf7",
          parchment: "#f4eee3",
          sand: "#e7decb",
        },
        cyber: {
          DEFAULT: "#00f2fe",
          cyan: "#00f2fe",
          teal: "#14b8a6",
          emerald: "#10b981",
        },
      },
      animation: {
        "spin-slow": "spin 30s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "prana-breath": "breath 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        breath: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
          "50%": { transform: "scale(1.08)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;