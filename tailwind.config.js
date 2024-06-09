/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "inter": ["Inter", "sans-serif"],
        "monserrat": ["Montserrat", "sans-serif"],
        "itim":["Itim", "cursive"],
        "josiefin":["Josefin Sans", "sans-serif"],
        "Roboto":["Roboto Condensed", "sans-serif"],
        "sans": ['"Source Sans Pro"', 'sans-serif'],
      }
    }
  
  },
  plugins: [],
}

