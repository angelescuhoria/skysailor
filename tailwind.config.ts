import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        light_red: "#FF6B6B",
        crimson: "#D80032",
        green: "#2ed573",
        white: "#EDF2F4",
        raisin_black: "#0f1010",
        hamburger_menu: "#161616",
      },
    },
  },
  plugins: [],
};
export default config;