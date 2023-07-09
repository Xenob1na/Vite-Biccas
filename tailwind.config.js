/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
    screens: {
      lgMax1: {max: '1500px'},
      lgMax: {max: '1300px'},
      lgMax2: {max: '1280px'},
      lg: {max: '1180px'},
      lg2: {max: '960px'},
      lg3: {max: '990px'},
      md: {max: '790px'},
      sm: {max: '700px'},
      xs: {max: '580px'},
      xs2: {max: '500px'},
    }
  },
  plugins: [],
}
