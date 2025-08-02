/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./public/**/*.{html,js}", "./src/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["yekanback"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    "prettier-plugin-tailwindcss"
  ],
}