import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      boxShadow: {
        lightModeShadow: "0px 0px 10px 0 rgba(185, 185, 204, 1)",
        darkModeShadow: "0px 0px 20px 0 rgba(50, 50, 54, 1)",
        insetShadow: "inset 0px 0px 5px 0px rgba(176, 176, 187, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
