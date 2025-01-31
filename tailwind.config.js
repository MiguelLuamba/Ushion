import { COLORS as colors } from "./src/utils/colors"
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily: {
        barlow: ["BarlowRegular"],
        "barlow-bold": ["BarlowBold"],
      },
    },
  },
  plugins: [],
}