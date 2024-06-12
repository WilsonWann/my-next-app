import type { Config } from "tailwindcss";
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

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': {
          light: colors.slate[300],
          DEFAULT: colors.slate[500],
          dark: colors.slate[600],
        },
        'title': '#886A4B'
      },
      gridTemplateColumns: {
        // 添加自定義的minmax工具
        'minmax': 'minmax(150px, 1fr)',
      },
      aspectRatio: {
        '3/4': '3 / 4',
        'large-banner': '1920 / 571',
        'logo': '283 / 70'
      },
      content: {
        "painting-frame": "url('./../assets/wet-orange-and-white-paint-filling-frame.jpg')",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        ...customKeyframes,
      },
      animation: {
        ...customAnimation,
      }
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
        '.grid-cols-2-minmax': {
          gridTemplateColumns: 'repeat(2, minmax(150px, 1fr))',
        },
      });
    }),
  ],
};
export default config;
