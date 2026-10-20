import type { Config } from "tailwindcss";

const config: Config = {
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
        mono: ["'JetBrains Mono'", "var(--font-geist-mono)", "monospace"],
      },
      colors: {
        obsidian: "#050811",
        cyber: "#00f2fe",
      },
    },
  },
  plugins: [],
};
export default config;