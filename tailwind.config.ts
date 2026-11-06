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
        // Pure Obsidian & Deep Pitch Surfaces
        obsidian: {
          DEFAULT: "#000000",
          950: "#050505",
          900: "#0A0A0A",
          800: "#121212",
          700: "#1A1A1A",
          card: "#0D0D0D",
        },
        // Arwana Super Red — Imperial Crimson & Blood Red Spectrum (Primary Brand Color)
        champagne: {
          DEFAULT: "#D92338",      // Imperial Crimson Super Red
          light: "#FF4D61",        // Iridescent Scale Shimmer
          shimmer: "#FECDD3",      // Pale Ruby Tint
          dim: "#B91C1C",          // Deep Blood Red
          bronze: "#881337",       // Velvet Wine Crimson
          dark: "#4C0519",         // Deep Oxblood
        },
        // Titanium Silver & Cool Greys
        titanium: {
          DEFAULT: "#8E8E93",
          light: "#A1A1A6",
          dim: "#48484A",
          hairline: "rgba(255, 255, 255, 0.08)",
        },
        // Pearl & Whites
        pearl: {
          DEFAULT: "#FFFFFF",
          muted: "#EDEDED",
          dim: "#9E9E9E",
        },
        // Arwana Super Red explicit tokens
        arwana: {
          DEFAULT: "#D92338",
          glow: "#FF4D61",
          light: "#F43F5E",
          dim: "#B91C1C",
          dark: "#881337",
        },
        crimson: {
          DEFAULT: "#D92338",
          glow: "#FF4D61",
          light: "#FECDD3",
          dim: "#B91C1C",
          dark: "#881337",
        },

        // Aliases to seamlessly elevate all legacy references
        navy: {
          DEFAULT: "#050505",
          secondary: "#0D0D0D",
          light: "#141414",
          card: "#0E0E0E",
        },
        gold: {
          DEFAULT: "#D92338",
          light: "#FF4D61",
          dim: "#B91C1C",
          muted: "#881337",
        },
        ivory: {
          DEFAULT: "#FFFFFF",
          muted: "#A1A1A6",
          dim: "#71717A",
        },
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "navy-gradient": "linear-gradient(180deg, #050505 0%, #0D0D0D 100%)",
        "gold-gradient": "linear-gradient(135deg, #FFFFFF 0%, #FF4D61 50%, #B91C1C 100%)",
        "champagne-gradient": "linear-gradient(135deg, #FFFFFF 0%, #FF4D61 40%, #B91C1C 100%)",
        "crimson-gradient": "linear-gradient(135deg, #FFFFFF 0%, #D92338 50%, #881337 100%)",
        "hero-overlay":
          "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(5,5,5,0.75) 60%, rgba(5,5,5,0.98) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-up-delay": "fadeUp 0.7s ease-out 0.2s forwards",
        "gold-pulse": "goldPulse 3s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        goldPulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      screens: {
        xs: "360px",
        sm: "430px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "100": "25rem",
        "112": "28rem",
        "128": "32rem",
      },
      letterSpacing: {
        widest: "0.25em",
        "ultra-wide": "0.35em",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
      },
    },
  },
  plugins: [],
};

export default config;
