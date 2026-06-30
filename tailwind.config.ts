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
        "green-main": "#4A6B3A",
        "green-dark": "#2E3A22",
        "green-light": "#5a7d48",
        cream: "#F6F2E9",
        gold: "#C9A24B",
        text: "#2A2A2A",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        script: ["Great Vibes", "cursive"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
