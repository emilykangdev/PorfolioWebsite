/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'
// const colors = require('tailwindcss/colors')

const colorNames = {
  
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      // transparent: 'transparent',
      // current: 'currentColor',
      // black: colors.black,
      // white: colors.white,
      // gray: colors.gray,
      // emerald: colors.emerald,
      // indigo: colors.indigo,
      // yellow: colors.yellow,
      "techcolor": "#84cc16",
      // primary: '#f8875c',
      // secondary: '#7CAD9D',
      // 'cardcolor': '#f8875c',
    }
  },
  plugins: [
    daisyui,
  ],

}