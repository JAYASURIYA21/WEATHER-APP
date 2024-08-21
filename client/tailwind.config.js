/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'blue':'#01539d',
      'mild':'#eea47f',
      'bermuda': '#78dcca',
    },
    fontFamily: {
      display: ['Raleway', "sans-serif"],
    },
    extend: {
      keyframes: {
        rotate: {
          '0%': {
            transform: 'rotate(0)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        }
      },
      animation: {
        'rotate-constant': 'rotate 60s linear infinite',
        'rotate-loading': 'rotate 1s linear infinite'
      }
    }
  },
  plugins: [],
}

