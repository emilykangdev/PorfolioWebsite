/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#f8875c',
      secondary: '#7CAD9D',
      'cardcolor': '#f8875c',
    }
  },
  plugins: [
    daisyui,
  ],

}