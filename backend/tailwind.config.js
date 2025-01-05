/** @type {import('tailwindcss').Config} */

const tailwindExtend: Partial<CustomThemeConfig> | undefined = {
  colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
    "primary": "#191E29",
    "secondary": "#0B0E14",
    "backgroundLight": "#E1E8F5",
    "textMuted": "#6f6f6f",
    "backgroundDark": "#262626"
  }
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: tailwindExtend,
  },
  plugins: [],
  darkMode: "class"
};