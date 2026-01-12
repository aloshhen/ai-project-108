/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'coffee-gradient': {
          start: '#fb923c',
          middle: '#f59e0b',
          end: '#ca8a04'
        }
      },
      backgroundImage: {
        'electric-coffee': 'linear-gradient(to right, #fb923c, #f59e0b, #ca8a04)'
      }
    }
  },
  plugins: []
}