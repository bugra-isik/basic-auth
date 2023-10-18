import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#181818",
        light: "#f2f2f2",
        theme1: "#11836c",
        theme2: "#e3f455",
        theme3: "#318c61",
      },
    },
  },
  plugins: [],
};
export default config;
