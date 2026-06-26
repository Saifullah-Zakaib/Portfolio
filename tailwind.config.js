/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        hairline: "var(--hairline)",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      borderColor: {
        DEFAULT: "var(--hairline)",
      },
      animation: {
        "float-up": "float-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 1s ease-out both",
        "scroll-hint": "scroll-hint 2s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        "float-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "scroll-hint": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(4px)", opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
