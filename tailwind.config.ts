import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        tp: {
          ink: "#0f172a",
          mist: "#f8fafc",
          mint: "#d1fae5",
          haze: "#e2e8f0"
        }
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgba(15,23,42,.12)"
      }
    }
  },
  plugins: []
} satisfies Config;
