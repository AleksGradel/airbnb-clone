/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#222222',
      'grey': '#717171',
      'grey-dark': '#222222',
      'grey-light': '#d4d4d4',
      'grey-super-light': '#f8f8f8',
      'pink': '#ff385c',
    },
    extend: {
      transitionProperty: {
        'height': 'height'
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
