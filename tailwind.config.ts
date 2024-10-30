import fluid, { extract, fontSize } from "fluid-tailwind";
import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },
  theme: {
    extend: {
      fontFamily: {
        laila: "'Laila', serif",
        nunito: "'Nunito', serif;",
      },
      backgroundColor: {
        dark: "#0B040F",
      },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #9E18EB 0%, #4629EA 234.59%)",
        gradientFlip: "linear-gradient(180deg, #9E18EB 0%, #4629EA 234.59%)",
      },
      boxShadow: {
        nav: "0px 1px 20px -4px #9E18EB",
        howitwork: "0px 0px 33px -13px #BD6DEA",
      },
      colors: {
        primary: "#9E18EB",
        secondary: "#4629EA",
        warning: "#E81D20",
      },
      borderColor: {
        primary: "#9E18EB",
        secondary: "#4629EA",
        primaryLinted: "#493853",
        warning: "#E81D20",
      },
      screens: {
        sm: "14.375rem",

        md: "48rem",

        lg: "64rem",

        xl: "80rem",

        "2xl": "96rem",
      },
    },

    fontSize,
  },
  plugins: [fluid],
};
export default config;
