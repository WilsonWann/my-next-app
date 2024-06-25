import type { Config } from "tailwindcss"
const plugin = require('tailwindcss/plugin');
import { customKeyframes, customAnimation } from './src/helper/tailwind-function.helper'
import colors from 'tailwindcss/colors'

type PluginFunctionParams = {
  addVariant: (name: string, callback: (options: { modifySelectors: (modifier: ({ className }: { className: string }) => string) => void; separator: string }) => void) => void;
  e: (className: string) => string;
};

type AddUtilitiesParams = {
  addUtilities: (utilities: Record<string, Record<string, string | number>>) => void;
};


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        title: {
          light: "hsl(var(--title-light))",
          DEFAULT: "hsl(var(--title))",
        },
        subtitle: "hsl(var(--subtitle))",
        theme: {
          light: colors.slate[300],
          DEFAULT: colors.slate[500],
          dark: colors.slate[600],
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        ...customKeyframes,
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        ...customAnimation,
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      zIndex: {
        'hidden': '-1',
      },
      aspectRatio: {
        '3/4': '3 / 4',
        'main-banner': '1920 / 571',
        'service-banner': '1920 / 490',
        'logo': '283 / 70'
      },
      backgroundImage: {
        'half-gold-gray': 'linear-gradient(to right, #FFD700 50%, #808080 50%)',
      },
      backgroundClip: {
        'text': 'text',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: AddUtilitiesParams) {
      addUtilities({
        '.direct-mb-32 > *': {
          'margin-bottom': '8rem', // 相當於 mb-32
        },
        '.direct-mb-1 > *': {
          'margin-bottom': '4rem', // 相當於 mb-32
        },
      });
    }),
    plugin(function ({ addUtilities }: AddUtilitiesParams) {
      addUtilities({
        '.grid-cols-4-minmax': {
          gridTemplateColumns: 'repeat(4, minmax(150px, 1fr))',
        },
      });
    }),
    plugin(function ({ addUtilities }: AddUtilitiesParams) {
      addUtilities({
        '.grid-cols-3-rows-2': {
          gridTemplateColumns: 'repeat(3, minmax(150px, 1fr))',
          gridTemplateRows: 'repeat(2, 280px)',
        },
      });
    }),
    plugin(function ({ addUtilities }: AddUtilitiesParams) {
      addUtilities({
        '.grid-cols-2-rows-3': {
          gridTemplateColumns: 'repeat(2, minmax(150px, 1fr))',
          gridTemplateRows: 'repeat(3, 280px)',
        },
      });
    }),
    plugin(function ({ addUtilities }: AddUtilitiesParams) {
      addUtilities({
        '.grid-2x2': {
          gridTemplateColumns: '1fr 2fr',
          gridTemplateRows: 'repeat(2, auto)',
        },
      });
    }),
    plugin(function ({ addUtilities }: AddUtilitiesParams) {
      addUtilities({
        '.grid-1x4': {
          gridTemplateColumns: 'repeat(1, minmax(150px, 1fr))',
          gridTemplateRows: 'repeat(4, auto)',
        },
      });
    }),
    plugin(function ({ addUtilities }: AddUtilitiesParams) {
      const newUtilities = {
        '.text-stroke': {
          textShadow: `
              -1px -1px 0 #000,
               1px -1px 0 #000,
              -1px  1px 0 #000,
               1px  1px 0 #000
            `,
        },
      }

      addUtilities(newUtilities);
    }),
    plugin(function ({ addUtilities }: AddUtilitiesParams) {
      addUtilities({
        '.bg-clip-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
        },
        '.text-transparent': {
          'color': 'transparent',
        },
      });
    }),
  ],
} satisfies Config;

export default config;

