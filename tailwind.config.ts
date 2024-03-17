import type { Config } from "tailwindcss";
require("daisyui");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lobster': ['Lobster', 'cursive'],
        'kaushan': ['Kaushan Script', 'cursive'],
      },
      backgroundImage: {
        "grad": "linear-gradient (to right, #4361ee, #ff7400)",
      },
      colors: {
        "default": "#ff7400",
        "default-alt": "#4361ee",
        "default-gray": "#666",
        "dark": "#000b"
      },
      animation: {
        'spin-slow': 'spin 50s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
