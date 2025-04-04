/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        //add more colors here
        'green': '#CDD8B7',
      },

      fontFamily: {
        //choose a different font from here
        'serif' : ['Podkova', 'serif'],
      },
  
      fontWeight: {
        //those are just random values you can modify them
        'regular': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
      },
      keyframes: {
        //IF NEEDED
      },
      animation: {
        //IF NEEDED
      }
    },
  },
  plugins: [],
}

