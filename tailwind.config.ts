import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#4A6B3A",
          dark: "#2E3A22",
          light: "#5a7d48",
          cream: "#F6F2E9",
          gold: "#C9A24B",
          text: "#2A2A2A",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        script: ["var(--font-great-vibes)", "cursive"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
