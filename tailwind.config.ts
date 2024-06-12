import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');
import { customKeyframes, customAnimation } from './src/helper/tailwind-function.helper'

type PluginFunctionParams = {
  addVariant: (name: string, callback: (options: { modifySelectors: (modifier: ({ className }: { className: string }) => string) => void; separator: string }) => void) => void;
  e: (className: string) => string;
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
    plugin(function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.direct-mb-32 > *': {
          'margin-bottom': '8rem', // 相當於 mb-32
        },
        '.direct-mb-1 > *': {
          'margin-bottom': '4rem', // 相當於 mb-32
        },
      });
    }),
  ],
};
export default config;
