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
      'red': {
        50: '#FDF2F2',
        100: '#FDE8E8',
        200: '#FBD5D5',
        300: '#F8B4B4',
        400: '#F98080',
        500: '#F05252',
        600: '#E02424',
        700: '#C81E1E',
        800: '#9B1C1C',
        900: '#771D1D',
      }
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
