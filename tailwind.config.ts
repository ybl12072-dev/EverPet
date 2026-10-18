import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm memorial palette
        cream: "#FDF9F3",
        sand: "#F5EDE1",
        bark: "#2B2118",
        ember: "#C2703D",
        emberdark: "#9A5227",
        sage: "#7D8C6F",
      },
      fontFamily: {
        serif: ["Georgia", "ui-serif", "serif"],
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
