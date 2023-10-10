/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Hero': 'url(/public/shoping.jpg)'
      }
    },
  },
  plugins: [],
}

