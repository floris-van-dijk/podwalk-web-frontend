/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'npo-blue-200': 'hsl(217 34% 30%)',
        'npo-blue-300': 'hsl(217 39% 26%)',
        'npo-blue-400': 'hsl(217 46% 22%)',
        'npo-blue-600': 'hsl(217 66% 13%)',
        'npo-blue-900': 'hsl(217 82% 6%)',
        'npo-ebony': 'hsl(216 66% 13%)',
        'npo-grey': 'hsl(0 0% 90%)',
        'npo-orange': 'hsl(26 100% 50%)',
        'npo-white': 'hsl(0 0% 100%)',
      },
      fontFamily: {
        npo: ['"NPO Regular"', ...defaultTheme.fontFamily.sans],
        'npo-bold': ['"NPO Bold"', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        'spin': 'spin 2s infinite linear',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      }
    },
  },
  plugins: [],
}

