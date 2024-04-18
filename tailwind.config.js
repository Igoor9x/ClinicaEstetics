/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Roboto', 'sans-serif']
      },
      height: {
        "complete": "90vh"
      },
  
      backgroundColor: {
        "fot": "#baada1"
      },
      backgroundImage: {
        "home": "url('/assets/banner1.jpg')",
        "lineal": "linear-gradient(to bottom, #F2EFED, #c9bea5)",
        "basic": "#F2EFED"
      }
    },
  },
  plugins: [],
}