import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin');
import { origin, animationFunction, scale110, scale100, scale150 } from './src/helper/tailwind-function.helper'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        toUp: {
          '0%': { transform: `${origin()} ${scale110}`, },
          '100%': { transform: `${origin(undefined, 'up')} ${scale110}`, },
        },
        toRightUp: {
          '0%': { transform: `${origin()} ${scale110}`, },
          '100%': { transform: `${origin('right', 'up')} ${scale110}`, },
        },
        toRight: {
          '0%': { transform: `${origin()} ${scale110}`, },
          '100%': { transform: `${origin('right')} ${scale110}`, },
        },
        toRightDown: {
          '0%': { transform: `${origin()} ${scale110}`, },
          '100%': { transform: `${origin('right', 'down')} ${scale110}`, },
        },
        toDown: {
          '0%': { transform: `${origin()} ${scale110}`, },
          '100%': { transform: `${origin(undefined, 'down')} ${scale110}`, },
        },
        toLeftDown: {
          '0%': { transform: `${origin()} ${scale110}`, },
          '100%': { transform: `${origin('left', 'down')} ${scale110}`, },
        },
        toLeft: {
          '0%': { transform: `${origin()} ${scale110}`, },
          '100%': { transform: `${origin('left')} ${scale110}`, },
        },
        toLeftUp: {
          '0%': { transform: `${origin()} ${scale110}`, },
          '100%': { transform: `${origin('left', 'up')} ${scale110}`, },
        },
        scaleUp: {
          '0%': { transform: `${origin()} ${scale100}`, },
          '100%': { transform: `${origin()} ${scale110}`, },
        },
        scaleDown: {
          '0%': { transform: `${origin()} ${scale110}`, },
          '100%': { transform: `${origin()} ${scale100}`, },
        }

      },
      animation: {
        toUp: animationFunction('toUp'),
        toRightUp: animationFunction('toRightUp'),
        toRight: animationFunction('toRight'),
        toRightDown: animationFunction('toRightDown'),
        toDown: animationFunction('toDown'),
        toLeftDown: animationFunction('toLeftDown'),
        toLeft: animationFunction('toLeft'),
        toLeftUp: animationFunction('toLeftUp'),
        scaleUp: animationFunction('scaleUp'),
        scaleDown: animationFunction('scaleDown'),
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.direct-mb-32 > *': {
          'margin-bottom': '8rem', // 相當於 mb-32
        },
      });
    }),
  ],
};
export default config;
