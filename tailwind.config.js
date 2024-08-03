/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montSerrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(35deg, #494949, #313131)',
        'active-gradient': 'linear-gradient(to right, #f27121, #e94057)'
      }
    },
  },
  plugins: [],
}

