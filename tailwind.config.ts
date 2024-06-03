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
        blue: {
          50: "#F8FAFC",
          100: "#EFF6FF",
          400: "#3B82F6",
        },
        green: {
          100: "#F0FDF9",
          400: "#15803D",
        },
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
        },
        gray: {
          100: "#E2E8F0",
          200: "#94A3B8",
          300: "#64748B",
          400: "#334155",
          700: "#374151",
          800: "#18181B",
          900: "#0F172A",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light ",
  },
};
export default config;
