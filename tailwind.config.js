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
        crimson: ['Crimson Pro', 'sans-serif'],
        saira: ['Saira', 'sans-serif'],
      },
      fontSize: {
        '6xl': '54px',
      }
    },
  },
  plugins: [],
}

