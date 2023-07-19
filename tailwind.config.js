/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      fontFamily: {
          heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
          // Basic
          "white": "#ffffff",
          "black": "#000000",
          "transparent": "transparent",
          // Standard (0%)
          "teal": "#008080",
      },
      extend: {},
  },
  plugins: [],
}
