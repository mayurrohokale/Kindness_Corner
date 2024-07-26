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
        "courier" : ["Courier Prime"],
        
        
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-88px)' },
        },
      },
      animation: {
        slide: 'slide 2s linear infinite',
      },
    
    }
  
  },
  plugins: [],
}

