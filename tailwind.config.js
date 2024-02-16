/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#212121",
        secondary: "#06D889",
      },
      fontFamily: {
        'saira': ['Saira', 'sans-serif'],
        'saira-condensed': ['Saira Condensed', 'sans-serif'],
      },
      fontSize: {
        '6xl': '54px',
      }
    },
  },
  plugins: [],
}


