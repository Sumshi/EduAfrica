/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient': 'linear-gradient(98deg, #6eabf0 31%, #60d6e8)',
      },
      fontFamily: {
        lobster: ['Lobster', 'cursive'],
        'nunito-sans': ['Nunito Sans', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
      },
    },
  },

  plugins: [],
}