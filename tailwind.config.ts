import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          bg: "#FAF9F5",
          outer: "#EBEAE8",
          dark: "#0F0F11",
          subtle: "#F4F3EE",
        },
        accent: {
          lime: "#EAF76A",
          limeLight: "#F3FAC4",
          limeDark: "#D2E246",
        },
        vora: {
          black: "#0F0F11",
          dark: "#1A1A1A",
          muted: "#767571",
          border: "rgba(0, 0, 0, 0.07)",
          card: "#FAF9F5",
          cardYellow: "#F3F7D3",
        },
      },
      fontFamily: {
        sans: ["var(--font-satoshi)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        display: ["var(--font-satoshi)", "Inter", "sans-serif"],
      },
      borderRadius: {
        "3xl": "24px",
        "4xl": "32px",
        "5xl": "40px",
      },
      boxShadow: {
        canvas: "0 25px 80px rgba(0,0,0,0.06)",
        card: "0 10px 40px rgba(0,0,0,0.04)",
        pill: "0 2px 10px rgba(0,0,0,0.04)",
        float: "0 20px 40px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
