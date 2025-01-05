import type { Config } from "tailwindcss";
import { CustomThemeConfig } from "tailwindcss/types/config";

const content: string[] = [
  "./src/**/*.{js,tsx,ts,jsx}",
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];

const tailwindExtend: Partial<CustomThemeConfig> | undefined = {
  colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
    "dm-primary": "#131415",
    "dm-secondary": "#191b1c",
    "dm-third": "#141616",
    "dm-primary-text": "#d2d3d3",
    "dm-secondary-text": "#d2d3d3",
    "dm-third-text": "#a8a9a9",
    "lm-primary": "#f8fafc",
    "lm-secondary": "#e2e8f0",
    "lm-third": "#cbd5e1",
    "lm-primary-text": "#6b7280",
    "lm-secondary-text": "#4b5563",
    "lm-third-text": "#111827"
  }
};

const config: Config = {
  content: content,
  theme: {
    extend: tailwindExtend,
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
  darkMode: "class"
};

export default config;
