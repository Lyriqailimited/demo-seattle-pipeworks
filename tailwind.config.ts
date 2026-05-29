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
        navy: {
          50: "#E8EDF4",
          100: "#C5D0E0",
          200: "#9EB1CA",
          300: "#7791B4",
          400: "#5A79A3",
          500: "#3D6192",
          600: "#2E4F7A",
          700: "#1C3555",
          800: "#142740",
          900: "#0D1B2A",
          950: "#070F18",
        },
        copper: {
          50: "#FDF5EE",
          100: "#F9E5D2",
          200: "#F2C9A1",
          300: "#E9A86B",
          400: "#D9904A",
          500: "#C87941",
          600: "#B06230",
          700: "#8F4E28",
          800: "#6E3C21",
          900: "#4D2B18",
        },
        earth: {
          100: "#F5F1EC",
          200: "#E8DFD4",
          300: "#D4C7B6",
          400: "#B8A48E",
          500: "#9C826B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "contour-drift": "contourDrift 20s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(32px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(200,121,65,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(200,121,65,0.6)" },
        },
        contourDrift: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 100%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
